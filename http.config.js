import axios from "axios";

const httpMethod=axios.create({
    baseURL:"http://127.0.0.1:3980/",
    headers:{"Content-Type":"application/json"}
});

export default httpMethod;