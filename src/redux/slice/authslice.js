import {createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice ({
    name : "auth",
    //ياخد بيانات التسجيل من اللوكال سطرويتج ولو عملنا ريفريش
    initialState : {
        user:localStorage.getItem('user')?
        JSON.parse(localStorage.getItem('user'))
        : null
    },
    reducers:{
        login(state,action){
            state.user = action.payload;//البيانات التي يتم اخدها يتم تخزينها في pyload
        },
        logout(state){
            state.user = null;//logout;
            //ارجاء اليوزر الى نول
        },
    }
})

const authReducer = authSlice.reducer
const authAction = authSlice.actions;


export { authAction , authReducer}