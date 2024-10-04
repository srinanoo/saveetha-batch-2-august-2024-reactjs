// function App() {
//   let num = 10;
//   let str = "Dinesh";
//   let bool = false;
//   let arr = [1, 2, 3, 4, 5];
//   let obj = {
//     "id": 1,
//     "name": "Dinesh"
//   };
//   let menus = ["Home", "About", "Contact", "Blog"];

import axios from "axios";
import ChildComp1, { ChildComp1Inner } from "./components/ChildComp1";
import ChildComp2 from "./components/ChildComp2";
import React, { useEffect, useRef, useState } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuComp from "./components/MenuComp";
import './App.css'

//   let output = [];
//   for(let i = 0; i < menus.length; i++) {
//     output.push(<li key={i}>{menus[i]}</li>);
//   }
//   console.log(output);

//   return (
//     <div>
//       <h1>Vite Project</h1>

//       {/* <p>Number: {num}</p>
//       <p>String: {str}</p>
//       <p>Boolean: {bool.toString()}</p>
//       <p>Array: {arr}</p>
//       <p>Object: {obj.id}, {obj.name}</p> */}

//       {/* <ul>
//       {
//         menus.map((v, i) => {
//           return (
//             <li key={i}>
//               {v}
//               <div>Something...</div>
//               <p>something...</p>
//             </li>
//           )
//         })
//       }
//       </ul>

//       <ul>
//       {
//         menus.map((v, i) => <li key={i}>{v}</li>)
//       }
//       </ul>

//       <ul>
//         {output}
//       </ul> */}

//       {
//         (bool)
//           ?
//             <>
//               <p>satisfied</p>
//               <p>satisfied</p>
//             </>
//           :
//             <p>not satisfied</p>
//       }

//       {
//         bool && <p>logically satisfied</p>
//       }
//     </div>
//   )
// }

// function App() {

//   let num = 10;
//   let str = "Dinesh";
//   let bool = false;
//   let arr = [1, 2, 3, 4, 5];
//   let obj = {
//     "id": 1,
//     "name": "Dinesh"
//   };

//   return (
//     <>
//       <h1>Main Component</h1>

//       <ChildComp1 num={num} str={str} bool={bool} arr={arr} obj={obj} />

//       <ChildComp1Inner num={num} str={str} bool={bool} arr={arr} obj={obj} />

//       <ChildComp2 />

//     </>
//   )
// }

// class AppClass extends React.Component {
//   constructor() {
//     this.state = {
//       "num": 0,
//       "login": false,
//     };
//   }
//   render() {
//     return (
//       <>
//         This is the class component...
//       </>
//     )
//   }
// }

// function App() {

//   let num = 10;

//   const [count, setCount] = useState(0);
//   const [login, setLogin] = useState(false);
//   const [obj, setObj] = useState({
//     "id": 1,
//     "name": "Dinesh"
//   });

//   const handleClick = () => {
//     // console.log('Button is clicked');
//     // console.log(num);
//     // num++;
//     // console.log(num);
//     // setCount(count+1);

//     setObj({
//       ...obj,
//       "name": "New Name"
//     })
//   }

//   const handleLogin = () => {
//     setLogin(true);
//   }

//   const handleLogout = () => {
//     setLogin(false);
//   }

//   const handleState = (e) => {
//     setObj({
//       ...obj,
//       "name": e.target.id
//     })
//   }

//   console.log('render...');
//   return (
//     <>
//       <h1>State Management</h1>

//       {/* <AppClass /> */}

//       <p>Number : {num}</p>
//       <p>State: {count}</p>

//       <p>Obj: {obj.id}, {obj.name}</p>

//       <button onClick={handleClick}>Click</button>

//       <ChildComp1 click={handleState} />
//       {
//         login
//           ?
//             <>
//               <button onClick={() => setLogin(false)}>Logout</button>
//             </>
//           :
//             <button onClick={handleLogin}>Login</button>
//       }
//     </>
//   )
// }

// function App() {

//   let userNameRef = useRef("");
//   let [userNameState, setUserNameState] = useState("");
//   let [usernameErr, setUsernameErr] = useState("");

//   const handleClick = (e) => {
//     e.preventDefault();
//     console.log("handleClick is clicked");
//     let username = document.getElementById("txtUsername").value;
//     console.log(username);
//     e.submit();
//   }

//   const handleClickImpure = () => {
//     console.log("handleClickImpure is called");
//     let username1 = userNameRef.current.value;
//     console.log(username1);
//   }

//   const handleClickPure = () => {
//     console.log("handleClickPure is called");
//     console.log(userNameState);
//     (userNameState === "")
//       ?
//         setUsernameErr("Please enter a username")
//       : 
//         setUsernameErr("");
//   }

//   // console.log(userNameState);
  
//   const handleAnchor = (e) => {
//     e.preventDefault();

//     console.log("handleAnchor is called");
//   }

//   return (
//     <>
//       <h1>Form Handling</h1>

//       <a href="https://google.com" onClick={handleAnchor}>Click</a>

//       {/* <h2>Impure Component Way</h2>
//       <form onSubmit={handleClick}>
//         <input type="text" name="username" id="txtUsername" />
//         <button onClick={}>Click</button>
//       </form> */}

//       {/* <h2>Half Impure Component Way</h2>
//       <form>
//         <input type="text" ref={userNameRef} />
//         <button type="button" onClick={handleClickImpure}>Click</button>
//       </form> */}

//       <h2>Pure Component Way</h2>
//       {/* <form> */}
//         <input type="text" onChange={(e) => setUserNameState(e.target.value)} />
//         <span>{usernameErr}</span>
//         <button type="button" onClick={handleClickPure}>Click</button>
//       {/* </form> */}
//     </>
//   )
// }

// function App() {

//   // const [count, setCount] = useState(0);
//   // const [timer, setTimer] = useState(0);

//   console.log("App is started...");

//   // useEffect(() => {
//   //   console.log("useEffect count is called...");
//   //   setCount(count+1);
//   // }, [timer]);

//   // useEffect(() => {
//   //   console.log("useEffect timer is called...");
//   //   setTimer(timer+1);
//   // }, []);

//   // setCount(count+1);

//   const [fact, setFact] = useState("");
//   const fetchData = () => {
//     fetch("https://catfact.ninja/fact")
//       .then(res => res.json())
//       .then(data => {
//         // console.log(data.fact);
//         // if(data && data.fact)
//         //   console.log(data.fact);

//         // console.log(data?.fact);
//         setFact(data?.fact);
//       })
//   }

//   useEffect(() => {
//     fetchData();
//   },[])

//   return (
//     <>
//       <h1>useEffect and APIs</h1>
//       {/* <p>Count: {count}</p>
//       <button onClick={() => setCount(count+1)}>Counter</button>
//       <p>Timer: {timer}</p>
//       <button onClick={() => setTimer(timer+1)}>Timer</button> */}
//       <p>Fact: {fact}</p>
//     </>
//   )
// }

// function App() {

//   let password = useRef("");

//   const [country, setCountry] = useState("");
//   const [universitiesList, setUniversitiesList] = useState([]);
//   const handleSearch = () => {
//     // fetch(`http://universities.hipolabs.com/search?country=${country}`)
//     //   .then(res => res.json())
//     //   .then(finalData => {
//     //     console.log(finalData);
//     //     setUniversitiesList(finalData);
//     //   })

//     // axios.get(`http://universities.hipolabs.com/search?country=${country}`)
//     //   .then(res => {
//     //     // console.log(res.data)
//     //     (universitiesList.toString() !== res.data.toString()) &&setUniversitiesList(res?.data);
//     //   });

//     // let data = {
//     //   "id": 1,
//     //   "name": "Dinesh"
//     // }
//     // // fetch('https://domain.com/posts', {
//     // //   method: 'POST',
//     // //   body: JSON.stringify(data),
//     // // }).then(res => console.log(res));
//     // axios.post('https://domain.com/posts', data);

//     console.log(password.current.value);
//   }

//   console.log("App is called...");
//   return (
//     <>
//       <h1>Universities List</h1>

//       <input type="text" ref={password} />
//       <input type="text" onChange={(e) => setCountry(e.target.value)} /><br />
//       <button onClick={handleSearch}>Search Universities</button>

//       {
//         universitiesList.length > 0
//           ?
//             universitiesList.map((univ, i) => {
//               return (
//                 <div key={i}>
//                   <p>Name: {univ.name}</p>
//                   <p>Website: {univ.web_pages[0]}</p>
//                 </div>
//               )
//             })
//           :
//             <p>No Universities found for Country: {country}</p>
//       }

//       {/* <ClsComponent /> */}
//     </>
//   )
// }

// class ClsComponent extends React.Component {
//   constructor() {

//   }
//   render() {
//     return (
//       <>
//       </>
//     )
//   }
// }

function App() {
  return (
    <>
      {/* {
        location.pathname === "/"
        &&
        <HomePage />
      }
      {
        location.pathname === "/about"
        &&
        <AboutPage />
      }
      {
        location.pathname === "/contact"
        &&
        <ContactPage />
      }
      {
        location.pathname === "/blog"
        &&
        <BlogPage />
      } */}

      <BrowserRouter basename="/saveetha-batch-2-august-2024-reactjs">
        <MenuComp />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;