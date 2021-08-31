import "./styles.scss";

function Header({}) {
  function dateFunction(d) {
    let months = [
      "Janvier",
      "Fevrier",
      "Mars",
      "Avril",
      "Mail",
      "Juin",
      "Juillet",
      "Aout",
      "Septembre",
      "Octobre",
      "Novembre",
      "Decembre",
    ];
    let days = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div className="header__container">
      <h1 className="header__container--country">Paris, FR</h1>
      <h2 className="header__container--date">{dateFunction(new Date())}</h2>
    </div>
  );
}

export default Header;
