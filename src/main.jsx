import React from 'react'
import ReactDOM from 'react-dom/client'
import HomeContainer from './features/Home/HomeContainer.jsx';
import GalleryContainer from './features/Gallery/GalleryContainer.jsx';

import '@mantine/core/styles.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

const router = createBrowserRouter([{
    path: '/',
    element: <HomeContainer mainColor={'red'} />
}, {
    path: '/gallery',
    element: <GalleryContainer />
}])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MantineProvider>
            <RouterProvider router={router} />
        </MantineProvider>
    </React.StrictMode>
)
