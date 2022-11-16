function Profile({ username, email }) {
  return ( 
      <div>
          <h1>User details</h1>
          <p>username: {username}</p>
          <p>email: {email}</p>
      </div>
      
   );
}

export default Profile;


























// import axios from "axios";
// import React, { useEffect, useState } from "react";
// // axios.defaults.withCredentials = true;
// // let firstRender = true;

// function Welcome({user:userinfo}) {
//   const [user, setUser] = useState();
//   // const refreshToken = async () => {
//   //   const res = await axios
//   //     .get("http://localhost:8080/api/refresh", {
//   //       withCredentials: true,
//   //     })
//   //     .catch((err) => console.log(err));
//   //   const data = await res.data;
//   //   return data;
//   // };

//   const sendRequest = async () => {
//     const res = await axios
//       .get("http://localhost:8080/api/user", {
//         // withCredentials: true,
//       })
//       .catch((err) => console.log(err));
//     const data = await res.data;
//     return data;
//   };
//   useEffect(() => {

//     sendRequest().then((data) => setUser(data.user));
//   }, []);

//   return (
// <div>
//   hello {userinfo.name}
//   {console.log(userinfo)}
// </div>
//   )
// }

// export default Welcome;
