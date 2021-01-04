import axios from "axios";
// api call to fill user table
export const getUsers = function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us")
}
