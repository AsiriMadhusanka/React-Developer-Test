


// import React from 'react';
// import { Link } from 'react-router-dom';
// import avatar from '../image/avatar.jpg';

// const Card = ({ user }) => {
//   return (
//     <Link to={`/users/${user.id}`} className="card">
//       <img src={avatar} alt={user.name} style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '10px',border: '1px solid #000000', padding: '10px',borderRadius: '10px' }}/>
//       <h2>{user.name}</h2>
//       <p>{user.email}</p>
//     </Link>
//   );
// };

// export default Card;

import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../image/avatar.jpg';

const Card = ({ user }) => {
  return (
    <Link to={`/users/${user.id}`} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
      <img src={avatar} alt={user.name} style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '10px', border: '1px solid #000000', padding: '10px', borderRadius: '10px' }} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </Link>
  );
};

export default Card;



