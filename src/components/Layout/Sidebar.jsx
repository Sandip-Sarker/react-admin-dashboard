import React from "react";
import {
    BarChart2,
    ChevronDown,
    DollarSign,
    Folder,
    Landmark,
    LayoutDashboard,
    Mail,
    Monitor,
    Settings,
    TrafficConeIcon,
    User,
    Zap,
} from "lucide-react";

import avatar from "../../assets/image/avatar.jpg";

const menuItems = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
        badge: "New",
    },
    {
        id: "users",
        label: "Users",
        icon: User,
    },
    {
        id: "analytics",
        label: "Analytics",
        icon: BarChart2,
        subMenu: [
            {
                id: "traffic",
                label: "Traffic",
                icon: TrafficConeIcon,
            },
            {
                id: "sales",
                label: "Sales",
                icon: DollarSign,
            },
        ],
    },
    {
        id: "projects",
        label: "Projects",
        icon: Folder,
    },
    {
        id: "settings",
        label: "Settings",
        icon: Settings,
        subMenu: [
            {
                id: "System Settings",
                label: "System Settings",
                icon: Monitor,
            },
            {
                id: "Email Settings",
                label: "Email Settings",
                icon: Mail,
            },
            {
                id: "Stripe Settings",
                label: "Stripe Settings",
                icon: Landmark,
            }
        ],
    },
];

const Sidebar = ({ collapsed, currentPage, onPageChange }) => {
    const [expandedMenu, setExpandedMenu] = React.useState(
        new Set(["analytics"])
    );

    const toggleSubMenu = (id) => {
        const newExpandedMenu = new Set(expandedMenu);

        if (newExpandedMenu.has(id)) {
            newExpandedMenu.delete(id);
        } else {
            newExpandedMenu.add(id);
        }

        setExpandedMenu(newExpandedMenu);
    };

    return (
        <div
            className={`${
                collapsed ? "w-20" : "w-72"
            } bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 flex flex-col transition-all duration-300`}
        >
            {/* Logo */}
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Zap className="w-6 h-6 text-white" />
                    </div>

                    {!collapsed && (
                        <div>
                            <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                                Nexus
                            </h1>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Admin Panel
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {menuItems.map((item) => (
                    <div key={item.id}>
                        <button
                            onClick={() => {
                                if (item.subMenu) {
                                    toggleSubMenu(item.id);
                                } else {
                                    onPageChange(item.id);
                                }
                            }}
                            className={`w-full flex items-center p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                                currentPage === item.id
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow"
                                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                            }`}
                        >
                            <item.icon className="w-5 h-5 flex-shrink-0" />

                            {!collapsed && (
                                <>
                               <div className="flex items-center flex-1 ml-3">
                                    <span>{item.label}</span>

                                    {item.badge && (
                                        <span className="ml-auto text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                                            {item.badge}
                                        </span>
                                    )}

                                    {item.subMenu && (
                                        <ChevronDown
                                            className={`w-4 h-4 ml-auto transition-transform duration-200 ${
                                                expandedMenu.has(item.id)
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    )}
                                </div>
                                </>
                            )}
                        </button>

                        {/* Sub Menu */}
                        {!collapsed &&
                            item.subMenu &&
                            expandedMenu.has(item.id) && (
                                <div className="ml-8 mt-2 space-y-1">
                                    {item.subMenu.map((sub) => (
                                        <button
                                            key={sub.id}
                                            onClick={() =>
                                                onPageChange(sub.id)
                                            }
                                            className={`w-full flex items-center p-2 rounded-lg text-sm transition-all duration-200 ${
                                                currentPage === sub.id
                                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow"
                                                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                                            }`}
                                        >
                                            <sub.icon className="w-4 h-4" />
                                            <span className="ml-2">
                                                {sub.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            )}
                    </div>
                ))}
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                    <img
                        src={avatar}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full ring-2 ring-blue-500"
                    />

                    {!collapsed && (
                        <div className="min-w-0">
                            <h2 className="text-sm font-semibold text-slate-800 dark:text-white">
                                John Doe
                            </h2>

                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Administrator
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;