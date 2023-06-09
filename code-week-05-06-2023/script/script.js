import { GET } from "./http.js";
import { provinceWeather, optionGen } from "./fn.js";
const rootEl = document.querySelector("div");
const contentEl = document.createElement("div");
const agrigento_province = [
  {
    name: "Agrigento",
    value: "agrigento",
  },
  {
    name: "Sciacca",
    value: "sciacca",
  },
  {
    name: "Licata",
    value: "licata",
  },
  {
    name: "Canicattì",
    value: "canicatti",
  },
  {
    name: "Favara",
    value: "favara",
  },
  {
    name: "Palma" + " di" + " Montechiaro",
    value: "palma+di+montechiaro",
  },
  {
    name: "Ribera",
    value: "ribera",
  },
  {
    name: "Porto" + " Empedocle",
    value: "porto+empedocle",
  },
  {
    name: "Raffadali",
    value: "raffadali",
  },
  {
    name: "Menfi",
    value: "menfi",
  },
  {
    name: "Ravanusa",
    value: "ravanusa",
  },
  {
    name: "Campobello" + " di" + " Licata",
    value: "campobello+di+licata",
  },
  {
    name: "Aragona",
    value: "aragona",
  },
  {
    name: "Racalmuto",
    value: "racalmuto",
  },
  {
    name: "Casteltermini",
    value: "casteltermini",
  },
  {
    name: "San" + " Giovanni" + " Gemini",
    value: "san+giovanni+gemini",
  },
  {
    name: "Naro",
    value: "naro",
  },
  {
    name: "Lampedusa" + " e" + " Linosa",
    value: "lampedusa+linosa",
  },
  {
    name: "Santa" + " Margherita" + " di" + " Belice",
    value: "santa+margherita+belice",
  },
  {
    name: "Cammarata",
    value: "cammarata",
  },
  { name: "Sambuca" + " di" + " Sicilia", value: "sambuca+di+sicilia" },
  {
    name: "Grotte",
    value: "grotte",
  },
  {
    name: "Santo" + " Stefano" + " Quisquina",
    value: "santo+stefano",
  },
  {
    name: "Realmonte",
    value: "realmonte",
  },
  {
    name: "Siculiana",
    value: "siculiana",
  },
  {
    name: "Cattolica" + " Eraclea",
    value: "cattolica+eraclea",
  },
  {
    name: "Bivona",
    value: "bivona",
  },
  {
    name: "Caltabellotta",
    value: "caltabellotta",
  },
  {
    name: "Cianciana",
    value: "cianciana",
  },
  {
    name: "San" + " Biagio" + " Platani",
    value: "san+biagio,",
  },
  {
    name: "Montevago",
    value: "montevago",
  },
  {
    name: "Alessandria" + " della" + " Rocca",
    value: "alessandria",
  },
  {
    name: "Castrofilippo",
    value: "castrofilippo",
  },
  {
    name: "Burgio",
    value: "burgio",
  },
  {
    name: "Montallegro",
    value: "montallegro",
  },
  {
    name: "Santa" + " Elisabetta",
    value: "santa+elisabetta",
  },
  {
    name: "Camastra",
    value: "camastra",
  },
  {
    name: "Lucca" + " Sicula",
    value: "lucca+sicula",
  },
  {
    name: "Villafranca" + " Sicula",
    value: "villafranca",
  },
  {
    name: "Calamonaci",
    value: "calamonaci",
  },
  {
    name: "Sant'Angelo" + " Muxaro",
    value: "muxaro",
  },
  {
    name: "Joppolo" + " Giancaxio",
    value: "joppolo",
  },
  {
    name: "Comitini",
    value: "comitini",
  },
];

agrigento_province.forEach((province) =>
  GET(province.name).then((data) => data)
);
// creo select e aggiungo option per chiedere di scegliere la città
const selectEl = document.createElement("select");
const generalOption = document.createElement("option");

generalOption.setAttribute("value", "choose town");
generalOption.textContent = "Choose town";

// appendo al div root principale
rootEl.append(selectEl, contentEl);
selectEl.appendChild(generalOption);
agrigento_province.forEach((province) => {
  selectEl.append(optionGen(province));
});

// aggiungo evento di change per cambiare la città
selectEl.addEventListener("change", (e) => {
  GET(e.target.value).then((data) => {
    contentEl.textContent = "";
    contentEl.append(provinceWeather(data));
  });

  // console.log(e.target.value);
});
// richiamo elemento in statico con qS per cambiare data in automatico
const dateEl = document.querySelector("p");

dateEl.textContent = new Date().toLocaleString("en-us", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
