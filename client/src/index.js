import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import Edit from "./views/Edit/Edit.js"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router =createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:"/edit",
        element:<Edit/>
    },
    
])
root.render(<RouterProvider router={router}/>

    
 
);

 
