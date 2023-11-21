import "./styles.css";

export default function formatDay(focastTime) {
  return (
    <div>
      <hr />
      <h3 class="text-decoration-underline"> 6-Day Forecast </h3>
      <div className="dailyForecast">
        <div className="weather-forecast-day">
          <div className="weather-forecast-date">Mon</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            className="weather-forecast-icon" alt="weather icon"
          />
          <div className="weather-forecast-temperatures">
            <div className="weather-forecast-temperature">
              <strong>23°</strong>
            </div>
            <div className="weather-forecast-temperature">9°</div>
          </div>
        </div>
        <div className="weather-forecast-day">
          <div className="weather-forecast-date">Tue</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            className="weather-forecast-icon" alt="weather icon"
          />
          <div className="weather-forecast-temperatures">
            <div className="weather-forecast-temperature">
              <strong>23°</strong>
            </div>
            <div className="weather-forecast-temperature">9°</div>
          </div>
        </div>
        <div className="weather-forecast-day">
          <div className="weather-forecast-date">Wed</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            className="weather-forecast-icon" alt="weather icon"
          />
          <div className="weather-forecast-temperatures">
            <div className="weather-forecast-temperature">
              <strong>23°</strong>
            </div>
            <div className="weather-forecast-temperature">9°</div>
          </div>
        </div>
        <div className="weather-forecast-day">
          <div className="weather-forecast-date">Thurs</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            className="weather-forecast-icon" alt="weather icon"
          />
          <div className="weather-forecast-temperatures">
            <div className="weather-forecast-temperature">
              <strong>23°</strong>
            </div>
            <div className="weather-forecast-temperature">9°</div>
          </div>
        </div>
        <div className="weather-forecast-day">
          <div className="weather-forecast-date">Fri</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            className="weather-forecast-icon" alt="weather icon"
          />
          <div className="weather-forecast-temperatures">
            <div className="weather-forecast-temperature">
              <strong>23°</strong>
            </div>
            <div className="weather-forecast-temperature">9°</div>
          </div>
        </div>
        <div className="weather-forecast-day">
          <div className="weather-forecast-date">Sat</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            class="weather-forecast-icon" alt="weather icon"
          />
          <div className="weather-forecast-temperatures">
            <div className="weather-forecast-temperature">
              <strong>23°</strong>
            </div>
            <div className="weather-forecast-temperature">9°</div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}