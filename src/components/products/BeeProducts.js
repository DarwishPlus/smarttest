export function BeeProducts({ toggleDetailVisibility, visibleDetail }) {
  return (
    <div>
      <div className="bee-products">
        <BeeProduct
          name={"Wall Switch"}
          toggleDetailVisibility={() => toggleDetailVisibility("beeWallSwitch")}
          isVisible={visibleDetail === "beeWallSwitch"}
        />
        <BeeProduct
          name={"Controller"}
          toggleDetailVisibility={() => toggleDetailVisibility("beeController")}
          isVisible={visibleDetail === "beeController"}
        />
        <BeeProduct
          name={"Security/Sensor"}
          toggleDetailVisibility={() =>
            toggleDetailVisibility("beeSecuritySensor")
          }
          isVisible={visibleDetail === "beeSecuritySensor"}
        />
        <BeeProduct
          name={"Lights"}
          toggleDetailVisibility={() => toggleDetailVisibility("beeLights")}
          isVisible={visibleDetail === "beeLights"}
        />
        <BeeProduct
          name={"Gateway"}
          toggleDetailVisibility={() => toggleDetailVisibility("beeGateway")}
          isVisible={visibleDetail === "beeGateway"}
        />
      </div>
      {visibleDetail === "beeWallSwitch" && <BeeWallSwitch />}
      {visibleDetail === "beeController" && <BeeController />}
      {visibleDetail === "beeSecuritySensor" && <BeeSecuritySensor />}
      {visibleDetail === "beeLights" && <BeeLights />}
      {visibleDetail === "beeGateway" && <BeeGateway />}
    </div>
  );
}
function BeeProduct({ name, toggleDetailVisibility, isVisible }) {
  return (
    <div
      className={`bee-product ${isVisible ? "active" : ""}`}
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
function BeeWallSwitch() {
  return (
    <div className="bee-wall-switch">
      <div className="img">
        <img src="images/03-tis-bee/wall-switch/Dion Switch.jpg" alt=""></img>
      </div>
      <div className="img">
        <img
          src="images/03-tis-bee/wall-switch/Dion Wall Remote.jpg"
          alt=""
        ></img>
      </div>
      <div className="img">
        <img
          src="images/03-tis-bee/wall-switch/dion-curtain-switch.jpg"
          alt=""
        ></img>
      </div>
      <div className="img">
        <img
          src="images/03-tis-bee/wall-switch/venera -zigbee-switch.jpg"
          alt=""
        ></img>
      </div>
    </div>
  );
}
function BeeController() {
  return (
    <div className="bee-controller">
      <div className="img">
        <img src="images/03-tis-bee/controller/Dimmer Module.jpg" alt=""></img>
      </div>
      <div className="img">
        <img src="images/03-tis-bee/controller/Plug UK-EU.jpg" alt=""></img>
      </div>
      <div className="img">
        <img src="images/03-tis-bee/controller/RGBW Driver.jpg" alt=""></img>
      </div>
      <div className="img">
        <img src="images/03-tis-bee/controller/Shutter Module.jpg" alt=""></img>
      </div>
      <div className="img">
        <img
          src="images/03-tis-bee/controller/Switch Module 1-2 gang.jpg"
          alt=""
        ></img>
      </div>
      <div className="img">
        <img
          src="images/03-tis-bee/controller/Valve Gas-water.jpg"
          alt=""
        ></img>
      </div>
      <div className="img">
        <img src="images/03-tis-bee/controller/Zigbee Motor.jpg" alt=""></img>
      </div>
    </div>
  );
}
function BeeSecuritySensor() {
  return (
    <div className="bee-security-sensor">
      <div className="img">
        <img src="images/03-tis-bee/security-sensor/CO Sensor.jpg" alt=""></img>
      </div>
      <div className="img">
        <img
          src="images/03-tis-bee/security-sensor/door-contact.jpg"
          alt=""
        ></img>
      </div>
      <div className="img">
        <img
          src="images/03-tis-bee/security-sensor/Gas Sensor.jpg"
          alt=""
        ></img>
      </div>
      <div className="img">
        <img src="images/03-tis-bee/security-sensor/Key Fob.jpg" alt=""></img>
      </div>
      <div className="img">
        <img
          src="images/03-tis-bee/security-sensor/PIR Sensor.jpg"
          alt=""
        ></img>
      </div>
      <div className="img">
        <img src="images/03-tis-bee/security-sensor/Siren.jpg" alt=""></img>
      </div>
      <div className="img">
        <img
          src="images/03-tis-bee/security-sensor/Smoke Detector.jpg"
          alt=""
        ></img>
      </div>
      <div className="img">
        <img
          src="images/03-tis-bee/security-sensor/Water Leak.jpg"
          alt=""
        ></img>
      </div>
    </div>
  );
}
function BeeLights() {
  return (
    <div className="bee-lights">
      <div className="img">
        <img src="images/03-tis-bee/light/RGBW Bulb.jpg" alt=""></img>
      </div>
    </div>
  );
}
function BeeGateway() {
  return (
    <div className="bee-gateway">
      <div className="img">
        <img src="images/03-tis-bee/gateway/Zigbee-BUS Hub.jpg" alt=""></img>
      </div>
    </div>
  );
}
