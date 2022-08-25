import { BACKEND_URL } from "../constants/appConfig"

export const fetchTasks = async () => {
    const url = BACKEND_URL + "/tasks";


    const res = await fetch(url);
    const data = await res.json();

    return data;
}

export const fetchTask = async (id) => {
    const url = BACKEND_URL + `/tasks/${id}`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

export const createTask = async (task) => {
    const url = BACKEND_URL + `/tasks/`;
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(task)
    });

    const data = await res.json();
    return data;
}

export const removeTask = async (id) => {
    const url = BACKEND_URL + `/tasks/${id}`;
    const res = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        }
    });

    if (res.status === 200) {
        return true;
    } else {
        return false;
    }
}

export const setTaskToToggle = async (id) =>{
    const taskToToggle = await fetchTask(id);
    const updatedTask = {...taskToToggle, reminder : !taskToToggle.reminder};

    
    const url = BACKEND_URL + `/tasks/${id}`;
    const res = await fetch(url, {
        method: "PUT",
        headers:{
            "Content-type" : "application/json"
        },
        body: JSON.stringify(updatedTask)
    });
    const data = await res.json();
    return data;
}