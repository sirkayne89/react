import React from 'react'
import BD from './../../image/bewerbung deckblatt.jpg'
import AD from './../../image/Arbeitszeugniss_Daimler_(2).png'
import Small from './../../image/small_0.png'
 

const unterlagen = () => {
  return (
    <section id="unterlagen">
        <h3>Unterlagen</h3>
        <div class="bild-container">
          <div class="unterlagen-item">
            <a href="galerie.html" target="_blank">
              <img
                src={BD}
                alt="deckblatt"
                class="unterlagen-bild"
              />
              <p>Lebenslauf</p>
            </a>
          </div>
          <div class="unterlagen-item">
            <img
              src={AD}
              alt="Referenzschreiben"
              class="unterlagen-bild"
            />
            <p>Referenzschreiben</p>
          </div>
          <div class="unterlagen-item">
            <img
              src={Small}
              alt="Teilnahmebescheinigung"
              class="unterlagen-bild"
            />
            <p>Teilnahmebescheinigung</p>
          </div>
        </div>
      </section>
  )
}

export default unterlagen