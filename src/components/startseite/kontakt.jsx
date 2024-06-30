import React from "react";

const kontakt = () => {
  return (
    <div>
      <section id="kontakt">
        <h3>Kontakt</h3>
        <hr />
        <form
          action="https://form.taxi/s/jbb0m8gm"
          method="POST"
          id="kontakt-formular"
        >
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Dein Name"
            required
          />

          <label for="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="Deine E-Mail-Adresse"
            required
          />

          <label for="nachricht">Nachricht:</label>
          <textarea
            id="nachricht"
            name="Nachricht"
            placeholder="Deine Nachricht"
            rows="4"
            required
          ></textarea>

          <div class="checkbox-container">
            <input
              type="checkbox"
              id="datenschutz"
              name="Datenverarbeitung bestätigt"
              value="Ja"
              required
            />
            <label for="datenschutz">
              Ich bestätige, dass ich mit der Verarbeitung meiner Eingaben zum
              Zwecke der Anfragebearbeitung einverstanden bin.
            </label>
          </div>

          <input type="submit" value="Absenden" />
        </form>
      </section>
    </div>
  );
};

export default kontakt;
