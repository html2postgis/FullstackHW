using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HW.Models
{
    
    public class RoadCalculator
    {
        public Order ClosestForPickUp(Vehicle point, List<Order> packages)
        {
            Order closestPoint = null;
            float closestDistance = float.MaxValue;

            foreach (var p in packages)
            {
                float distanceToPoint = (float)Math.Sqrt(Math.Pow(p.PickupAddress.Lat - point.Lat, 2) + Math.Pow(p.PickupAddress.Lng - point.Lng, 2));
                if (distanceToPoint < closestDistance)
                {
                    closestPoint = p;
                    closestDistance = distanceToPoint;
                }
            }

            return closestPoint;
        }
        public Order ClosestForDelivery(Vehicle point, List<Order> packages)
        {
            Order closestPoint = null;
            float closestDistance = float.MaxValue;

            foreach (var p in packages)
            {
                float distanceToPoint = (float)Math.Sqrt(Math.Pow(p.DeliveryAddress.Lat - point.Lat,2)+ Math.Pow(p.DeliveryAddress.Lng - point.Lng, 2));
                if (distanceToPoint < closestDistance)
                {
                    closestPoint = p;
                    closestDistance = distanceToPoint;
                }
            }

            return closestPoint;
        }
        public Order ClosestFoPickUp(Order point, List<Order> packages)
        {
            Order closestPoint = null;
            float closestDistance = float.MaxValue;

            foreach (var p in packages)
            {
                float distanceToPoint = (float)Math.Sqrt(Math.Pow(p.PickupAddress.Lat - point.PickupAddress.Lat, 2) + Math.Pow(p.PickupAddress.Lng - point.PickupAddress.Lng, 2));
                if (distanceToPoint < closestDistance)
                {
                    closestPoint = p;
                    closestDistance = distanceToPoint;
                }
            }

            return closestPoint;
        }
        public Order ClosestForDelivery(Order point, List<Order> packages)
        {
            Order closestPoint = null;
            float closestDistance = float.MaxValue;

            foreach (var p in packages)
            {
                float distanceToPoint = (float)Math.Sqrt(Math.Pow(p.DeliveryAddress.Lat - point.DeliveryAddress.Lat, 2) + Math.Pow(p.DeliveryAddress.Lng - point.DeliveryAddress.Lng, 2));
                if (distanceToPoint < closestDistance)
                {
                    closestPoint = p;
                    closestDistance = distanceToPoint;
                }
            }

            return closestPoint;
        }

    }

}
