using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HW.Models
{
    public class Address
    {
        public Address()
        {
            City = "";
            StreetAddress = "";
            Postcode = "";
            lng = 0;
            lat = 0;
            person = null;
        }
        public string City { get; set; }
        public string StreetAddress { get; set; }
        public string Postcode { get; set; }
        public float lng { get; set; }
        public float lat { get; set; }
        public Person person { get; set; }
    }
}
