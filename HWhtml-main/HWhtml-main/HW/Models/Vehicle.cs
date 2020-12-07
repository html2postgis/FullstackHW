using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;

namespace HW.Models
{
    public interface IVehicleRepository
    {
        bool AddVehicle(Vehicle item);
        List<Vehicle> GetAllVehicles();
        Vehicle FindVehicle(long key);
        Vehicle RemoveVehicle(long key);
        void UpdateVehicle(Vehicle item);
    }
    public class VehicleList : IVehicleRepository
    {
        Dictionary<long, Vehicle> vehicles = new Dictionary<long, Vehicle>();
        long maxId = 0;
        Object locker = new Object();
        public bool AddVehicle(Vehicle add)
        {
            lock (locker)
            {
                add.Id = maxId;
                vehicles.Add(maxId++, add);
                return true;
            }
        }

        public Vehicle FindVehicle(long key)
        {
            Vehicle item;
            vehicles.TryGetValue(key, out item);
            return item;
        }

        public List<Vehicle> GetAllVehicles()
        {
            return vehicles.Values.ToList();
        }

        public Vehicle RemoveVehicle(long key)
        {
            throw new NotImplementedException();
        }

        public void UpdateVehicle(Vehicle item)
        {
            throw new NotImplementedException();
        }
        
    }
    public class Vehicle
    {
        public long Id { get; set; }
        public string PlateNumber { get; set; }

        // arbitrary capacity of given truck expressed in package sizes:
        // small - 1
        // medium - 2
        // large - 3
        public Vehicle()
        {
            Lng = 0;
            Lat = 0;
            DeliveryRoads = new List<Order>();
            PickupRoads = new List<Order>();

        }
        //depot address must be given as first address
        public List<Order> DeliveryRoads { get; set; }
        public List<Order> PickupRoads { get; set; }
        public List<PointF> travelRouteP { get; set; }
        public List<PointF> travelRouteD { get; set; }
        public float Lat { get; set; }
        public float Lng { get; set; }


        public int MaxCapacity { get; set; }
        public int CurrentCapacity { get; set; }
       
       
    }
}
