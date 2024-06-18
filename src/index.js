import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store/store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './page/Home'
import Login from './components/Login'
import Signup from './page/Signup'
import AddPost from './page/AddPost'
import AllPosts from './page/AllPosts'
import Post from './page/Post'
import EditPost from './page/EditPost'
import AuthLayout from './components/AuthLayout' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// import { Provider } from 'react-redux'
// import store from './store/store.js'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './page/Home.js'
// import AuthLayout from './components/AuthLayout' 

// import Log from './page/Login.js'

// import AddPost from "./page/AddPost.js";
// import Signup from './page/Signup.js'
// import EditPost from "./page/EditPost.js";

// import Post from "./page/Post.js";

// import AllPosts from "./page/AllPosts.js";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//         {
//             path: "/",
//             element: <Home />,
//         },
//         {
//             path: "/login",
//             element: (
//                 <AuthLayout authentication={false}>
//                     <Log />
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/signup",
//             element: (
//                 <AuthLayout authentication={false}>
//                     <Signup />
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/all-posts",
//             element: (
//                 <AuthLayout authentication>
//                     {" "}
//                     <AllPosts />
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/add-post",
//             element: (
//                 <AuthLayout authentication>
//                     {" "}
//                     <AddPost />
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/edit-post/:slug",
//             element: (
//                 <AuthLayout authentication>
//                     {" "}
//                     <EditPost />
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/post/:slug",
//             element: <Post />,
//         },
//     ],
// },
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <RouterProvider router={router}/>
//     </Provider>
//   </React.StrictMode>,
// )


