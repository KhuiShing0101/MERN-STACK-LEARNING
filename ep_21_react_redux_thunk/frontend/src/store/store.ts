import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './slices/menuSlice'
import menuCategoryReducer from './slices/menuCategorySlice'
import userReducer from './slices/userSlice'
import snackbarReducer from './slices/appSnackbarSlice'

export const store = configureStore({
  reducer: {
    menu : menuReducer,
    menuCategory: menuCategoryReducer,
    user : userReducer,
    snackbar: snackbarReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch