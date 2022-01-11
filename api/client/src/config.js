import axios from "axios";

export  const axiosInstance = axios.create({
    
    baseUrl : "https://crashcodecca.herokuapp.com/api/course",

});