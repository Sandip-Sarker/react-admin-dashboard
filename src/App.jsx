import { useState } from 'react'
import Sidebar from './components/Layout/Sidebar'
import Header from './components/Layout/Header'
import Dashboard from './components/Dashboard/Dashboard'
import UserList from './components/User/UserList';
// import Settings from './components/Settings/Settings'

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);


  return (
    <> 
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800"
      dark:to-slate-900 transition-all duration-500>
          <div className="flex h-screen overflow-hidden">
             <Sidebar
                  collapsed={sideBarCollapsed}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage} 
              />
             <div className="flex-1 flex flex-col overflow-hidden">
                <Header  
                  sideBarCollapsed={sideBarCollapsed} 
                  onToggleSidebar={() => setSideBarCollapsed(!sideBarCollapsed)}/>

                  <main className="flex-1 overflow-y-auto">
                    {currentPage === "dashboard" && <Dashboard />}
                    {currentPage === "userlist" && <UserList />}

                  </main>
             </div>
          </div>
      </div>
    </>
  )
}

export default App
