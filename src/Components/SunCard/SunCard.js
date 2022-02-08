import s from "./SunCard.module.css";
import { dateBuilder } from "../../utils/dateBuilder";
import { useState } from "react";

export default function SunCard({ weather = null }) {
  const [date, setDate] = useState(dateBuilder());
  console.log("weather:", weather);
  console.log(typeof weather);
  setInterval(() => {
    setDate(dateBuilder());
  }, 60000);
  return (
    <>
      {weather != null ? (
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
            <div>
              <span>IMG</span>
              <span>{weather.weather[0].main}</span>
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
        <div className={`${s.field} + ${s}`}>
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
