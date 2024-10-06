import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; // PrimeReact theme
import 'primereact/resources/primereact.min.css';         // PrimeReact core styles
import 'primeicons/primeicons.css';                       // PrimeReact icons
import 'primeflex/primeflex.css';     

const UpdateUserList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.users.users);
    const status = useSelector((state) => state.users.status);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);

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
                        <Button
                            label="Update"
                            icon="pi pi-pencil"
                            className="p-button-warning p-button-text text-sm"
                            onClick={() => navigate(`/dashboard/update/${rowData.id}`)}
                        />
                    )}
                />
            </DataTable>
        </div>
    );
};

export default UpdateUserList;
