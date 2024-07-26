export function AirProducts({ toggleDetailVisibility, visibleDetail }) {
  return (
    <div>
      <div className="air-products">
        <AirProduct
          name={"panel"}
          toggleDetailVisibility={() => toggleDetailVisibility("airPanels")}
          isVisible={visibleDetail === "airPanels"}
        />
        <AirProduct
          name={"Controllers"}
          toggleDetailVisibility={() => toggleDetailVisibility("Controllers")}
          isVisible={visibleDetail === "Controllers"}
        />
        <AirProduct
          name={"Sensors"}
          toggleDetailVisibility={() => toggleDetailVisibility("Sensors")}
          isVisible={visibleDetail === "Sensors"}
        />
        <AirProduct
          name={"Intercom"}
          toggleDetailVisibility={() => toggleDetailVisibility("Intercom")}
          isVisible={visibleDetail === "Intercom"}
        />
        <AirProduct
          name={"Gateways"}
          toggleDetailVisibility={() => toggleDetailVisibility("Gateways")}
          isVisible={visibleDetail === "Gateways"}
        />
      </div>
      {visibleDetail === "airPanels" && <AirPanel />}
      {visibleDetail === "Controllers" && <AirControls />}
      {visibleDetail === "Sensors" && <AirSensors />}
      {visibleDetail === "Intercom" && <AirIntercom />}
      {visibleDetail === "Gateways" && <AirGateways />}
    </div>
  );
}
function AirProduct({ name, toggleDetailVisibility, isVisible }) {
  return (
    <div
      className={`air-product ${isVisible ? "active" : ""}`}
      onClick={toggleDetailVisibility}
      style={{
        cursor: "pointer",
        opacity: isVisible ? 1 : 0.5,
        transition: "opacity 0.3s",
      }}
    >
      <span>{name}</span>
    </div>
  );
}
function AirPanel() {
  return (
    <div className="air-panel-img">
      <div className="img">
        <img src="images/02-tis-air/Panels/01.jpg" alt=""></img>
      </div>
      <div className="img">
        <img src="images/02-tis-air/Panels/02.jpg" alt=""></img>
      </div>
      <div className="img">
        <img src="images/02-tis-air/Panels/03.jpg" alt=""></img>
      </div>
    </div>
  );
}
function AirControls() {
  return (
    <div className="air-controls-img">
      <div className="img">
        <img src="images/02-tis-air/controllers/01.jpg" alt=""></img>
      </div>
      <div className="img">
        <img src="images/02-tis-air/controllers/acm-switch.jpg" alt=""></img>
      </div>
      <div className="img">
        <img
          src="images/02-tis-air/controllers/air-ir-emitter.jpg"
          alt=""
        ></img>
      </div>
      <div className="img">
        <img src="images/02-tis-air/controllers/air-socket.jpg" alt=""></img>
      </div>
      <div className="img">
        <img
          src="images/02-tis-air/controllers/trv-controller.jpg"
          alt=""
        ></img>
      </div>
    </div>
  );
}
function AirSensors() {
  return (
    <div className="air-sensors-img">
      <div className="img">
        <img
          src="images/02-tis-air/sensors/10-function-sensor.jpg"
          alt=""
        ></img>
      </div>
      <div className="img">
        <img src="images/02-tis-air/sensors/digital-inputs.jpg" alt=""></img>
      </div>
      <div className="img">
        <img src="images/02-tis-air/sensors/motion-sensor.jpg" alt=""></img>
      </div>
    </div>
  );
}
function AirIntercom() {
  return (
    <div className="air-intercom-img">
      <div className="img">
        <img src="images/02-tis-air/intercom/7-touch-screen.jpg" alt=""></img>
      </div>
      <div className="img">
        <img
          src="images/02-tis-air/intercom/air-bus-converter.jpg"
          alt=""
        ></img>
      </div>
      <div className="img">
        <img
          src="images/02-tis-air/intercom/modbus-vrf-upb-gateway.jpg"
          alt=""
        ></img>
      </div>
      <div className="img">
        <img src="images/02-tis-air/intercom/outdoor-bulding.jpg" alt=""></img>
      </div>
      <div className="img">
        <img src="images/02-tis-air/intercom/outdoor-tower.jpg" alt=""></img>
      </div>
      <div className="img">
        <img src="images/02-tis-air/intercom/outdoor-unit.jpg" alt=""></img>
      </div>
    </div>
  );
}
function AirGateways() {
  return (
    <div className="air-gateways-img">
      <div className="img">
        <img src="images/02-tis-air/Gateways/01.jpg" alt=""></img>
      </div>
      <div className="img">
        <img src="images/02-tis-air/Gateways/02.jpg" alt=""></img>
      </div>
    </div>
  );
}
