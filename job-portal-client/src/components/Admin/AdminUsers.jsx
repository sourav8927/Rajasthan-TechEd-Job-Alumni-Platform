import React, { useState, useEffect } from "react";
import { useAuth } from "../../store/Auth";
import {Link, Outlet} from "react-router-dom";
import { BASE_URL } from "../../store/Helper";
const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { UserAuthorization } = useAuth();
  const fetchData = async () => {
    const URL = `${BASE_URL}/api/admin/users`;
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: UserAuthorization,
      },
    });
    const data = await response.json();
    setUsers(data.users);
    console.log("Admin User", data.users);
  };

  useEffect(() => {
    fetchData();
  }, []);

//   const deleteUser=async()=>{
//     const URL = "http://127.0.0.2:5000/api/admin/users/:id";
//     const response = await fetch(URL, {
//       method: "DELETE",
//       headers: {
//         Authorization: UserAuthorization,
//       },
//     });
//     // const data = await response.json();
//     // setUsers(data.users);
//     // console.log("Admin User", data.users);
//   }
  const handleClick= async(id)=>{
    try {
        const URL = `${BASE_URL}/api/admin/users/${id}`;
        const response = await fetch(URL, {
          method: "DELETE",
          headers: {
            Authorization: UserAuthorization,
          },
        });
        const data = await response.json();
        if(response.ok){
          fetchData();
        }
        console.log(data)
        console.log(id)
    } catch (error) {
        console.log(error)
    }
    
  }
  return (
    <div className="p-6 items-center justify-center m-auto">
      <div>
        <h1 className="font-bold text-2xl">Admin users data</h1>
      </div>
      <div className="max-h-screen md:w-[80vw] overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 ">
            <tr>
              <th  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Update</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
            </tr>
          </thead>
        
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((currUser,index) => {
              return <tr key={index} className="bg-sky-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{currUser.username}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{currUser.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{currUser.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><Link to={`/admin/users/update/${currUser._id}`}>Edit</Link></td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><button className="text-white px-2 py-1 rounded-lg hover:text-indigo-900 bg-red-600" onClick={(e)=>{handleClick(currUser._id)}}>Delete</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AdminUsers;
