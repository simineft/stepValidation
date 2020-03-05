import { NEXT_STEP, PREV_STEP, UPDATE_INPUT, ADD_PERSON, UPLOAD_FILE} from "./action"



const initialState = {
  step: 1,

  // step 1
  firstName: '',
  lastName: '',
  nationalCode: '',
  birthDay: "",

  // step 2
  file: null,

  input: {}

}



export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        step: state.step + 1
      }
    case PREV_STEP:
      return {
        ...state,
        step: state.step - 1
      }
    case ADD_PERSON:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_INPUT:
      return {
        ...state,
        ...action.payload
      }


    case UPLOAD_FILE:
      return {
        ...state,
        file: action.payload
      }
    default:
      return state
  }

  return state

}


export default reducer
