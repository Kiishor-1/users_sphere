import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import store from './store';
import DashboardLayout from './pages/DashboardLayout';
import Home from './pages/Home';
import UserDetailPage from './pages/UserDetailPage';
import UserEditPage from './pages/UserEditPage';
import NewUser from './pages/NewUser';
import UpdateUserList from './pages/UpdateUserList';
import { Navigate } from 'react-router-dom';

const App = () => (
  
  <Provider store={store}>
    <Routes>
      {/* Dashboard Layout with nested routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="list" element={<Home />} />  {/* List all users */}
        <Route path="create" element={<NewUser />} />  {/* Create a new user */}
        <Route path="update" element={<UpdateUserList />} /> {/* Update User List */}
        <Route path="update/:id" element={<UserEditPage />} /> {/* Update a specific user */}
        <Route path="list/:id" element={<UserDetailPage />} /> {/* View user details */}
      </Route>
      {/* Redirect all unmatched routes to dashboard */}
      <Route path="*" element={<Navigate to="/dashboard/list" />} />
    </Routes>
  </Provider>
);

export default App;






















// import { Provider } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import store from './store';
// import DashboardLayout from './pages/DashboardLayout';
// import Home from './pages/Home';
// import UserDetailPage from './pages/UserDetailPage';
// import UserEditPage from './pages/UserEditPage';
// import NewUser from './pages/NewUser';
// import UpdateUserList from './pages/UpdateUserList';

// const App = () => (
//   <Provider store={store}>
//     <Routes>
//       {/* Dashboard Layout with nested routes */}
//       <Route path="/dashboard" element={<DashboardLayout />}>
//         <Route path="list" element={<Home />} />  {/* List all users */}
//         <Route path="create" element={<NewUser />} />  {/* Create a new user */}
//         <Route path="update" element={<UpdateUserList />} /> {/* Update User List */}
//         <Route path="update/:id" element={<UserEditPage />} /> {/* Update a specific user */}
//         <Route path="list/:id" element={<UserDetailPage />} /> {/* View user details */}
//       </Route>
//     </Routes>
//   </Provider>
// );

// export default App;


















// import { Provider } from 'react-redux';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import store from './store';
// import Home from './pages/Home';
// import UserDetailPage from './pages/UserDetailPage';
// import UserEditPage from './pages/UserEditPage';
// import NewUser from './pages/NewUser';
// import { Link } from 'react-router-dom';

// const App = () => {
//   const location = useLocation(); // Get the current location

//   return (
//     <Provider store={store}>
//       <Link to={"/"} className={`text-4xl inline-block w-full ${location.pathname.startsWith('/users/') && "bg-teal-300 text-white"} p-4 font-bold text-blue-100 drop-shadow-[1px_1px_1px_teal]`}>
//         {`User's Sphere`}
//       </Link>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/new" element={<NewUser />} />
//         <Route path="/users/:id" element={<UserDetailPage />} />
//         <Route path="/users/:id/edit" element={<UserEditPage />} />
//       </Routes>
//     </Provider>
//   );
// };

// export default App;
