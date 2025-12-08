import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is namaste react web series</h2>
      <User name={"Swapnil"} />
      <div style={{ marginTop: 14 }}>
        <UserClass
          name={"Swapnil"}
          location={"Bengaluru"}
          contact={"@swapnilbhojwani__"}
        />
      </div>
    </div>
  );
};

export default About;
