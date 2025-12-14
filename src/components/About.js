import React from "react";
import User from "./User";
import UserClass from "./UserClass";
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is namaste react web series</h2>
//       {/* <User name={"Swapnil"} /> */}
//       <div style={{ marginTop: 14 }}>
//         <UserClass
//           name={"Swapnil"}
//           location={"Bengaluru"}
//           contact={"@swapnilbhojwani__"}
//         />
//       </div>
//     </div>
//   );
// };

class About extends React.Component{
  constructor(props){
    // console.log("About constructor called")
    super(props);
  }
  componentDidMount(){
    // console.log("About class componentDidMount")
  }
  render(){
    // console.log("About render called")
    return(
      <div>
      <h1>About</h1>
      <h2>This is namaste react web series</h2>
      {/* <User name={"Swapnil"} /> */}
      <div style={{ marginTop: 14 }}>
        <UserClass
          name={"First"}
          location={"Bengaluru"}
          contact={"@swapnilbhojwani__"}
        />
         <UserClass
          name={"Second"}
          location={"US"}
          contact={"@swapnilbhojwani__"}
        />
      </div>
    </div>
    )
  }
}

export default About;
