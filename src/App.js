import './App.css';
import { Home } from './Components/Home/Home.jsx';
import { Register } from './Components/Loggin/Register';
import { SignIn } from './Components/Loggin/SignIn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Components/main/Layout.js';
import { SearchResult } from './Components/Search/SearchResult.js';
import { PageNotFound } from './Components/main/PageNotFound.js';
import { ProductDetail } from './Components/Search/ProductDetail.js';
import { Checkout } from './Components/Search/Checkout';
import { WayRouter } from './Components/main/WayRouter.js';
import {MyTrips} from './Components/Home/Trips/MyTrips.js'


let router = createBrowserRouter([
  {path : '', element :<Layout/>,children :[
    {index : '0' , element :<WayRouter><Home/></WayRouter>  },  
    {path : 'search', element :<WayRouter><SearchResult/></WayRouter> },
    {path:'product',element:<WayRouter><ProductDetail/></WayRouter>},
    {path:'checkout',element:<WayRouter><Checkout/></WayRouter>},
    {path: 'mytrips',element:<MyTrips/>}
  ]},
    { path:'signin' ,element :<SignIn/>},
    {path : 'register',element: <Register/>},
  
  
  
  
  




{path : '*' , element :<PageNotFound/>}])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
