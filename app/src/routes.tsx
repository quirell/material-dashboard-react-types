/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
//@material-ui/icons
import {Dashboard} from "@material-ui/icons";
//core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard";
import TableList from "./views/TableList/TableList";
import * as React from "react";
import {RouteComponentProps} from "react-router";

export interface DashboardRoute {
  path: string,
    name: string,
    icon: string | React.ReactElement,
    component:  React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
    layout: string
}

const dashboardRoutes:DashboardRoute[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  }
];

// const dashboardRoutes = [
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     rtlName: "لوحة القيادة",
//     icon: Dashboard,
//     component: DashboardPage,
//     layout: "/admin"
//   },
//   {
//     path: "/user",
//     name: "User Profile",
//     rtlName: "ملف تعريفي للمستخدم",
//     icon: Person,
//     component: UserProfile,
//     layout: "/admin"
//   },
//   {
//     path: "/table",
//     name: "Table List",
//     rtlName: "قائمة الجدول",
//     icon: "content_paste",
//     component: TableList,
//     layout: "/admin"
//   },
//   {
//     path: "/typography",
//     name: "Typography",
//     rtlName: "طباعة",
//     icon: LibraryBooks,
//     component: Typography,
//     layout: "/admin"
//   },
//   {
//     path: "/icons",
//     name: "Icons",
//     rtlName: "الرموز",
//     icon: BubbleChart,
//     component: Icons,
//     layout: "/admin"
//   },
//   {
//     path: "/maps",
//     name: "Maps",
//     rtlName: "خرائط",
//     icon: LocationOn,
//     component: Maps,
//     layout: "/admin"
//   },
//   {
//     path: "/notifications",
//     name: "Notifications",
//     rtlName: "إخطارات",
//     icon: Notifications,
//     component: NotificationsPage,
//     layout: "/admin"
//   },
//   {
//     path: "/rtl-page",
//     name: "RTL Support",
//     rtlName: "پشتیبانی از راست به چپ",
//     icon: Language,
//     component: RTLPage,
//     layout: "/rtl"
//   },
//   {
//     path: "/upgrade-to-pro",
//     name: "Upgrade To PRO",
//     rtlName: "التطور للاحترافية",
//     icon: Unarchive,
//     component: UpgradeToPro,
//     layout: "/admin"
//   }
// ];

export default dashboardRoutes;