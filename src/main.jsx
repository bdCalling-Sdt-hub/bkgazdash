
import ReactDOM from 'react-dom/client'
import './index.css'

import {
 RouterProvider,
} from "react-router-dom";
// import { Provider } from 'react-redux';
// import { Store } from './store.jsx';
import router from './routes/Index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
//  <Provider store={Store}>
 <RouterProvider router={router} />
 
//  </Provider>  
)
