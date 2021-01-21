import React from 'react'
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

export const SidebarItems=[
{
title:'Dashboard',
path:'/dashboard',
icon:<MdIcons.MdDashboard />,
cName:'nav-text'
},
{
    title:'Transactions',
    path:'/userTransac',
    icon:<BsIcons.BsPersonLinesFill/>,
    cName:'nav-text'
 },
]