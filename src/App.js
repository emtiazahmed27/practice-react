
// Understanding use effect

// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [resourceType, setResourceType] = useState('posts');
//   const [item, setItem] = useState([]);

//   console.log("render");

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//         .then(response => response.json())
//         .then(data => setItem(data))
//   },[resourceType])
  

//   return (
//     <div className="App">
//       <button onClick={()=>setResourceType("posts")}>Posts</button>
//       <button onClick={()=>setResourceType("users")}>Users</button>
//       <button onClick={()=>setResourceType("comments")}>Comments</button>
//       <h1>{resourceType}</h1>
//       {
//         item.map( item =>{
//           return <pre>{JSON.stringify(item)}</pre>
//         })
//       }
//     </div>
//   );
// }

// export default App;

// Understanding use effect


//props, dividing components

// import React, { useState } from 'react';
// import MyButton from "./button";

// function App() {
//   const [click, setClick]= useState(0);

//   const clickHandler= () =>{
//     setClick(click + 1);
//   }

//   return (
//     <div className="App">
//       <h2>passing props & deviding in to components </h2>
//       <MyButton props={click} onClick={clickHandler}/>
//       <MyButton props={click} onClick={clickHandler}/>
//     </div>
//   )
// }

// export default App


import React from 'react'

function App() {
  return (
    <div className='App'>
      <h1>hello</h1>
    </div>
  )
}

export default App
