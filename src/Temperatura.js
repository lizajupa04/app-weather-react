export default function SectionSearch() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 text-center">
          <h1 className="numero-temp">12</h1>
        </div>
        <div className="col-6 text-center">
          <div className="row imagebig">
            <img
              className="image"
              src="https://openweathermap.org/img/wn/${
                forecastDay.weather[0].icon
              }@2x.png"
            />
          </div>
          <div className="row units">
            <a className="celcius">°C </a> |<a className="farehneit">°F</a>
          </div>
        </div>
      </div>
    </div>
  );
}
