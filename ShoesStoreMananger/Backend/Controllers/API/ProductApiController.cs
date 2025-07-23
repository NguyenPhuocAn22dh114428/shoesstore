// File: Controllers/Api/ProductApiController.cs
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers.Api
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductApiController : ControllerBase
    {
        private readonly ShoeStoreDbContext _context;

        public ProductApiController(ShoeStoreDbContext context)
        {
            _context = context;
        }

        // GET: api/ProductApi
        //API Get Product cho trang Home 
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var products = await _context.Products
                .Where(p => p.IsActive)
                .Include(p => p.ProductImages) // Load hình ảnh của sản phẩm
                .Select(p => new
                {
                    p.Id,
                    p.Name,
                    p.Price,
                    ImageUrl = p.ProductImages
                        .Where(i => i.IsMain == true)
                        .Select(i => i.ImageUrl)
                        .FirstOrDefault() ?? string.Empty // Tránh lỗi null nếu không có ảnh chính
                })
                .ToListAsync();

            return Ok(products);
        }

        // GET: api/ProductApi/gender/men
        [HttpGet("gender/{gender}")]
        public async Task<IActionResult> GetBy(string gender)
        {
            var products = await _context.Products.Where(p => p.IsActive && p.Gender != null && p.Gender.ToLower() == gender.ToLower()).Include(p => p.ProductImages).Select(p => new
            {
                p.Id,
                p.Name,
                p.Price,
                ImageUrl = p.ProductImages
                .Where(i => i.IsMain == true)
                .Select(i => i.ImageUrl)
                .FirstOrDefault() ?? string.Empty
            })
        .ToListAsync();
            return Ok(products);
        }
    }
}