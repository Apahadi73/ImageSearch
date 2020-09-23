import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID Fe_ThcUkEnFJseDukkJW6U5fQWtO1R_JtqoKxd0YHwc",
  },
});
