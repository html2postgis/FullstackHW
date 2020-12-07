using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HW.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HW.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FormSubmitController : ControllerBase
    {
        public IOrderList _orderList;
        // GET: api/<FormSubmitController>
        public FormSubmitController(IOrderList orderList)
        {
            _orderList = orderList;
        }
        [HttpPost("{action}")]
        public IActionResult Action1([FromBody] Order value)
        {
            _orderList.AddOrder(value);
            Console.WriteLine("Action1");
            return Created("", value);
        }
        [HttpPost("{action}")]
        public IActionResult Action2([FromBody] Order value)
        {
            Console.WriteLine("Action2");
            _orderList.AddOrder(value);
            return Created("", value);
        }

        // GET api/<FormSubmitController>/5
        [HttpGet("{action}")]
        public List<Order> GetAddress()
        {
            return _orderList.GetOrders();
        }
        // update 
        [HttpPut("Update/{id}")]
        public IActionResult Update(int id,[FromBody] Order item)
        {
            if (item == null || (int)item.Id != id)
            {
                return BadRequest();
            }

            var todo = _orderList.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _orderList.Update(item);

            return Ok(item);
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _orderList.Remove(id);

        }

    }
}
