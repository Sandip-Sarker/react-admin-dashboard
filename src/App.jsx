import { useState } from 'react'
import Sidebar from './components/Layout/Sidebar'
import Header from './components/Layout/Header'

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);


  return (
    <> 
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800"
      dark:to-slate-900 transition-all duration-500>
          <div className="flex h-screen overflow-hidden">
             <Sidebar
                  collapsed={collapsed}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
              />
             <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
             </div>
          </div>
      </div>
    </>
  )
}

export default App
