import React from "react";
import OeSL from "./../../image/Öztürk_Serkan_Lebenslauf1.png"
import OeSL2 from "./../../image/Öztürk_Serkan_Lebenslauf2.png"


const lebenslauf = () => {
  return (
    <section id="lebenslauf">
      <h3>Lebenslauf</h3>
      <div class="bild-container">
        <img
          src=
          {OeSL}
          alt="Lebenslauf Bild 1"
          class="lebenslauf-bild"
        />
        <img
          src={OeSL2}
          alt="Lebenslauf Bild 2"
          class="lebenslauf-bild"
        />
      </div>
    </section>
  );
};

export default lebenslauf;
