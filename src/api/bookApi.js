// api/bookApi.js
import axios from "axios";

export default axios.create({
    baseUrl: "https://www.googleapis.com/books/v1/volumes"
})