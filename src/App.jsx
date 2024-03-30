// import React, { useEffect, useState } from 'react';

// function NameForm() {
//   const [firstName, setFirstName] = useState('');
//   // const [lastName, setLastName] = useState('');
//   const [namesList, setNamesList] = useState([]);
//   const [error, setError] = useState('');

//   // useEffect(()=>{
//   //   const timerId=setTimeout(()=>{
      
//   //     if (namesList.includes(`${firstName.trim()}` )) {
//   //       setError('Name already exists in the list.');
//   //       return;
//   //     }
        
    
//   //   },1000)

//   //   return ()=>{
//   //     clearTimeout(timerId)
//   //   }
//   // },[firstName])
  
//   const handleChange=(e)=>{
//     setFirstName(e.target.value)
    

//   }


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!firstName) {
//       setError('Please enter both first name and last name.');
//       return;
//     }
//     if (namesList.includes(`${firstName.trim()}`)) {
//       setError('Name already exists in the list.');
//       return;
//     }
//     setNamesList([...namesList, `${firstName} `]);
//     setFirstName('');
//     // setLastName('');
//     setError('');
//   };

//   return (
//     <div>
//       <h1>Names List</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name:</label>
//           <input
//             type="text"
//             value={firstName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           {/* <label>Last Name:</label>
//           <input
//             type="text"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           /> */}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       <h2>Names:</h2>
//       <ul>
//         {namesList.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default NameForm;

import React, { useEffect, useState } from 'react';

function NameForm() {
  const [firstName, setFirstName] = useState('');
  const [namesList, setNamesList] = useState([]);
  const [error, setError] = useState('');

  useEffect(()=>{
    const timerId=setTimeout(()=>{
      const trimmedFirst = firstName.trim().toUpperCase();
    
    if (namesList.find(firstName => firstName.trim().toUpperCase() === trimmedFirst)) {
      setError('Name already exists in the list.');
      return
    }
      else
      {
        setError("")
      }
      
    
      console.log(firstName)
    },1000)
    return()=>{
      clearTimeout(timerId)
    }
  },[firstName])

  const handleChange = (e) => {
    setFirstName(e.target.value);
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName) {
      setError('Please enter a first name.');
      return;
    }
    
    const trimmedFirstName = firstName.trim();
    
    if (namesList.find(firstName => firstName.trim().toUpperCase() === trimmedFirstName.toUpperCase())) {
      setError('Name already exists in the list.');
      return;
    }
    
    setNamesList([...namesList, trimmedFirstName]);
    setFirstName('');
    setError('');
  };

  return (
    <div>
      <h1>RealTime Username Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <h2>List of userNames:</h2>
      <ul>
        {namesList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameForm;
