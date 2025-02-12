import {useState} from "react";

const initialState = {
    email: "",
    firstPassword: "",
    secondPassword: "",
}
export const useStore = () => {
    const [formValues, setFormValues] = useState(initialState)

    return {
        getFormValues: () => formValues,
        updateFormValues: (name, value) => {
            setFormValues({...formValues, [name]: value})
        }
    }
}