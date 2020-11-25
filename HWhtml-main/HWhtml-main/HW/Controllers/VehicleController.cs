using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HW.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HW.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {
       public IVehicleRepository _vehiclesList;
        // GET: api/<FormSubmitController>
        public VehicleController(IVehicleRepository vehicleList)
        {
            _vehiclesList = vehicleList;
        }
        [HttpPost("{action}")]
        public IActionResult Action1([FromBody] Vehicle value)
        {
            _vehiclesList.AddVehicle(value);
            Console.WriteLine("Vehicle1");
            return Created("", value);
        }
        //[HttpPost("{action}")]
        //public IActionResult Action2([FromBody] Vehicle value)
        //{
        //    Console.WriteLine("Action2");
        //    _vehiclesList.AddVehicle(value);
        //    return Created("", value);
        //}

        // GET api/<FormSubmitController>/5
        [HttpGet("{action}")]
        public List<Vehicle> GetVehicles()
        {
            return _vehiclesList.GetAllVehicles();
        }
        [HttpGet("{action}/{id}")]
        public List<Order> GetPickupRoads(int id)
        {
            var listabrum = new VehicleList();

            listabrum.AddVehicle(new Vehicle());
            var pickupTruck = listabrum.FindVehicle(id);
            var lista = new List<Order>();
            var order1 = new Order();
            order1.PickupAddress.Lat = 10;
            order1.PickupAddress.Lat = 10;

            var order2 = new Order();

            order1.PickupAddress.Lat = 20;
            order1.PickupAddress.Lat = 20;
            lista.Add(order1);
            lista.Add(order2);

            if (pickupTruck != null)
            {
                var calculator = new RoadCalculator();
                return new List<Order>() { calculator.ClosestForPickUp(pickupTruck, lista) };
            }
            return null;
        }
    }
}
