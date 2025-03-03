import axios from "axios";
import { Alert } from "react-native";

const api = axios.create({
  baseURL: "http://192.168.15.158:3003",
  timeout: 10000,
});

function HandleError(error) {
  console.log(error);
  if (error.response?.data.error) {
    Alert.alert(error.response.data.error);
  } else {
    Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
  }
}
export { api, HandleError };
