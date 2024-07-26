export function BusProducts({ toggleDetailVisibility, visibleDetail }) {
  return (
    <div>
      <div className="bus-products">
        <BusProduct
          name="Panels"
          toggleDetailVisibility={() => toggleDetailVisibility("panels")}
          isVisible={visibleDetail === "panels"}
        />
        <BusProduct
          name="Hotel Interface"
          toggleDetailVisibility={() =>
            toggleDetailVisibility("hotelInterface")
          }
          isVisible={visibleDetail === "hotelInterface"}
        />
        <BusProduct
          name="Screens"
          toggleDetailVisibility={() => toggleDetailVisibility("screens")}
          isVisible={visibleDetail === "screens"}
        />
        <BusProduct
          name="Dimmers"
          toggleDetailVisibility={() => toggleDetailVisibility("dimmers")}
          isVisible={visibleDetail === "dimmers"}
        />
        <BusProduct
          name="Relays"
          toggleDetailVisibility={() => toggleDetailVisibility("relays")}
          isVisible={visibleDetail === "relays"}
        />
        <BusProduct
          name="Sensors"
          toggleDetailVisibility={() => toggleDetailVisibility("sensors")}
          isVisible={visibleDetail === "sensors"}
        />
        <BusProduct
          name="Other"
          toggleDetailVisibility={() => toggleDetailVisibility("other")}
          isVisible={visibleDetail === "other"}
        />
      </div>

      {visibleDetail === "panels" && <Panels />}
      {visibleDetail === "hotelInterface" && <HotelInterface />}
      {visibleDetail === "screens" && <Screens />}
      {visibleDetail === "dimmers" && <Dimmers />}
      {visibleDetail === "relays" && <Relays />}
      {visibleDetail === "sensors" && <Sensors />}
      {visibleDetail === "other" && <Other />}
    </div>
  );
}
function BusProduct({ name, toggleDetailVisibility, isVisible }) {
  return (
    <div
      className={`bus-product ${isVisible ? "active" : ""}`}
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
function Panels() {
  return (
    <>
      <div className="panels-img">
        <img src="images/Panels/01.jpg" alt="Panel 1"></img>
        <img src="images/Panels/02.jpg" alt="Panel 2"></img>
        <img src="images/Panels/03.jpg" alt="Panel 3"></img>
      </div>
    </>
  );
}
function HotelInterface() {
  return (
    <>
      <div className="hotel-interface-img">
        <img src="images/Hotel-Interface/01.jpg" alt="Hotel Interface 1"></img>
        <img src="images/Hotel-Interface/02.jpg" alt="Hotel Interface 2"></img>
        <img src="images/Hotel-Interface/03.jpg" alt="Hotel Interface 3"></img>
        <img src="images/Hotel-Interface/04.jpg" alt="Hotel Interface 4"></img>
        <img src="images/Hotel-Interface/05.jpg" alt="Hotel Interface 5"></img>
      </div>
    </>
  );
}
function Screens() {
  return (
    <>
      <div className="screens-img">
        <img src="images/Screens/01.jpg" alt="Screen 1"></img>
        <img src="images/Screens/02.jpg" alt="Screen 2"></img>
        <img src="images/Screens/03.jpg" alt="Screen 3"></img>
        <img src="images/Screens/04.jpg" alt="Screen 4"></img>
        <img src="images/Screens/05.jpg" alt="Screen 5"></img>
      </div>
    </>
  );
}
function Dimmers() {
  return (
    <>
      <div className="dimmers-img">
        <img src="images/Dimmers/01.jpg" alt="Dimmer 1"></img>
        <img src="images/Dimmers/02.jpg" alt="Dimmer 2"></img>
        <img src="images/Dimmers/03.jpg" alt="Dimmer 3"></img>
        <img src="images/Dimmers/04.jpg" alt="Dimmer 4"></img>
        <img src="images/Dimmers/05.jpg" alt="Dimmer 5"></img>
        <img src="images/Dimmers/06.jpg" alt="Dimmer 6"></img>
      </div>
    </>
  );
}
function Relays() {
  return (
    <>
      <div className="relays-img">
        <img src="images/Relays/01.jpg" alt="Relay 1"></img>
        <img src="images/Relays/02.jpg" alt="Relay 2"></img>
        <img src="images/Relays/03.jpg" alt="Relay 3"></img>
        <img src="images/Relays/04.jpg" alt="Relay 4"></img>
      </div>
    </>
  );
}
function Sensors() {
  return (
    <>
      <div className="sensors-img">
        <img src="images/Sensors/01.jpg" alt="Sensor 1"></img>
        <img src="images/Sensors/02.jpg" alt="Sensor 2"></img>
        <img src="images/Sensors/03.jpg" alt="Sensor 3"></img>
        <img src="images/Sensors/04.jpg" alt="Sensor 4"></img>
        <img src="images/Sensors/05.jpg" alt="Sensor 5"></img>
      </div>
    </>
  );
}
function Other() {
  return (
    <>
      <div className="other-img">
        <div className="img">
          <img src="images/Other/01.jpg" alt="Other 1"></img>
          <span className="prod-text">test</span>
        </div>

        <div className="img">
          <img src="images/Other/02.jpg" alt="Other 2"></img>
          <span className="prod-text">test</span>
        </div>

        <div className="img">
          <img src="images/Other/03.jpg" alt="Other 3"></img>
          <span className="prod-text">test</span>
        </div>
        <div className="img">
          <img src="images/Other/04.jpg" alt="Other 4"></img>
          <span className="prod-text">test</span>
        </div>
        <div className="img">
          <img src="images/Other/05.jpg" alt="Other 5"></img>
          <span className="prod-text">test</span>
        </div>
        <div className="img">
          <img src="images/Other/06.jpg" alt="Other 6"></img>
          <span className="prod-text">test</span>
        </div>
        <div className="img">
          <img src="images/Other/07.jpg" alt="Other 7"></img>
          <span className="prod-text">test</span>
        </div>
      </div>
    </>
  );
}
