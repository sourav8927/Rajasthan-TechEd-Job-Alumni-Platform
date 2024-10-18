// import React from 'react'
// import { useState } from 'react'
// import { MdEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { useAuth } from "../store/Auth";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import { FaEye ,FaEyeSlash } from "react-icons/fa";

// const HirerRegister = () => {
//     const [User, setUser] = useState({
//         name: "",
//         email: "",
//         phone:"",
//         password: "",
//       });
//       const [visible, setvisible] = useState(false)
//       const handleInput = (e) => {
//         console.log(e);
//         let name = e.target.name;
//         let value = e.target.value;
    
//         setUser({
//           ...User,
//           [name]: value,
//         });
//       };

//       // for navigator
// const navigate= useNavigate();
// // for call the Auth.jsx using useContext
// const {storeTokenInLs}=useAuth();

//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(User);
    
//         try {
//           const registerURL = "http://127.0.0.5:3000/api/auth/register";
//           const response = await fetch(registerURL, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(User),
//           });
//           const res_data= await response.json();
//             console.log("response data",res_data);
           
//           if(response.ok){
//               //store in local storage
//               // localStorage.setItem("token",res_data.token)
//               toast.success("Registration successfully")
//               storeTokenInLs(res_data.token);
//               navigate("/hirerdetails")
    
//           }else{
//             toast.error(res_data.extraDetails? res_data.extraDetails: res_data.message);
//           }
//           console.log(response);
//         } catch (error) {
//           console.log(error);
//         }
//       };
//   return (
//     <section className="bg-slate-100 h-screen mt-10">
//         <main>
//           <div className="section-registration ">
//             <div className="container grid grid-two-cols ">

//               {/* for registration form */}
//               <div className="registration-form  bg-slate-200 mt-20   md:w-[30vw]  m-auto rounded-2xl shadow-2xl">
//                 <h1 className="main-heading text-center text-3xl font-bold text-blue-600  pt-10 pb-5">
//                   Employeer Registration
//                 </h1>
//                 <br />

//                 <form
//                   action=""
//                   onSubmit={handleSubmit}
//                   className=" px-10 pb-10 "
//                 >
//                   <div className="space-y-5 ">
//                     {/* for companyname */}
//                     <div className="space-y-2 ">
//                       <label htmlFor="name" className="">
//                         Company Name
//                       </label>
//                       <br />
//                       <div
//                         className="flex rounded  hover:ring-1   w-full"
//                       >
//                         <input
//                           type="text"
//                           name="name"
//                           id="name"
//                           required
//                           autoComplete="off"
//                           value={User.name}
//                           onChange={handleInput}
//                           className="black flex-1 border-0 
//                       py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6 "
//                         />
                        
//                       </div>
//                     </div>

//                     {/* for email */}
//                     <div className="space-y-2">
//                       <label htmlFor="companyname">email</label>
//                       <br />
//                       <div className="flex rounded  hover:ring-1   w-full">
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Ex: XYZCompany@gmail.com"
//                         id="email"
//                         required
//                         autoComplete="off"
//                         value={User.email}
//                         onChange={handleInput}
//                         className="black flex-1 border-0 
//                       py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6 "
//                       />
//                       <MdEmail className="absolute mt-2.5 ml-2 text-gray-400 "/>
//                       </div>
//                     </div>

                    
//                     {/* for password */}
//                     <div className="space-y-2">
//                       <label htmlFor="companyname">password</label>
//                       <br />
//                       <div className="flex rounded  hover:ring-1   w-full">
//                       <input
//                         type={visible? "text": "password"}
//                         name="password"
//                         placeholder="password"
//                         id="password"
//                         required
//                         autoComplete="off"
//                         value={User.password}
//                         onChange={handleInput}
//                         className="black flex-1 border-0 
//                       py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6 "
//                       />
//                       <RiLockPasswordFill className="absolute mt-2.5 ml-2 text-gray-400 "/>
//                       <div className=" mt-2.5 ml-2 text-gray-600 " onClick={()=>{setvisible(!visible)}}>
//                           {visible? <FaEye />:<FaEyeSlash />}
//                       </div>
//                       </div>
//                     </div>
//                   </div>
//                   <br />
//                   <div className="text-center">
//                    <button
//                       type="submit"
//                       className="btn btn-submit m-auto bg-blue-800  py-2 mt-5 font-bold w-full rounded-md text-white"
//                     >
//                       NEXT
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//   )
// }

// export default HirerRegister
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useAuth } from "../store/Auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { FaEye ,FaEyeSlash } from "react-icons/fa";
import { BASE_URL } from '../store/Helper';


const HirerRegister = () => {
  const [User, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [visible, setvisible] = useState(false)

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...User,
      [name]: value,
    });
  };

  // for navigator
const navigate= useNavigate();
  // for call the Auth.jsx using useContext
  const {storeTokenInLs}=useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(User);

    try {
      const registerURL = `${BASE_URL}/api/auth/register`;
      const response = await fetch(registerURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(User),
      });
      const res_data= await response.json();
        console.log("response data",res_data);
       
      if(response.ok){
          //store in local storage
          // localStorage.setItem("token",res_data.token)
          toast.success("Registration successfully")
          storeTokenInLs(res_data.token);
          navigate("/hirerdetails")

      }else{
        toast.error(res_data.extraDetails? res_data.extraDetails: res_data.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-slate-100 h-screen mt-10">
        <main>
          <div className="section-registration ">
            <div className="container grid grid-two-cols ">
              {/* for image part */}
              <div className="registration-image">
                <img src="" alt="" />
              </div>

              {/* for registration form */}
              <div className="registration-form  bg-slate-200 mt-20   md:w-[30vw]  m-auto rounded-2xl shadow-2xl">
                <h1 className="main-heading text-center text-3xl font-bold text-blue-600  pt-10 pb-5">
                  Registration form
                </h1>
                <br />

                <form
                  action=""
                  onSubmit={handleSubmit}
                  className=" px-10 pb-10 "
                >
                  <div className="space-y-5 ">
                    {/* for username */}
                    <div className="space-y-2 ">
                      <label htmlFor="username" className="">
                       Company Name
                      </label>
                      <br />
                      <div
                        className="flex rounded  hover:ring-1   w-full"
                      >
                        <input
                          type="text"
                          name="username"
                          placeholder="XYZ"
                          id="username"
                          required
                          autoComplete="off"
                          value={User.username}
                          onChange={handleInput}
                          className="black flex-1 border-0 
                      py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6 "
                        />
                        <FaUser className="absolute mt-2.5 ml-2 text-gray-400 " />
                      </div>
                    </div>

                    {/* for email */}
                    <div className="space-y-2">
                      <label htmlFor="username">email</label>
                      <br />
                      <div className="flex rounded  hover:ring-1   w-full">
                      <input
                        type="email"
                        name="email"
                        placeholder="Ex: XYZCOMPANY@gmail.com"
                        id="email"
                        required
                        autoComplete="off"
                        value={User.email}
                        onChange={handleInput}
                        className="black flex-1 border-0 
                      py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6 "
                      />
                      <MdEmail className="absolute mt-2.5 ml-2 text-gray-400 "/>
                      </div>
                    </div>

                    {/* for phone number */}
                    <div className="space-y-2">
                      <label htmlFor="username">phone</label>
                      <br />
                      <div className="flex rounded  hover:ring-1   w-full">
                      <input
                        type="number"
                        name="phone"
                        placeholder="phone"
                        id="phone"
                        required
                        autoComplete="off"
                        value={User.phone}
                        onChange={handleInput}
                        className="black flex-1 border-0 
                      py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6 "
                      />
                      <FaPhoneAlt className="absolute mt-2.5 ml-2 text-gray-400 "/>
                      </div>
                    </div>

                    {/* for password */}
                    <div className="space-y-2">
                      <label htmlFor="username">password</label>
                      <br />
                      <div className="flex rounded  hover:ring-1   w-full">
                      <input
                        type={visible? "text": "password"}
                        name="password"
                        placeholder="password"
                        id="password"
                        required
                        autoComplete="off"
                        value={User.password}
                        onChange={handleInput}
                        className="black flex-1 border-0 
                      py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6 "
                      />
                      <RiLockPasswordFill className="absolute mt-2.5 ml-2 text-gray-400 "/>
                      <div className=" mt-2.5 ml-2 text-gray-600 " onClick={()=>{setvisible(!visible)}}>
                          {visible? <FaEye />:<FaEyeSlash />}
                      </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-submit m-auto bg-blue-800  py-2 mt-5 font-bold w-full rounded-md text-white"
                    >
                      Register now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
  )
}

export default HirerRegister
