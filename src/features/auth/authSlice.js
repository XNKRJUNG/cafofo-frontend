import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userEmail: null,
  userId: null,
  role: null,
  isLoggedIn: false
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userEmail = action.payload.email
      state.userId = action.payload.id
      state.role = action.payload.role
      state.isLoggedIn = action.payload.isLoggedIn
    },
    logout: state => {
      state.userEmail = null
      state.userId = null
      state.role = null
      state.isLoggedIn = false
    }
  }
})

export const { setUser, logout } = authSlice.actions

export default authSlice.reducer
