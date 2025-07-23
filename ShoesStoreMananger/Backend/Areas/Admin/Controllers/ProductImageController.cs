using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{

    [Area("Admin")]
    public class ProductImageController : Controller
    {
        private readonly ShoeStoreDbContext _context;
        private readonly IWebHostEnvironment _environment;
        public ProductImageController(ShoeStoreDbContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        public IActionResult Create(int productId)
        {
            var productImage = new ProductImage
            {
                ProductId = productId
            };

            return View(productImage);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(ProductImage productImage)
        {
            // Kiểm tra sản phẩm đã có ảnh chưa
            var existingImage = await _context.ProductImages
                .FirstOrDefaultAsync(p => p.ProductId == productImage.ProductId);

            if (existingImage != null)
            {
                Console.WriteLine("Đã tồn tại ảnh: " + existingImage.ImageUrl);
                ModelState.AddModelError("", "Sản phẩm này đã có ảnh. Không thể thêm ảnh mới.");
                return View(productImage);
            }

            // Xử lý upload ảnh trước khi kiểm tra ModelState
            if (productImage.ImageFile != null && productImage.ImageFile.Length > 0)
            {
                string uploadsFolder = Path.Combine(_environment.WebRootPath, "uploads/products");
                Directory.CreateDirectory(uploadsFolder);

                string uniqueFileName = Guid.NewGuid().ToString() + "_" + productImage.ImageFile.FileName;
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await productImage.ImageFile.CopyToAsync(stream);
                }

                productImage.ImageUrl = "/uploads/products/" + uniqueFileName;
            }

            ModelState.Remove("ImageUrl");

            if (ModelState.IsValid)
            {
                _context.ProductImages.Add(productImage);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index", "Product", new { id = productImage.ProductId });
            }

            return View(productImage);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Delete(int id)
        {
            var image = await _context.ProductImages.FindAsync(id);
            if (image != null)
            {
                // Xóa file vật lý trong thư mục uploads nếu có
                string filePath = Path.Combine(_environment.WebRootPath, image.ImageUrl.TrimStart('/').Replace("/", Path.DirectorySeparatorChar.ToString()));
                if (System.IO.File.Exists(filePath))
                {
                    System.IO.File.Delete(filePath);
                }

                _context.ProductImages.Remove(image);
                await _context.SaveChangesAsync();
            }

            return RedirectToAction("Index", "Product", new { id = image?.ProductId });
        }

    }
}
