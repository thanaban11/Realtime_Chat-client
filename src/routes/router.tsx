import {
  createBrowserRouter,
} from "react-router-dom";
import RegisterUserPage from "../pages/register/user";
import MainLayout from "../pages/layouts/mainLayout";
import HomePage from "../pages/home";
import ChatRoomPage from "../pages/chat-room/chatRoom";
import SigninPage from "../pages/signin";

const router = createBrowserRouter(
    [
  {
    path: "/",
    element: <MainLayout />,
    children:[{
        path:"home",
        element:<HomePage />,
    },
    {
        path:"chat-room",
        element:<ChatRoomPage />
    }
    ]
  },
  {
    path: "/register-user",
    element: <RegisterUserPage />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  }
]);

export default router