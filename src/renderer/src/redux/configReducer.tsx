import { createSlice } from '@reduxjs/toolkit'

const configState = createSlice({
  name: 'config',
  initialState: {
    config: { value: 'None' }
  },
  reducers: {
    saveConfig(state, action) {
      console.log('state', state)
      console.log('action', action)
      state.config = {...action.payload.config}
    }
  }
})

export const { saveConfig } = configState.actions
export default configState.reducer
