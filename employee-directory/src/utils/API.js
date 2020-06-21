import axios from "axios";

export default {
  // Gets all Users
  getUsers: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
  // Gets the one User with the given id
  getUser: function (id) {
    return axios.get("https://randomuser.me/api/?results=200&nat=us" + id);
  },
  // Deletes the User with the given id
  deleteUser: function (id) {
    return axios.delete("https://randomuser.me/api/?results=200&nat=us" + id);
  },
  // Saves a User to the database
  saveUser: function (UserData) {
    return axios.post("https://randomuser.me/api/?results=200&nat=us", UserData);
  },
  // Saves a User to the database
  updateUser: function (id, UserData) {
    return axios.put("https://randomuser.me/api/?results=200&nat=us" + id, UserData);
  }
};
