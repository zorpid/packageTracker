import React, { useState, useEffect } from 'react';
import './packages.css'; // Add custom styles

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';

  // Fetch data from API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching orders 😢');
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders... 📦</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="orders-page">
      <h1 className="title">Order Tracker</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Parcel ID</th>
            <th>Status</th>
            <th>Sender</th>
            <th>ETA</th>
            <th>Location</th>
            <th>PhoneNumber</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.parcel_id}</td>
              <td className={`status ${order.status.replace(/\s+/g, '-').toLowerCase()}`}>
  {order.status}
</td>
              <td>{order.sender}</td>
              <td>{new Date(order.eta).toLocaleString()}</td>
              <td>{order.location_name}</td>
              <td>{order.user_phone}</td>
              <td>{new Date(order.last_updated).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
