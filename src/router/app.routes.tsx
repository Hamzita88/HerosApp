import { createBrowserRouter } from "react-router";
import  HomePage  from "@/heroes/pages/home/HomePage"
import HeroPage from "@/heroes/pages/hero/HeroPage";
import HerosLayouts from "@/heroes/layouts/HerosLayouts";
import AdminLayouts from "@/admin/layouts/AdminLayouts";
import { lazy } from "react";

const SearchPage = lazy(()=> import('@/heroes/pages/search/SearchPage'));
const AdminPage = lazy(()=> import ('@/admin/pages/AdminPage'))

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <HerosLayouts/>,
        children: [
            {
                index: true,
                element: <HomePage />,  
            },
            {
                path: 'heros/1',
                element: <HeroPage />,  
            },
            {
                 path: 'search',
                    element: <SearchPage />,   
            },

        ]
    },

    {
        path: '/admin',
        element: <AdminLayouts />, 
        children: [
            {
                index: true,
                element: <AdminPage/>
            }
        ]  
    }
])