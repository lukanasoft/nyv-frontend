import axios from "axios";
class BaseService {
    constructor() {
        this.baseUrl = process.env.VUE_APP_BACKEND_URL
    }
    get(url) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
        return axios.get(this.baseUrl + url);
    }
    
    post(url, data) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
        return axios.post(this.baseUrl + url, data);
    }
    
    put(url, data) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
        return axios.put(this.baseUrl + url, data);
    }
    
    delete(url) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
        return axios.delete(this.baseUrl + url);
    }
}

export default BaseService;