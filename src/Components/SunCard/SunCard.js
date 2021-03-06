import s from "./SunCard.module.css";
import { dateBuilder } from "../../utils/dateBuilder";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useInterval } from "../../utils/useInterval";

export default function SunCard() {
  const [date, setDate] = useState(dateBuilder());
  const state = useSelector((state) => state);
  const { weather } = state.weatherReducer;

  useInterval(() => {
    setDate(dateBuilder());
  }, 20000);
  return (
    <>
      {weather?.main ? (
        <div
          className={
            Math.round(weather.main.temp) > 16
              ? `${s.field}`
              : `${s.field} + ${s.cold}`
          }
        >
          <div className={s.card_head}>
            <div>
              <p className={s.city}>
                {weather.name}, {weather.sys.country}
              </p>
              <p className={s.date}>{date}</p>
            </div>
            <div className={s.weather_img_field}>
              <img
                className={s.weather_img}
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
              />
              <p>{weather.weather[0].main}</p>
            </div>
          </div>

          <div className={s.card_chart}>My charts</div>

          <div className={s.card_footer}>
            <div>
              <p>
                <span className={s.temperature}>
                  {Math.round(weather.main.temp)}
                </span>{" "}
                °С | °F
              </p>
              <p className={s.temperature_feels}>
                Feels like: {Math.round(weather.main.feels_like)} °С{" "}
              </p>
            </div>
            <div className={s.weather_other}>
              <p className={s.weather_other_text}>
                Wind: {Math.round(weather.wind.speed)} m/s
              </p>
              <p className={s.weather_other_text}>
                Humidity: {weather.main.humidity}%
              </p>
              <p className={s.weather_other_text}>
                Pressure: {weather.main.pressure}Pa
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${s.field_weather_undef}`}>
          <div className={s.card_head}>
            <div>
              <p className={s.city}>City: ---, --</p>
              <p className={s.date}>{dateBuilder(new Date())}</p>
            </div>
            <div>
              <span>---</span>
              <span>-----</span>
            </div>
          </div>

          <div className={s.card_chart}>НИЧЕГО НЕ НАЙДЕНО ПО ЗАПРОСУ</div>

          <div className={s.card_footer}>
            <div>
              <p>
                <span className={s.temperature}>--</span> °С | °F
              </p>
              <p className={s.temperature_feels}>Feels like: -- °С </p>
            </div>
            <div className={s.weather_other}>
              <p className={s.weather_other_text}>Wind: -- m/s</p>
              <p className={s.weather_other_text}>Humidity: --%</p>
              <p className={s.weather_other_text}>Pressure: ---Pa</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
