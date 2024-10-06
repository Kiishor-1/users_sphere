import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for menu and close

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Menu Icon for mobile */}
      <div className="p-4 lg:hidden">
        <FaBars className="text-[1.2rem] cursor-pointer" onClick={toggleSidebar} />
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 bg-black text-white w-64 transform z-[10000] ${isSidebarOpen ? "translate-x-0" : "translate-x-[-120%]"} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
        <div className="flex items-center justify-between p-4 font-bold text-3xl drop-shadow-[2px_2px_8px_blue]">
          {`User's Sphere`}
          <FaTimes
            className="cursor-pointer hover:text-gray-400 lg:hidden block text-[1.2rem]" // Add hover effect
            onClick={toggleSidebar}
            style={{ zIndex: 10 }} // Ensures the icon is on top
          />
        </div>
        <nav className="flex-1 px-4 py-2">
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard/list" className="block p-2 hover:bg-gray-700 rounded-md">User List</Link>
            </li>
            <li>
              <Link to="/dashboard/create" className="block p-2 hover:bg-gray-700 rounded-md">Create User</Link>
            </li>
            <li>
              <Link to="/dashboard/update" className="block p-2 hover:bg-gray-700 rounded-md">Update User</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content */}
      <div className={`flex-1 bg-gray-100 p-6 ${isSidebarOpen ? "opacity-50" : "opacity-100"} transition-opacity duration-300`}>
        <Outlet /> {/* Renders the current route's component */}
      </div>
    </div>
  );
};

export default DashboardLayout;


