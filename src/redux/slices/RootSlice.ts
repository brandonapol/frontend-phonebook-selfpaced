import { createSlice } from '@reduxjs/toolkit';

// Review Notion doc for more info

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Name',
        email: 'Email',
        phone_number: 'Phone Number',
        address: 'Address',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseEmail: (state, action) => { state.email = action.payload},
        choosePhone: (state, action) => { state.phone_number = action.payload},
        chooseAddress: (state, action) => { state.address = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseEmail, choosePhone, chooseAddress } = rootSlice.actions;