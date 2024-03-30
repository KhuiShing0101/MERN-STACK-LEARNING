
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Menu, NewMenuParams } from "../../types/menu";

interface menuSlice{
    menus:Menu[];
    isLoading:boolean;
    error:string | null;
}

const initialState:menuSlice={
    menus:[],
    isLoading:false,
    error:null
}

export const createMenu = createAsyncThunk("menu/createMenu",
    async(newMenu:NewMenuParams,thunkApi)=>{
        const { onSuccess, ...payload } = newMenu;
        const response = await fetch("http://localhost:5000/menu",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({...newMenu})
        })
        const serverFromData = await response.json();
        const {menus} = serverFromData;
        // thunkApi.dispatch(setMenu(menus as Menu[]))
        onSuccess && onSuccess();
        return menus
    })

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
    },
    extraReducers:(builder)=>{
        builder.addCase(createMenu.pending,(state,action)=>{
            state.isLoading= true;
        }).addCase(createMenu.fulfilled,(state,action) =>{
            state.menus = action.payload
            state.isLoading= false;
        }).addCase(createMenu.rejected,(state,action)=>{
            state.isLoading = false;
            const e = new Error("create menu error occoured")
            state.error = e.message
        })
    }
})

export const {setMenu,addMenu,removeMenu} = menuSlice.actions;

export default menuSlice.reducer;