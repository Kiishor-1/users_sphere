import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const initialState = {
    users: [],
    status: 'idle',
    error: null,
};

// Async Thunks for API calls
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
    const toastId = toast.loading('Fetching Users');
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        toast.dismiss(toastId)
        return response.data;
    } catch (err) {
        toast.dismiss(toastId)
        toast.error('Failed to fetch users')
        rejectWithValue(err.response?.message || 'Failed to fetch users');
    }
});

export const createUser = createAsyncThunk('users/createUser', async (userData, {rejectWithValue}) => {
    const toastId = toast.loading('Creating User');
    try{
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
        toast.dismiss(toastId)
        toast.success('User created successfully');
    return response.data;
    }catch(err){
        console.log(err);
        toast.dismiss(toastId)
        toast.error(err.response?.message || 'Failed to create user');
        return rejectWithValue(err.response?.message || 'Failed to create user');
    }
});

export const updateUser = createAsyncThunk('users/updateUser', async ({ id, data }) => {
    const toastId = toast.loading('Upading User');
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, data);
        toast.dismiss(toastId)
        toast.success('User Updated Successfuly');
        return response.data;
    } catch (error) {
        console.log(error);
        toast.dismiss(toastId)
        toast.error('Failed to update user');
    }
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id, { rejectWithValue }) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        toast.success('User Deleted');
        return id;
    } catch (error) {
        console.log(error);
        toast.error('Failed to delete user')
        return rejectWithValue(error.response?.message || 'Failed to delete user')
    }
});

// User Slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Users
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Create User
            .addCase(createUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Update User
            .addCase(updateUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.users.findIndex(user => user.id === action.payload.id);
                state.users[index] = action.payload;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Delete User
            .addCase(deleteUser.pending, (state) => {
                // state.status = 'loading';
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = state.users.filter(user => user.id !== action.payload);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});


export default usersSlice.reducer;
