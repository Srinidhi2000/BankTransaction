import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarItems=[
{
title:'Dashboard',
path:'/dashboard',
icon:<AiIcons.AiFillHome/>,
cName:'nav-text'
},
{
    title:'Transactions',
    path:'/userTransac',
    icon:<AiIcons.AiFillHome/>,
    cName:'nav-text'
 },
 {
        title:'Payment Requests',
        path:'/payRequest',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
},
{
    title:'Update User',
    path:'/userUpdate',
    icon:<IoIcons.IoMdPeople/>,
    cName:'nav-text'
},
]