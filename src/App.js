import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

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
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {path:"/",element:<Body/>},
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
