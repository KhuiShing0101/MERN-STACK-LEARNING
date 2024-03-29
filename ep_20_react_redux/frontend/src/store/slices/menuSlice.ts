import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Menu{
    id:number;
    name:string;
    price:number;
}

interface menuSlice{
    menus:Menu[];
    isLoading:boolean;
    error:Error | null;
}

const initialState:menuSlice={
    menus:[],
    isLoading:false,
    error:null
}

export const menuSlice = createSlice({
    name:"menu",
    initialState,
    reducers:{
        setMenu:(state,action:PayloadAction<Menu[]>)=>{
            state.menus = action.payload;
        },
        addMenu:(state,action:PayloadAction<Menu>)=>{
            state.menus = [...state.menus,action.payload]
        },
        removeMenu:(state,action:PayloadAction<Menu>)=>{
            state.menus = state.menus.filter((menu)=> menu.id === action.payload.id ? false : true)
        }
    }
})

export const {setMenu,addMenu,removeMenu} = menuSlice.actions;

export default menuSlice.reducer;