import { fetchWeatherAction } from "../Redux/slices/weatherSlices";
export async function search(e, query, dispatch, clearInput) {
  if (e.key === "Enter" || e.target.tagName === "BUTTON") {
    await dispatch(fetchWeatherAction(query));
    clearInput();
  }
}
