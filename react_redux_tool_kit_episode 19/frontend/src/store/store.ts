import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './slices/menuSlice'
import menuCategoryReducer from './slices/menuCategorySlice'
export const store = configureStore({
  reducer: {
    menu: menuReducer,
    menuCategory: menuCategoryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch