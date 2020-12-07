using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HW.Models
{
    
    public class RoadCalculator
    {
        public Vehicle ClosestForPickUp(Order package, List<Vehicle> vehicles)
        {
            Vehicle closestPoint = null;
            float closestDistance = float.MaxValue;
            int weight = 0;
            foreach (var v in vehicles)
            {
                float distanceToPoint = (float)Math.Sqrt(Math.Pow(v.Lat - package.PickupAddress.Lat, 2) + Math.Pow(v.Lng - package.PickupAddress.Lng, 2));
                if (distanceToPoint < closestDistance && v.CurrentCapacity+package.PackageWeight<=v.MaxCapacity)
                {
                    weight = package.PackageWeight;
                    closestPoint = v;
                    closestDistance = distanceToPoint;
                }
            }
            closestPoint.CurrentCapacity += weight;
            return closestPoint;
        }
        public void SortForPickup(List<Order> orders, List<Vehicle> vehicles)
        {
            foreach(var p in orders)
            {
                Vehicle temp = ClosestForPickUp(p, vehicles);
                if(temp!=null)
                {
                    temp.PickupRoads.Add(p);
                }
            }
        }
        public Vehicle ClosestForDelivery(Order package, List<Vehicle> vehicles)
        {
            List<Vehicle> temp = new List<Vehicle>();
            foreach(var vi in vehicles)
            {
                

                if (vi.Lat == 52.232014f && vi.Lng == 21.006039f)
                {
                    Console.WriteLine(vi.Lat);
                    Console.WriteLine(vi.Lng);
                    temp.Add(vi);
                }
            }
            Vehicle closestPoint = null;
            float closestDistance = float.MaxValue;
            int weight = 0;
            foreach (var v in temp)
            {
                float distanceToPoint = (float)Math.Sqrt(Math.Pow(v.Lat - package.DeliveryAddress.Lat, 2) + Math.Pow(v.Lng - package.DeliveryAddress.Lng, 2));
                Console.WriteLine(distanceToPoint);
                if (distanceToPoint < closestDistance && v.CurrentCapacity + package.PackageWeight <= v.MaxCapacity)
                {
                    weight = package.PackageWeight;
                    closestPoint = v;
                    closestDistance = distanceToPoint;
                }
            }
            closestPoint.CurrentCapacity += weight;
            return closestPoint;
        }
        public void SortForDelivery(List<Order> orders, List<Vehicle> vehicles)
        {
            foreach (var p in orders)
            {
                Vehicle temp = ClosestForDelivery(p, vehicles);
                if (temp != null)
                {
                    temp.DeliveryRoads.Add(p);
                }
            }
        }

    }

}
