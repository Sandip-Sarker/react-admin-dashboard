import { Bell, ChevronDown, Filter, Menu, Plus, Search, Settings, Sun } from 'lucide-react'
import React from 'react'
import avatar from "../../assets/image/avatar.jpg";

const Header = ({ sideBarCollapsed, onToggleSidebar }) => {
    return (
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4">
            <div className="flex items-center justify-between">
                {/* left section */}
                <div className="flex items-center space-x-3">
                    <button onli
                        className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
                        onClick={onToggleSidebar}
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* center section */}
                    <div className="flex-1 max-w-md mx-8">
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                            <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/50 text-sm text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300">
                            </button>
                        </div>
                    </div>
                </div>

                

                {/* right section  */}
                <div className="flex items-center space-x-3">
                    {/* Toggle */}
                    <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300">
                        <Sun className="w-6 h-6" />
                    </button>

                    {/* Notification */}
                    <button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <Bell className="w-6 h-6" />
                        <span className="absolute -top-1 right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs font-bold items-center justify-center">3</span>
                    </button>

                    {/* User Profile */}
                    <div className="flex items-center space-x-3 pl-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <img src={avatar} alt="User Profile" className="w-8 h-8 rounded-full" ring="2" ring-blue-500/>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-sm font-medium text-stone-500 dark:text-slate-400">John Doe</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
                        
                    </div>
                    
                    <ChevronDown className="w-4 h-4 text-slate-40" />
                  
                </div>

            </div>
        </div>
    )
}

export default Header