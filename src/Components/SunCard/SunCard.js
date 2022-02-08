import s from "./SunCard.module.css";
import { dateBuilder } from "../../utils/dateBuilder";

export default function SunCard() {
  return (
    <div className={`${s.field} + ${s}`}>
      <div className={s.card_head}>
        <div>
          <p className={s.city}>Cherkasy, UA</p>
          <p className={s.date}>{dateBuilder(new Date())}</p>
        </div>
        <div>
          <span>IMGSunny</span>
          <span>Sunny</span>
        </div>
      </div>

      <div className={s.card_chart}>My charts</div>

      <div className={s.card_footer}>
        <div>
          <p>
            <span className={s.temperature}>16</span> °С | °F
          </p>
          <p className={s.temperature_feels}>Feels like: +22 °С </p>
        </div>
        <div className={s.weather_other}>
          <p className={s.weather_other_text}>Wind: 16 m/s</p>
          <p className={s.weather_other_text}>Humidity: 13%</p>
          <p className={s.weather_other_text}>Pressure: 600Pa</p>
        </div>
      </div>
    </div>
  );
}
