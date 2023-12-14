import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import UserInfo from './components/UserInfo';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data.data);
    };

    fetchUsers();
  }, []);

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const usersInRows = chunkArray(users, 3); // Adjust the chunkSize based on the number of cards you want in each row

  return (
    <Router>
      <Routes>
        <Route path="/users/:id" element={<UserInfo />} />
        <Route
          path="/"
          element={
            <div className="App">
              <div style={{ backgroundColor: '#0e7dff', padding: '10px', height: '10px', width: '1375px',textAlign: 'center', borderRadius: '0px',color: 'white',}}>Title</div> 
              Users
              {usersInRows.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex', marginBottom: '10px' }}>
                  {row.map((user, userIndex) => (
                    <div key={userIndex} style={{ marginRight: '40px' ,
                    top: '10%',  
                    left: '0%',  
                    transform: 'translate(120%, 10%)', border: '1px solid #000000', padding: '10px',borderRadius: '10px'}}>
                      <Card user={user} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


/* */










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Card from './components/Card';
// import UserInfo from './components/UserInfo';

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const response = await axios.get('http://localhost:5000/users');
//       setUsers(response.data.data);
//     };

//     fetchUsers();
//   }, []);

//   const chunkArray = (array, chunkSize) => {
//     const result = [];
//     for (let i = 0; i < array.length; i += chunkSize) {
//       result.push(array.slice(i, i + chunkSize));
//     }
//     return result;
//   };

//   const usersInRows = chunkArray(users, 3);  // Adjust the chunkSize based on the number of cards you want in each row

//   return (<div>
    
//     <Router>
//       <Routes>
//         <Route path="/users/:id" element={<UserInfo />} />
//         <Route
//           path="/"
//           element={
//             <div className="App" style={{ display: 'flex', flexWrap: 'wrap' }}>
//               {usersInRows.map((row, rowIndex) => (
//                 <div key={rowIndex} style={{ display: 'flex', marginBottom: '10px' }}>
//                   {row.map((user, userIndex) => (
//                     <Card key={userIndex} user={user} style={{ marginRight: '10px' }} />
//                   ))}
//                 </div>
//               ))}
//             </div>
//           }
//         />
//       </Routes>
//     </Router>
//     </div>
//   );
// }

// export default App;















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Card from './components/Card';
// import UserInfo from './components/UserInfo';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const response = await axios.get('http://localhost:5000/users');
//       setUsers(response.data.data);
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/users/:id" element={<UserInfo />} />
//         <Route path="/" element={
//           <div className="App">
//             {users.map(user => (
//               <Card key={user.id} user={user} />
//             ))}
//           </div>
//         } />
//       </Routes>
//     </Router>
//   );
//  }
 
//  export default App;