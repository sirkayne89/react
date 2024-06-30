import React from 'react'
import Berwerbungsfoto from './../../image/Bewerbungsfoto.jpg'

const hauptbereich = () => {
  return (
      <section id="ueber-mich">
        <h3>Über mich</h3>
        <img
          src={Berwerbungsfoto}
          alt="Profilbild"
          class="bewerbungsfoto"
        />
        <p class="ueber-mich-text">
          Hallo, mein Name ist Serkan Öztürk und ich bin 34 Jahre alt. Schon in
          meiner Jugend habe ich eine tiefe Begeisterung für Technik entwickelt.
          Als Mitglied des Computer Club House in Esslingen, dem zweiten seiner
          Art weltweit, habe ich früh meine Leidenschaft für Technologie und
          Innovation entdeckt, was mich dazu inspiriert hat, eine Karriere als
          Softwareentwickler einzuschlagen. Mein Weg führte mich zur Umschulung
          zum Fachinformatiker für Anwendungsentwicklung bei Comcave in
          Stuttgart, wo ich mir wichtige Grundlagen in Microsoft SQL, Java und
          JavaScript aneignete. Zusätzlich habe ich mein Wissen durch private
          Kurse in C#, HTML und CSS weiter vertieft. Der nächste Schritt in
          meiner Karriere ist ein Praktikum, um meine Umschulung erfolgreich
          abzuschließen und das Gelernte in der Praxis umzusetzen. Ich bringe
          nicht nur solide technische Kenntnisse mit, sondern auch eine positive
          Einstellung und die Bereitschaft, stets Neues zu lernen. Mein Talent
          für Problemlösungen und mein Interesse an anspruchsvollen Projekten
          machen mich zu einem idealen Kandidaten für ein Praktikum. Ich bin ein
          überzeugter Teamplayer, der gerne mit anderen an Projekten arbeitet.
          Meiner Meinung nach fördert Teamarbeit kreative Ideen und verbessert
          das Gesamtergebnis. Ich freue mich darauf, meine Fähigkeiten in einem
          Praktikum unter Beweis zu stellen und dabei gleichzeitig wertvolle
          praktische Erfahrungen zu sammeln. Wenn Sie Interesse an einem
          Gespräch haben, können Sie mich gerne über das Kontaktformular
          kontaktieren. Ich freue mich darauf, von Ihnen zu hören.
        </p>
      </section>
  )
}

export default hauptbereich