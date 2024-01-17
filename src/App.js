import "./App.css";

function App() {
  return (
    <>
      <h1>Hello world</h1>

      <div className="App-contenedor">
        <div className="container">
          <div className="row">
            <div className="col-8 columna">
              <div className="row div1"></div>
              <div className="row">
                <h1 id="city">Puerto Rico</h1>
              </div>
              <div className="row">
                <div className="col-8">
                  <ul>
                    <dt>Clima</dt>
                    <dt>1</dt>
                  </ul>
                </div>
                <div className="col-4">
                  <ul>
                    <dt>1</dt>
                    <dt>1</dt>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <h1>12</h1>
                </div>
                <div className="col-6">units</div>
              </div>
              <div className="row">Btones</div>
            </div>
            <div className="col-4">Hello</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
