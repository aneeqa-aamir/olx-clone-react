
import {configureStore } from '@reduxjs/toolkit'
import Cartslice from './Cartslice'

const store = configureStore({
    reducer: Cartslice.reducer
  })
 export default store