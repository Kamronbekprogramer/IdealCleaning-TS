import React from 'react';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import GroupsIcon from '@mui/icons-material/Groups';

interface Route {
    path: string;
    content: string;
    icon: React.ReactElement;
}

const routes: Route[] = [
    {
        path: "/main",
        content: "Asosiy",
        icon: <DashboardCustomizeRoundedIcon />
    },
  
    {
        path: "/main/Services",
        content: "Xizmatlar",
        icon: <DryCleaningIcon />
    },
    {
        path: "/orders",
        content: "Order",
        icon: <MiscellaneousServicesIcon/>
    },
    {
        path: "/clients",
        content: "Clients",
        icon: <GroupsIcon/>
    }
];

export default routes;
