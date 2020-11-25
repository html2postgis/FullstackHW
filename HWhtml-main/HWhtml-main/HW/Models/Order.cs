using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HW.Models
{
    public class Order
    {
       
        public long Id { get; set; }
        public int PackageWeight { get; set; }
        public Address PickupAddress { get; set; }
        public Address DeliveryAddress { get; set; }


    }
}
