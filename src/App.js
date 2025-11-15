import  { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from './components/About';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";

// // React.createElement => Object => HTML element(render)

const root = createRoot(document.getElementById("root"));

// // JSX is not html in JS -> Javascript XML
// // JS code is transpiled before it reaches the engine - PARCEL - BABEL
// const TitleComponent = () => <h1 id="heading">Namaste using JSX</h1>;

// const title = (
//   <h1>this is a title</h1>
// )

// const number = 1000;

// // Component Composition
// const HeadingComponent = () => (
//   <div>
//     {title}
//     <TitleComponent />
//     <h1>Heading React Functional Component</h1>
//   </div>
// );

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {path:"/",element:<AppLayout/>},
  {path:"/about",element:<About/>},
  {path:"/contact",element:<Contact/>},
])

root.render(<RouterProvider router={appRouter}/>);
