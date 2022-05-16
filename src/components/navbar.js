import React, { useState, useEffect } from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <a href="javascript:void()" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="javascript:void()">About Us</a>
          </li>
          <li>
            <a href="javascript:void()">Teams</a>
          </li>
          <li>
            <a href="javascript:void()">Contact Us</a>
          </li>
          <li>
            <a href="javascript:void()" className="donate">
              Donate
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
// const Navbar = () => {
//     return (
//       <div className="navbar">
//         <nav>
//           <ul>
//             <li>
//               <a href="javascript:void()">Home</a>
//             </li>
//             <li>
//               <a href="javascript:void()">Services</a>
//             </li>
//             <li>
//               <a href="javascript:void()">About Us</a>
//             </li>
//             <li>
//               <a href="javascript:void()">Teams</a>
//             </li>
//             <li>
//               <a href="javascript:void()">Contact Us</a>
//             </li>
//             <li>
//               <a href="javascript:void()">Donate</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     );
//   };

//   export default Navbar;
