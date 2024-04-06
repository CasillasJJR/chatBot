import React, {useState} from "react";

interface Props<T> {
    initialData: T,
}

export const useForm = <T>({ initialData }: Props<T>) => {

    const [dataForm, setDataForm] = useState<T>(initialData)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataForm(prev=>({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }


    return {
        handleInputChange,
        dataForm
    }
}