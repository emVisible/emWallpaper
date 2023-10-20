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
      // const v = action.payload.config.value
      // console.log('v', v)
      state.config = {...action.payload.config}
      // switch (action.type) {
        // case 'config/saveConfig':
          // const { config } = action.payload
          // return { ...state, config }
      // }
      // return state
    }
  }
})

export const { saveConfig } = configState.actions
export default configState.reducer
