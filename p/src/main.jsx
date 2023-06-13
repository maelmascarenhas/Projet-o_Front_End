import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//configuranto router

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Telainicial from './pages/Telainicial.js';
import Carro1detalhe from './pages/Carro1detalhe.js';
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Telainicial/>,

        },
        {
            path: "Detalhes",
            element: <Carro1detalhe/>,


        }




    ])

    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    );