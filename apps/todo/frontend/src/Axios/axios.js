import axios from "axios"
const instance = axios.create({
    baseURL:"https://mern-todo-j34z.onrender.com/api"
})
export default instance