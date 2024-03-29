import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MenuCategory } from "../../types/menuCategory";

interface MenuCategorySlice{
    menuCategories:MenuCategory[];
    isLoading:boolean;
    error:Error | null
}

const initialState:MenuCategorySlice={
    menuCategories:[],
    isLoading:false,
    error:null
}

export const menuCategorySlice = createSlice({
    name: "menuCategory",
    initialState,
    reducers:{
        setMenuCategory:(state,action:PayloadAction<MenuCategory[]>)=>{
            state.menuCategories =action.payload;
        },
        addMenuCategory:(state,action:PayloadAction<MenuCategory>)=>{
            state.menuCategories = [...state.menuCategories,action.payload];
        },
        removeMenuCategory:(state,action:PayloadAction<MenuCategory>)=>{
            state.menuCategories = state.menuCategories.filter((menuCategory)=>menuCategory.id === action.payload.id ? false : true)
        }
    }
})

export const {setMenuCategory,addMenuCategory,removeMenuCategory} = menuCategorySlice.actions;

export default menuCategorySlice.reducer;