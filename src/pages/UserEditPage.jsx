import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser, fetchUsers } from '../store/userSlice';

const UserEditPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.users.users);
    const user = users.find(user => user.id === parseInt(id));
    const [formData, setFormData] = useState({ name: '', email: '' });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
            });
        } else {
            dispatch(fetchUsers()); // Fetch users if not found
        }
    }, [user, dispatch]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(updateUser({ id: user.id, data: formData }));
        navigate('/dashboard/list'); // Navigate back to list after update
    };

    if (!user) return <div>Loading...</div>; // Handle loading state

    return (
        <div className="mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit User</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block">Name</label>
                    <input
                        className="w-full border p-2 rounded-lg"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block">Email</label>
                    <input
                        className="w-full border p-2 rounded-lg"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <button
                        type="submit"
                        className="bg-teal-500 hover:bg-teal-600 rounded-md text-white px-4 py-2"
                    >
                        Save
                    </button>
                    <button
                        type='button'
                        onClick={() => navigate(-1)}
                        className='bg-gray-500 font-bold rounded-md hover:bg-gray-600 text-white px-4 py-2'
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserEditPage;