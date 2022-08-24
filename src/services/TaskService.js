import { BACKEND_URL } from "../constants/appConfig"

export const fetchTasks = async () => {
    const url = BACKEND_URL + "/tasks";
    
    
    const res = await fetch( url );
    const data = await res.json();

    return data;
}

export const fetchTask = async (id) => {
    const url = BACKEND_URL + `/tasks/${id}`;
    
    const res = await fetch( url );
    const data = await res.json();

    return data;
}