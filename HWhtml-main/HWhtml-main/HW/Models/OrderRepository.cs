using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace HW.Models
{
    public interface IOrderList
    {
        bool AddOrder(Order order);
        List<Order> GetOrders();
        Order Find(string key);
        Order Remove(string key);
        void Update(Order item);
    }
    public class OrderList : IOrderList
    {
        Dictionary<long, Order> orders = new Dictionary<long, Order>();
        long maxId = 0;
        Object locker = new Object();
        public bool AddOrder(Order add)
        {
            lock (locker)
            {
                add.Id = maxId;
                orders.Add(maxId++, add);
                return true;
            }
        }

        public Order Find(string key)
        {
            throw new NotImplementedException();
        }

        public List<Order> GetOrders()
        {
            return orders.Values.ToList();
        }

        public Order Remove(string key)
        {
            throw new NotImplementedException();
        }

        public void Update(Order item)
        {
            throw new NotImplementedException();
        }
    }
}
