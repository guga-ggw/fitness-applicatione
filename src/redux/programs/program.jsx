import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    routeType : "",
    boughtprograms : []
}

const programSlice = createSlice({
    name : 'program',
    initialState,
    reducers : {
        settype : (state, action) => {
            state.routeType = action.payload
        },
        addItem : (state, action) => {
            state.boughtprograms = [...state.boughtprograms, action.payload]
        }   
    }
})

export default programSlice.reducer
export const {settype, addItem} = programSlice.actions