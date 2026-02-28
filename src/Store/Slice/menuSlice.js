import { createSlice } from "@reduxjs/toolkit"

const menuToggle = createSlice(
    {
        name: "Menu",
        initialState: {isMenu: false,
            isList: false,
            isTimer: false,
        },
        

        reducers: {
            toggleMenu: (state)=> {
                state.isMenu = !state.isMenu
                console.log(state);
                
            },
            toggleList: (state)=> {
                state.isList = !state.isList
            },
            toggleTimer: (state)=> {
                state.isTimer = !state.isTimer
            }
        }
    }
)

export const {toggleMenu, toggleList, toggleTimer } = menuToggle.actions
export default menuToggle.reducer