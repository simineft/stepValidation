export const NEXT_STEP = "NEXTSTEP";
export const PREV_STEP = "PREVSTEP";
export const UPDATE_INPUT = "UPDATEINPUT";
export const UPLOAD_FILE = "UPLOADFILE"
export const ADD_PERSON = "ADDPERSON";
export const UPDATE_DATE = "UPDATEDATE"






export const addPerson = (personInfo = {}) => ({
    type: ADD_PERSON,
    payload: personInfo
})

export const uploadFile = (file) => ({
    type: UPLOAD_FILE,
    payload: file
})

export const updateInput = (input) => (
    {
        type: UPDATE_INPUT,
        payload: input,
    }
)


export const prevStep = () => ({
    type: PREV_STEP
})

export const nextStep = () => ({
    type: NEXT_STEP
})






