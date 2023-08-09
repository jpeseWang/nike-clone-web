import axios from "axios";
const instance = axios.create({
  baseURL: "https://64d0647aff953154bb78dbf9.mockapi.io",
  headers: { "X-Custom-Header": "foobar" },
});
export default instance;

const fetchAllShoes = () => {
  return instance.get("/Nikeclone");
};

export { fetchAllShoes };
