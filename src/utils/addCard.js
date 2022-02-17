import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { API } from "./weatherApi";
import { createCard } from "./CreateCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function addCard(query) {
  const containerForCards = document.getElementById("containerForCards");
  const data = await getData(query);
  containerForCards.insertAdjacentHTML("beforeend", createCard(data));
}

async function getData(query) {
  try {
    const { data } = await axios.get(
      `${API.baseURL}weather?q=${query}&units=metric&APPID=${API.key}`
    );
    return data;
  } catch (error) {
    if (!error?.response) throw error;
    return error?.response?.data;
    // {cod: '404', message: 'city not found'}
  }
}
