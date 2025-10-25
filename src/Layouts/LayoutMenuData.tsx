import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
      
    }, [
        history,
    ]);

    const menuItems: any = [
        {
            id: "analytics",
            label: "تحلیل ها",
            icon: "ri-bar-chart-fill", // icon for analytics dashboard
            link: "/dashboard-analytics",
        },
        {
            id: "crm",
            label: "CRM",
            icon: "ri-user-3-fill", // icon for CRM dashboard
            link: "/dashboard-crm",
        },
        {
            id: "ecommerce",
            label: "فروشگاه",
            icon: "ri-store-2-fill", // icon for ecommerce dashboard
            link: "/dashboard",
        },
    
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;