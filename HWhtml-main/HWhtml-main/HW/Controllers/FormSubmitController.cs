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
        private readonly IAddressList _addressList;
        // GET: api/<FormSubmitController>
        public FormSubmitController(IAddressList addressList)
        {
            _addressList = addressList;
        }
        [HttpPost("{action}")]
        public IActionResult AddAddress([FromBody]Address value)
        {
            _addressList.AddAddress(value);
            return Created("",value);
        }

        // GET api/<FormSubmitController>/5
        [HttpGet("{action}")]
        public Address GetAddress()
        {
            return _addressList.GetAddress();
        }

    }
}
