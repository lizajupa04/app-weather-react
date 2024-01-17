import "./App.css";
export default function City() {
  return (
    <div className="container city">
      <div className="row">
        <h1 className="tit-city">Puerto Rico</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <lu>
            <dt className="clima1">Clima</dt>
            <dt className="clima2">Tusday 06:40 AM</dt>
            <dt className="clima3">Few Clouds</dt>
          </lu>
        </div>
        <div className="col-6">
          <dt className="humity1">Humity: 80%</dt>
          <dt className="humity2">Wind: 7 km/h</dt>
        </div>
      </div>
    </div>
  );
}
