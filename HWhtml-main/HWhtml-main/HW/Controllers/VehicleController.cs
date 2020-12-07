using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HW.Models;
using System.Drawing;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HW.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {
        public IVehicleRepository _vehiclesList;
        public IOrderList _orderList;
        // GET: api/<FormSubmitController>
        public VehicleController(IVehicleRepository vehicleList, IOrderList o)
        {
            _vehiclesList = vehicleList;
            _orderList = o;
        }
        [HttpPost("{action}")]
        public IActionResult Action1([FromBody] Vehicle value)
        {

            _vehiclesList.AddVehicle(value);
            Console.WriteLine("Vehicle1");
            return Created("", value);
        }

        // GET api/<FormSubmitController>/5
        [HttpGet("{action}")]
        public List<Vehicle> GetVehicles()
        {
            return _vehiclesList.GetAllVehicles();
        }
        [HttpGet("{action}")]
        public List<Order> GetOrders()
        {
            return _orderList.GetOrders();
        }
        [HttpPost("{action}")]
        public IActionResult AddOrders([FromBody] Order value)
        {
            _orderList.AddOrder(value);
            //Console.WriteLine("Vehicle1");
            return Created("", value);
        }
        [HttpGet("{action}")]
        public List<Vehicle> GetPickupRoads()
        {
            var olist = _orderList.GetOrders();
            var calculator = new RoadCalculator();
            calculator.SortForPickup(olist, _vehiclesList.GetAllVehicles());
            return _vehiclesList.GetAllVehicles();
        }
        [HttpGet("{action}")]
        public List<Vehicle> GetDeliveryRoads()
        {
            var olist = _orderList.GetOrders();
            var calculator = new RoadCalculator();
            calculator.SortForDelivery(olist, _vehiclesList.GetAllVehicles());
            return _vehiclesList.GetAllVehicles();
        }
        [HttpGet("{action}")]
        public List<List<PointF>> GetRoutesD()
        {
            var temp = new List<List<PointF>>();
            foreach (var veh in _vehiclesList.GetAllVehicles())
            {
                var dd = new List<PointF>();
                    foreach (var te in veh.DeliveryRoads)
                    {

                        dd.Add(new PointF(te.DeliveryAddress.Lat, te.DeliveryAddress.Lng));
                        Console.WriteLine(te.DeliveryAddress.Lat);
                    }
                    dd.Add(new PointF(52.232014f, 21.006039f));
                
                temp.Add(dd);
                
            }
            return temp;
        }
        [HttpGet("{action}")]
        public List<List<PointF>> GetRoutesP()
        {
            var temp = new List<List<PointF>>();
            foreach (var veh in _vehiclesList.GetAllVehicles())
            {
                var dd = new List<PointF>();
                dd.Add(new PointF(veh.Lat, veh.Lng));
                foreach (var te in veh.PickupRoads)
                {
                    dd.Add(new PointF(te.PickupAddress.Lat, te.PickupAddress.Lng));
                }
                dd.Add(new PointF(52.232014f, 21.006039f));
              

                temp.Add(dd);
            }
            return temp;
        }
    }
}
