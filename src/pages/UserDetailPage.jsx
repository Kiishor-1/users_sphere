import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/userSlice';
import { FaUserEdit } from "react-icons/fa";

const UserDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.users.users);
    const user = users.find(user => user.id === parseInt(id));

    useEffect(() => {
        if (!user) {
            dispatch(fetchUsers());
        }
    }, [user, dispatch]);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-100px)] min-w-[400px] relative">
            <div className="h-[70vh] w-full bg-teal-300"></div>
            <div className="h-[30vh] w-full"></div>
            <div className="bg-white rounded-lg shadow-lg w-[90%] bottom-[6%] max-w-l px-x py-6 absolute">
                <div className="flex justify-center relative w-36 h-36 mx-auto">
                    <img
                        src={`https://ui-avatars.com/api/?name=${user.name}`}
                        alt={user.name}
                        className="w-36 h-36 rounded-full border-4 border-white shadow-lg relative"
                    />
                    <button
                        onClick={() => navigate(`/dashboard/update/${user.id}`)} // Redirect to update page
                        className="absolute bottom-1 right-[0.4rem] bg-gray-100 shadow-lg p-2 flex items-center rounded-full"
                    >
                        <FaUserEdit fontSize={"1.4rem"} />
                    </button>
                </div>
                <div className="text-center mt-6">
                    <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                    <p className="text-gray-600">{user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetailPage;




















// import { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchUsers } from '../store/userSlice';
// import { FaUserEdit } from "react-icons/fa";
// import { Link } from 'react-router-dom';

// const UserDetailPage = () => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const users = useSelector((state) => state.users.users);
//     const user = users.find(user => user.id === parseInt(id));

//     const currUser = {
//         name: user.name,
//         age: 27,
//         location: "Bucharest, Romania",
//         jobTitle: "Solution Manager - Creative Tim Officer",
//         university: "University of Computer Science",
//         friends: 22,
//         photos: 10,
//         comments: 89
//     };


//     useEffect(() => {
//         if (!user) {
//             dispatch(fetchUsers());
//         }
//     }, [user, dispatch]);

//     if (!user) return <div>Loading...</div>;

//     return (
//         <div className="flex flex-col justify-center items-center  h-[calc(100vh-88px)] min-w-[400px] relative">
//             <div className="h-[70vh] w-[100vw] bg-teal-300">
//             </div>
//             <div className="h-[30vh] w-[100vw] bg-gray-100"></div>
//             <div className="bg-white rounded-lg shadow-lg w-[90%] bottom-[6%] max-w-l px-x py-6 absolute">
//                 <div className="flex justify-center relative w-36 h-36 mx-auto">
//                     <img
//                         src={`https://ui-avatars.com/api/?name=${currUser.name}`}
//                         alt={`${currUser.name}`}
//                         className="w-36 h-36 rounded-full border-4 border-white  shadow-lg relative"
//                     />
//                     <button
//                         onClick={() => navigate(`/users/${user.id}/edit`)}
//                         className="absolute bottom-1 right-[0.4rem] bg-gray-100 shadow-lg p-2 flex items-center rounded-full"
//                     >
//                         <FaUserEdit fontSize={"1.4rem"}/>
//                     </button>
//                 </div>
//                 <div className="text-center mt-6">
//                     <h1 className="text-3xl font-bold text-gray-800">{currUser.name}, {currUser.age}</h1>
//                     <p className="text-gray-600">{currUser.location}</p>
//                     <p className="mt-4 font-semibold text-gray-700">{user.jobTitle}</p>
//                     <p className="text-gray-500">{currUser.university}</p>

//                     <div className="flex justify-around mt-6 text-gray-600">
//                         <div>
//                             <h4 className="font-bold text-xl">{currUser.friends}</h4>
//                             <span className="text-sm">Friends</span>
//                         </div>
//                         <div>
//                             <h4 className="font-bold text-xl">{currUser.photos}</h4>
//                             <span className="text-sm">Photos</span>
//                         </div>
//                         <div>
//                             <h4 className="font-bold text-xl">{currUser.comments}</h4>
//                             <span className="text-sm">Comments</span>
//                         </div>
//                     </div>

//                     <div className="flex justify-center mt-6 space-x-4">
//                         <button className="bg-cyan-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-cyan-600">
//                             Connect
//                         </button>
//                         <button className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-700">
//                             Message
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserDetailPage;


