import axios from "axios";

export  const axiosInstance = axios.create({
    
    baseUrl : "https://crashcodeacademy.herokuapp.com/api/course",

});