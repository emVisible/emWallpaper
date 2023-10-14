import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ''
}

const routeState = createSlice({
  name: 'routeState',
  initialState,
  reducers: {
    stateChange(state, action) {
      console.log('state', state)
      console.log('action', action)
      state.value = action.payload.value
    }
  }
})

export const { stateChange } = routeState.actions
export default routeState.reducer
