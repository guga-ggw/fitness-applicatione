import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    routeType : ""
}

const programSlice = createSlice({
    name : 'program',
    initialState,
    reducers : {
        settype : (state, action) => {
            state.routeType = action.payload
        }
    }
})

export default programSlice.reducer
export const {settype} = programSlice.actions