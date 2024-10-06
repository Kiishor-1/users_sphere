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
        // toast.success('User Deleted Successfully');
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
