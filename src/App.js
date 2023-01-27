// import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {useRoutes} from "react-router-dom";
import NavBar from "./NavBar";
function App() {
  const routes=useRoutes([
    {
      path:"/d",
      element:<NavBar/>,
      children:[
        {element:<Home/>, index:true},
        {path:"a/about",element:<About/>},
        {path:"a/contact",element:<Contact/>}
      ]
    }
  ])
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<NavBar/>}>
    //     <Route index element={ <Home/> } />
    //     <Route path="about" element={ <About/> } />
    //     <Route path="contact" element={ <Contact/> } />
    //   </Route>
    // </Routes>
    // </BrowserRouter>
    routes
    );
}

export default App;
