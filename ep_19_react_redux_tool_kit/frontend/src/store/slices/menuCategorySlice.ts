import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface MenuCategory{
    id:number,
    name:string,
    isAvailable:boolean,
}
interface MenuCategorySlice{
    menuCategories:MenuCategory[],
    isLoading:boolean,
    error:Error|null
}

const initialState:MenuCategorySlice = {
    menuCategories:[],
    isLoading:false,
    error:null,
}


export const menuCategorySlice = createSlice({
    name: "menuCategories",
    initialState,
    reducers:{
        addMenuCategory:(state,Action:PayloadAction<MenuCategory>)=>{
            const newMenuCategory = Action.payload
            state.menuCategories = [...state.menuCategories,newMenuCategory]
        }
    }
})
export const {addMenuCategory} = menuCategorySlice.actions;

export default menuCategorySlice.reducer;