import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "73b4cbbe806f6db1d1b753b80133991b",
    language: "ko-KR",
  },
});

export default instance;
