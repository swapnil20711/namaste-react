import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    // console.log("UserClass contructor called for "+props.name)
    super(props);
    this.state = {
      count : 0,
    }
  }
  componentDidMount(){
    // console.log("User class componentDidMount for "+this.props.name)
    // call api here
  }
  render() {
    const {name,location,contact} = this.props;
    console.log("UserClass render called for "+name)
    return (
      <div className="user-card">
        {/* <h1>Count: {this.state.count}</h1>
        <button onClick={()=>{
          this.setState(prevState=>({
            count:prevState.count+1
          }))
        }}>Count Increase</button> */}
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : {contact}</h4>
      </div>
    );
  }
}

export default UserClass
