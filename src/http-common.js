import axios from "axios"; // Promise based HTTP client RESTful API

export default axios.create({
    baseURL:"https://todolist-react-mysql.herokuapp.com/api/",
    headers: {
        "Content-type": "application/json"
    }
});
