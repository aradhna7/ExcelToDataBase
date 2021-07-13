import React, { useState, useEffect } from 'react';
import { readData } from './jsonToBackendApi';

const DisplayInfo = () => {
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [admin, setAdmins] = useState([]);

  useEffect(() => {
    let mounted = true;
    readData('user').then((data) => {
      if (mounted) {
        setUser(data);
      }
    });
    return () => (mounted = false);
  }, [user]);

  useEffect(() => {
    let mounted = true;
    readData('products').then((data) => {
      if (mounted) {
        setProducts(data);
      }
    });
    return () => (mounted = false);
  }, [products]);

  useEffect(() => {
    let mounted = true;
    readData('admin').then((data) => {
      if (mounted) {
        setAdmins(data);
      }
    });
    return () => (mounted = false);
  }, [admin]);
  return (
    <div>
      <h3>Users</h3>
      <div>
        <table className='table'>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Age</th>
          </tr>
          {user &&
            user.map((u, i) => {
              return (
                <tr key={u._id}>
                  <td>{u.Name}</td>
                  <td>{u.Mobile}</td>
                  <td>{u.Age}</td>
                </tr>
              );
            })}
        </table>
      </div>
      <h3>Admin</h3>
      <div>
        <table className='table'>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
          </tr>
          {admin &&
            admin.map((u, i) => {
              return (
                <tr key={i}>
                  <td>{u.Name}</td>
                  <td>{u.Mobile}</td>
                </tr>
              );
            })}
        </table>
      </div>
      <h3>Products</h3>
      <div>
        <table className='table'>
          <tr>
            <th>ProductName</th>
            <th>Image</th>
          </tr>
          {products &&
            products.map((u, i) => {
              return (
                <tr key={i}>
                  <td>{u.ProductName}</td>
                  <td>{u.Image}</td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default DisplayInfo;
