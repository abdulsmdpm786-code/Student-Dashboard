import {createSlice} from "@reduxjs/toolkit"

const formSlice = createSlice(
    {
        name: "Note",
        initialState: { 
             activeCategory: "All"
         },

        reducers: {
           setCategory: (state, action) => {
            state.activeCategory = action.payload;
           }
        }

    }
)

export const {setCategory} = formSlice.actions
export default formSlice.reducer