using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Area("Admin")]
    public class RevenueController : Controller
    {
        private readonly ShoeStoreDbContext _context;

        public RevenueController(ShoeStoreDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var orders = await _context.Orders
                .Include(o => o.OrderDetails)
                .ToListAsync();

            var revenueStats = orders
                .GroupBy(o => new { Year = o.OrderDate?.Year ?? 0, Month = o.OrderDate?.Month ?? 0 })
                .Select(g => new RevenueStat
                {
                    Month = $"{g.Key.Month}/{g.Key.Year}",
                    TotalRevenue = g.Sum(o => o.OrderDetails.Sum(d => d.Quantity * d.UnitPrice))
                })
                .OrderBy(r => r.Month)
                .ToList();

            return View(revenueStats);
        }
    }

    public class RevenueStat
    {
        public string ?Month { get; set; }
        public decimal TotalRevenue { get; set; }
    }
}
