import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../store/userSlice';
import { Link } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import toast from 'react-hot-toast';

const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const status = useSelector((state) => state.users.status);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
        toast.success('User Deleted Successfully');
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <div className="flex lg:flex-row flex-col items-center justify-between">
                <input
                    type="text"
                    placeholder="Search by name or email"
                    className="mb-4 px-4 py-2 border rounded-md w-full lg:max-w-[20rem]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Link to="/dashboard/create" className="mb-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Add New User
                </Link>
            </div>

            <DataTable
                value={filteredUsers}
                paginator
                rows={10}
                rowsPerPageOptions={[5, 10, 25, 50]}
                emptyMessage="No users found."
                className="p-datatable-sm border border-gray-300 rounded-lg"
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column field="name" header="Name" body={(rowData) => <span className="font-medium">{rowData.name}</span>} />
                <Column field="email" header="Email" body={(rowData) => <span>{rowData.email}</span>} />
                <Column
                    header="Actions"
                    body={(rowData) => (
                        <div className='text-sm'>
                            <Link to={`/dashboard/list/${rowData.id}`} className="text-blue-500 mr-2">View</Link>
                            <Button
                                label="Delete"
                                icon="pi pi-trash"
                                className="p-button-danger p-button-text text-sm"
                                onClick={() => handleDelete(rowData.id)}
                            />
                        </div>
                    )}
                />
            </DataTable>
        </div>
    );
};

export default Home;










// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers, deleteUser } from '../store/userSlice';
// import { Link } from 'react-router-dom';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { Button } from 'primereact/button';
// import toast from 'react-hot-toast';

// const Home = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users.users);
//   const status = useSelector((state) => state.users.status);

//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchUsers());
//     }
//   }, [status, dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteUser(id));
//     toast.success('User Deleted Successfully');
//   };

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex lg:flex-row flex-col items-center justify-between">
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           className="mb-4 px-4 py-2 border rounded-md w-full lg:max-w-[20rem]"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Link to="/dashboard/create" className="mb-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//           Add New User
//         </Link>
//       </div>

//       <DataTable
//         value={filteredUsers}
//         paginator
//         rows={10}
//         rowsPerPageOptions={[5, 10, 25, 50]}
//         emptyMessage="No users found."
//         className="p-datatable-sm border border-gray-300 rounded-lg"
//         tableStyle={{ minWidth: '50rem' }}
//       >
//         <Column field="name" header="Name" body={(rowData) => <span className="font-medium">{rowData.name}</span>} />
//         <Column field="email" header="Email" body={(rowData) => <span>{rowData.email}</span>} />
//         <Column
//           header="Actions"
//           body={(rowData) => (
//             <div className='text-sm'>
//               <Link to={`/users/${rowData.id}`} className="text-blue-500 mr-2">View</Link>
//               <Button
//                 label="Delete"
//                 icon="pi pi-trash"
//                 className="p-button-danger p-button-text"
//                 onClick={() => handleDelete(rowData.id)}
//               />
//             </div>
//           )}
//         />
//       </DataTable>
//     </div>
//   );
// };

// export default Home;



// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers, deleteUser } from '../store/userSlice';
// import { Link } from 'react-router-dom';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { Button } from 'primereact/button';
// import 'primereact/resources/themes/saga-blue/theme.css'; // Choose any available theme
// import 'primereact/resources/primereact.min.css';         // Core styles for PrimeReact components
// import 'primeicons/primeicons.css';                       // Icons for PrimeReact
// import 'primeflex/primeflex.css';
// import toast from 'react-hot-toast';

// const Home = () => {
//     const dispatch = useDispatch();
//     const users = useSelector((state) => state.users.users);
//     const status = useSelector((state) => state.users.status);

//     // State for search input
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         if (status === 'idle') {
//             dispatch(fetchUsers());
//         }
//     }, [status, dispatch]);

//     const handleDelete = (id) => {
//         dispatch(deleteUser(id));
//         // Show a success message on deletion
//         toast.current.show({ severity: 'success', summary: 'User Deleted', detail: 'User was deleted successfully!', life: 3000 });
//     };

//     // Filtering users based on search term
//     const filteredUsers = users.filter((user) =>
//         user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     // Apply alternating row background color using rowStyle
//     const rowStyle = (data, { index }) => {
//         return {
//             backgroundColor: index % 2 === 0 ? '#f3f4f6' : '#ffffff' // Tailwind's bg-gray-100 (#f3f4f6) and white
//         };
//     };

//     if (status === 'loading') {
//         return (
//             <div className="container mx-auto p-4">
//                 {/* Skeleton Loader */}
//                 <table className="min-w-full border">
//                     <thead>
//                         <tr className="bg-gray-200">
//                             <th className="h-[2rem] w-[33%] bg-gray-200"></th>
//                             <th className="h-[2rem] w-[33%] bg-gray-200"></th>
//                             <th className="h-[2rem] w-[33%] bg-gray-200"></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {[...Array(10)].map((_, id) => (
//                             <tr key={id} className="border-b">
//                                 <td className="w-[33%]">
//                                     <div className="h-[2rem] bg-gray-100 my-2 rounded-full"></div>
//                                 </td>
//                                 <td className="w-[33%]">
//                                     <div className="h-[2rem] bg-gray-100 my-2 rounded-full"></div>
//                                 </td>
//                                 <td className="w-[33%]">
//                                     <div className="h-[2rem] bg-gray-100 my-2 rounded-full"></div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto p-4">
//             <div className="flex lg:flex-row flex-col items-center justify-between">
//                 <input
//                     type="text"
//                     placeholder="Search by name or email"
//                     className="mb-4 px-4 py-2 border rounded-md w-full lg:max-w-[20rem]"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <Link to="/new" className="mb-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//                     Add New User
//                 </Link>
//             </div>

//             <DataTable
//                 value={filteredUsers}
//                 paginator
//                 rows={10}
//                 rowsPerPageOptions={[5, 10, 25, 50]}
//                 emptyMessage="No users found."
//                 className="p-datatable-sm border border-gray-300 rounded-lg"
//                 tableStyle={{ minWidth: '50rem' }}
//                 rowStyle={rowStyle} // Apply alternating row colors via inline styles
//             >
//                 <Column field="name" header="Name" body={(rowData) => <span className="font-medium">{rowData.name}</span>} />
//                 <Column field="email" header="Email" body={(rowData) => <span>{rowData.email}</span>} />
//                 <Column
//                     header="Actions"
//                     body={(rowData) => (
//                         <div className='text-sm'>
//                             <Link to={`/users/${rowData.id}`} className="text-blue-500 mr-2">
//                                 View
//                             </Link>
//                             <Button
//                                 label="Delete"
//                                 icon="pi pi-trash"
//                                 className="p-button-danger p-button-text"
//                                 onClick={() => handleDelete(rowData.id)}
//                             />
//                         </div>
//                     )}
//                 />
//             </DataTable>
//         </div>
//     );
// };

// export default Home;
