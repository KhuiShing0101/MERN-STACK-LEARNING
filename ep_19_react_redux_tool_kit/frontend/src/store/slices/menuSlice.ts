import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Menu{
    id:number;
    name:string;
    price:number;
}
interface MenuSlice{
    menus:Menu[];
    isLoading:boolean;
    error:Error|null;
}

const initialState: MenuSlice= {
    menus:[],
    isLoading:false,
    error:null
}

export const menuSlice = createSlice({
    name:"menu",
    initialState,
    reducers:{
        addMenu:(state,action:PayloadAction<Menu>)=>{
            const newMenu = action.payload
            state.menus = [...state.menus,newMenu];
        }
    }
})

export const{addMenu}=menuSlice.actions;

export default menuSlice.reducer;