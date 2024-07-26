import { createSlice } from "@reduxjs/toolkit"
import { IModalAction, IModalReducer } from "../../../Interfaces"

const initiaState: IModalReducer = {
  data: null,
  name: "",
  update: null
}

const ModalReducer = createSlice({
  name: "modal",
  initialState: initiaState,

  reducers: {
    openModal: (state: IModalReducer, action: IModalAction) => {
      state.data = action.payload.data
      state.name = action.payload.name
    },
    closeModal: (state: IModalReducer) => {
      state.data = null
      state.name = ""
    },
    setUpdate: (state: IModalReducer, action) => {
      state.update = action.payload.update
    },
    setLoading: (state: IModalReducer, action) => {
      const copyData = { ...state.data }
      copyData.isLoading = action?.payload?.isLoading
      state.data = copyData
    }
  }
})


export const { openModal, closeModal, setUpdate, setLoading } = ModalReducer.actions

export default ModalReducer.reducer
