using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace HW.Models
{
    public interface IAddressList
    {
        bool AddAddress(Address address);
        Address GetAddress();
    }
    public class AddressList : IAddressList
    {
        Address address = new Address();
        public bool AddAddress(Address add)
        {
            address = add;
            return true;
        }
        public Address GetAddress()
        {
            return address;
        }
    }
}
