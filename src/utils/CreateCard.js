import { dateBuilder } from "./dateBuilder";
import { degreesConverter } from "./degreesConverter";

export function createCard(weather) {
  const date = dateBuilder();
  const celsius = weather.main.temp.toFixed(10);
  const fahrenheit = degreesConverter(celsius);
  if (weather?.main) {
    const card = `
  <div
      class=${Math.round(weather.main.temp) > 16 ? `field` : "cold"}
    >
      <div class="card_head">
        <div>
          <p class="city">${weather.name}, ${weather.sys.country}
          </p>
          <p class="date">${date}</p>
        </div>
        <div class="weather_img_field">
          <img
            class="weather_img"
            src=${`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>${weather.weather[0].main}</p>
        </div>
      </div>

      <div class="card_chart">My charts</div>

      <div class="card_footer">
        <div>
          <p>
            <span class="temperature">
              ${Math.round(weather.main.temp)}
            </span>
            °С | °F
          </p>
          <p class="temperature_feels">
            Feels like: ${Math.round(weather.main.feels_like)} °С
          </p>
        </div>
        <div class="weather_other">
          <p class="weather_other_text">
            Wind: ${Math.round(weather.wind.speed)} m/s
          </p>
          <p class="weather_other_text">
            Humidity: ${weather.main.humidity}%
          </p>
          <p class="weather_other_text">
            Pressure: ${weather.main.pressure}Pa
          </p>
        </div>
      </div>
    </div>
  `;
    return card;
  } else {
    const errorCard = `<div class="field_weather_undef">
  <div class='card_head'>
    <div>
      <p class='city'>City: ---, --</p>
      <p class='date'>${dateBuilder(new Date())}</p>
    </div>
    <div>
      <span>---</span>
      <span>-----</span>
    </div>
  </div>

  <div class="not_found">${weather.message}</div>

  <div class='card_footer'>
    <div>
      <p>
        <span class='temperature'>--</span> °С | °F
      </p>
      <p class='temperature_feels'>Feels like: -- °С </p>
    </div>
    <div class='weather_other'>
      <p class='weather_other_text'>Wind: -- m/s</p>
      <p class='weather_other_text'>Humidity: --%</p>
      <p class='weather_other_text'>Pressure: ---Pa</p>
    </div>
  </div>
</div>`;
    return errorCard;
  }
}
