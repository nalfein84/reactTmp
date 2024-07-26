
interface IKeys {
    [key: string]: string;
}
interface ICummunStylingInterface {
    start: number
    end: number
    property: string
    key?: string
}
interface ICreateState {
    value: string,
    isValid: boolean,
    isInvalid: boolean,
    errorMessage: string,
    successMessage: string
}
enum EValid {
    start = 0,
    valid = 1,
    notValid = 2,
}
export type { IKeys, ICummunStylingInterface, ICreateState, EValid }