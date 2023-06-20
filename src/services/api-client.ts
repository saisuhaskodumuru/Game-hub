import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1bf160e5ba734563821df2720b118d8d",
  },
});