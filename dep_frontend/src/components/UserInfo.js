// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import BackButton from './BackButton';
// import { useParams } from 'react-router-dom';
// import avatar from '../image/avatar.jpg';

// function UserInfo() {
//  const { id } = useParams();
//  const [user, setUser] = useState(null);

//  useEffect(() => {
//  const fetchUser = async () => {
//    const response = await axios.get(`http://localhost:5000/users/${id}`);
//    setUser(response.data);
//  };

//  fetchUser();
//  }, [id]);

//  if (!user) {
//  return <div>Loading...</div>;
//  }
//  const nameText = 'First Name\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';
//  const mailText = 'Email\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';

//  return (
//  <div>
//    <BackButton style={{ backgroundImage: `url(${avatar})`, color: 'white' }} />
//    <div style={{ backgroundColor: '#f4f4f4', padding: '10px', height: '110px', width: '300px', borderRadius: '10px',position: 'absolute',
//         top: '50%',  
//         left: '70%',  
//         transform: 'translate(-50%, -50%)', }}>
//    <h3>{nameText + user.name}</h3>
//    <h3>{mailText+user.email}</h3>
//    </div>
//    <div>
//    <img src={avatar} alt={user.name} style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '10px',position: 'absolute',top: '50%',  left: '40%', transform: 'translate(-50%, -50%)', border: '1px solid #000000', padding: '10px',borderRadius: '10px'}}/>
//    </div>
   
//  </div>
//  );
// }

// export default UserInfo;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import BackButton from './BackButton';
// import { useParams } from 'react-router-dom';

// // import avatar from './avatar.jpg';

// // Import statements remain the same

// function UserInfo() {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(`https://react-developer-test.onrender.com/users/${id}`);
//         setUser(response.data.data);
//       } catch (error) {
//         console.error('Error fetching user:', error);
//       }
//     };

//     fetchUser();
//   }, [id]);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   const nameText = 'First Name\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';
//   const mailText = 'Email\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';

//   return (
//     <div>
//       <BackButton />
//       <div style={{ backgroundColor: '#f4f4f4', padding: '10px', height: '110px', width: '300px', borderRadius: '10px', position: 'absolute', top: '50%', left: '70%', transform: 'translate(-50%, -50%)' }}>
//         <h3>{nameText + user.name}</h3>
//         <h3>{mailText + user.email}</h3>
//       </div>
//       <div>
//         <img src={user.avatar} alt={user.name} style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '10px', position: 'absolute', top: '50%', left: '40%', transform: 'translate(-50%, -50%)', border: '1px solid #000000', padding: '10px', borderRadius: '10px' }} />
//       </div>
//     </div>
//   );
// }

// export default UserInfo;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from './BackButton';
import { useParams } from 'react-router-dom';
import avatar from '../image/avatar.jpg';

function UserInfo() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://react-developer-test.onrender.com/users/${id}`);
        setUser(response.data); // Assuming the API returns the user directly, not nested under a 'data' property
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  const nameText = 'First Name\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';
  const mailText = 'Email\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';

  return (
    <div>
      <BackButton />
      <div style={{ backgroundColor: '#f4f4f4', padding: '10px', height: '110px', width: '300px', borderRadius: '10px', position: 'absolute', top: '50%', left: '70%', transform: 'translate(-50%, -50%)' }}>
        <h3>{nameText + user.name}</h3>
        <h3>{mailText + user.email}</h3>
      </div>
      <div>
        {/* Your avatar code remains the same */}
        <img src={avatar} alt={user.name} style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '10px', position: 'absolute', top: '50%', left: '40%', transform: 'translate(-50%, -50%)', border: '1px solid #000000', padding: '10px', borderRadius: '10px' }} />
      </div>
    </div>
  );
}

export default UserInfo;
