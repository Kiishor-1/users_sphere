import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const NewUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createUser(formData));
        navigate('/dashboard/list');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New User</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        className="w-full border p-2 rounded-md"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        className="w-full border p-2 rounded-md"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    Create User
                </button>
            </form>
        </div>
    );
};

export default NewUser;




















// // src/pages/NewUser.jsx

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createUser } from '../store/userSlice';
// import { useNavigate } from 'react-router-dom';

// const NewUser = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     email: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await dispatch(createUser(formData));
//     navigate('/dashboard/list');
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Create New User</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Name</label>
//           <input
//             className="w-full border p-2 rounded-md"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             className="w-full border p-2 rounded-md"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Create User</button>
//       </form>
//     </div>
//   );
// };

// export default NewUser;














// // src/components/NewUser.jsx

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createUser } from '../store/userSlice'; // Import the thunk to create a user
// import { useNavigate } from 'react-router-dom'; // For navigation after user creation

// const NewUser = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // State for user input
//     const [userData, setUserData] = useState({
//         name: '',
//         email: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUserData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Dispatch the thunk to create a new user
//         const createdUser = await dispatch(createUser(userData)).unwrap(); // Use unwrap to get the payload

//         // Optionally, you can log the created user or perform further actions
//         console.log('Created User:', createdUser);

//         // Navigate back to the home page or user list
//         navigate('/'); // You can change this to any route you prefer
//     };

//     return (
//         <div className="mx-auto p-4 h-[calc(100vh-88px)] w-screen flex flex-col items-center justify-center gap-3">
//             <h1 className="text-3xl mb-4">Create New User</h1>
//             <form onSubmit={handleSubmit} className="w-[400px] mx-auto bg-white p-4 rounded-lg shadow-lg">
//                 <div className="mb-4">
//                     <label htmlFor="name" className="block text-gray-700 mb-1">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={userData.name}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 rounded-md p-2"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="email" className="block text-gray-700 mb-1">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={userData.email}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 rounded-md p-2"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="w-full bg-teal-500 text-white p-2 rounded-md hover:bg-blue-600">Create User</button>
//             </form>
//         </div>
//     );
// };

// export default NewUser;
