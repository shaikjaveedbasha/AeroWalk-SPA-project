import React from "react";
import profile from './assets/shaikjaveed.jpg'; // user image

function Account() {
    const user = {
        name: "Javeed Shaik",
        email: "Shaikjav3@gmail.com",
        joined: "March 2024",
        address: "Hyderabad, Telangana, India",
    };

    const orders = [
        {
            id: "ORD-001",
            product: "AeroWalk Velocity Pro",
            date: "Oct 20, 2025",
            status: "Delivered",
            price: "₹4,499",
        },
        {
            id: "ORD-002",
            product: "AeroWalk StreetFlex",
            date: "Nov 2, 2025",
            status: "Shipped",
            price: "₹3,299",
        },
        {
            id: "ORD-002",
            product: "Puma Smash V3",
            date: "Jan 2, 2025",
            status: "Delivered",
            price: "₹4,299",
        },
        {
            id: "ORD-002",
            product: "AeroWalk StreetFlex",
            date: "Nov 2, 2025",
            status: "Shipped",
            price: "₹3,299",
        },
    ];

    return (
        <section className="py-5 bg-light" id="account">
            <div className="container" style={{backgroundColor:'#F5F6FA'}}>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">
                        My <span className="">Account</span>
                    </h2>
                    <p className="text-muted fw-medium">
                        Manage your profile, orders, and account preferences.
                    </p>
                </div>

                <div className="row">
                    {/* Profile Section */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-0 shadow-sm text-center p-3">
                            <img src={profile} alt="User Profile" className="rounded-2 mx-auto mb-3" width="120" height="150" />
                            <h5 className="fw-bold">{user.name}</h5>
                            <p className="fw-medium small mb-1">{user.email}</p>
                            <p className="fw-medium small mb-1">
                                Member since {user.joined}
                            </p>
                            <p className="fw-medium small">{user.address}</p>
                            <button className="btn btn-primary btn-sm mt-2">
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    {/* Orders Section */}
                    <div className="col-md-8 mb-4">
                        <div className="card border-0 shadow-sm p-4">
                            <h5 className="fw-bold mb-3">My Orders</h5>
                            <table className="table table-hover align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Product</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.product}</td>
                                            <td>{order.date}</td>
                                            <td>
                                                <span
                                                    className={`badge ${order.status === "Delivered"
                                                        ? "bg-success"
                                                        : "bg-warning text-dark"
                                                        }`}
                                                >
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td>{order.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Account Settings */}
                        <div className="card border-0 shadow-sm p-4 mt-4 text-center">
                            <h5 className="fw-bold mb-3">Account Settings</h5>
                            <div className="d-flex flex-wrap justify-content-between">
                                <button className="btn btn-info btn-sm">
                                    Change Password
                                </button>
                                <button className="btn btn-secondary text-white btn-sm">
                                    Manage Address
                                </button>
                                <button className="btn btn-danger text-white btn-sm">
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Account;


