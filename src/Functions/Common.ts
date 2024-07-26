import { ICreateState, ICummunStylingInterface } from "../Interfaces";
import { store } from "../Redux/Store/Store";
import { onValid } from "./Validation";

function getAccessToken() {
  const accessToken = store.getState().auth.accessToken;

  return accessToken
}

const generateStyles = ({ start, end, property, key = 'p' }: ICummunStylingInterface) => {
  const styles: any = {};
  for (let i = start; i <= end; i++) {
    styles[`${key}${i}`] = {
      [property]: i
    };
  }
  return styles;
}

const onChangeValue = (key: string, value: string, setForm: Function, form: any, type: string) => {
  setForm({
    ...form,
    [key]: {
      ...form[key],
      value: value,
      error: onValid(type, value)
    }
  });
}


function getRefreshToken() {
  const refreshToken = store.getState().auth.refreshToken;
  return refreshToken
}

function createState({ value = "" }: any): ICreateState {
  return {
    value: value,
    isValid: false,
    isInvalid: false,
    errorMessage: "",
    successMessage: ""
  }
}


export {
  getRefreshToken,
  generateStyles,
  getAccessToken,
  onChangeValue,
  createState,
}