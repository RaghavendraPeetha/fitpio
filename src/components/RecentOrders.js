import React from 'react';
import '../styles/RecentOrders.css';

const orders = [
  { img_url:"https://images.unsplash.com/photo-1592052525121-16d61bce8fce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8OTQ1MjQ5NHx8ZW58MHx8fHx8", customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { img_url:"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8OTQ1MjQ5NHx8ZW58MHx8fHx8", customer: 'Jane Cooper', orderNo: '48967586', amount: '$365.02', status: 'Delivered' },
  { img_url:"https://images.unsplash.com/photo-1593717761902-ac814190dc8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8OTQ1MjQ5NHx8ZW58MHx8fHx8", customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
  { img_url:"https://images.unsplash.com/photo-1593839686924-4b344fac3f8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw5NDUyNDk0fHxlbnwwfHx8fHw%3D", customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
  { img_url:"https://media.istockphoto.com/id/1151593807/photo/portrait-of-young-man-with-dark-grey-background.webp?s=170667a&w=0&k=20&c=FiDUvw2wOTCpr0f3e6MEm3UkV43Geu6fOAAd04JAIgQ=", customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
  { img_url:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D", customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

const getStatusClass = (status) => {
  switch (status) {
    case 'Delivered':
      return 'status-delivered';
    case 'Pending':
      return 'status-pending';
    case 'Cancelled':
      return 'status-cancelled';
    default:
      return '';
  }
};

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <h3>Recent Orders</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="customer-info">
                  <img src={order.img_url} alt={order.customer} />
                  {order.customer}
                </td>
                <td>{order.orderNo}</td>
                <td>{order.amount}</td>
                <td><span className={`status ${getStatusClass(order.status)}`}>{order.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentOrders

