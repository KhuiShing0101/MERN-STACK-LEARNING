import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// Action Dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
// Get Data From Store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector