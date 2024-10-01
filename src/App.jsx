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

import ChildComp1, { ChildComp1Inner } from "./components/ChildComp1";
import ChildComp2 from "./components/ChildComp2";
import React, { useEffect, useRef, useState } from "react";

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

function App() {

  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  console.log("App is started...");

  useEffect(() => {
    console.log("useEffect count is called...");
    setCount(count+1);
  }, [timer]);

  useEffect(() => {
    console.log("useEffect timer is called...");
    setTimer(timer+1);
  }, []);

  // setCount(count+1);

  return (
    <>
      <h1>useEffect and APIs</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}>Counter</button>
      <p>Timer: {timer}</p>
      <button onClick={() => setTimer(timer+1)}>Timer</button>
    </>
  )
}

export default App;