import axios from "axios";
import { dateBuilder } from "./dateBuilder";
import { API } from "./weatherApi";
import s from "../Components/SunCard/SunCard.module.css";
import { createCard } from "./CreateCard";

export async function addCard(query) {
  const containerForCards = document.getElementById("containerForCards");
  //   console.log(`${as}`);
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
    console.log(error);
  }
}
