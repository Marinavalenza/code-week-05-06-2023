export const provinceWeather = (data) => {
  // console.log(data); creo tutti gli elementi da appendere al wrapperEl
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const pEl = document.createElement("h2");
  const detailHumEl = document.createElement("h4");
  const detailFeelEl = document.createElement("h4");
  const detailWindEl = document.createElement("h4");

  pEl.textContent = `${data.main.temp}° Degree`;
  detailHumEl.textContent = `${data.main.humidity}% Humidity`;
  detailFeelEl.textContent = `${data.main.feels_like}° Feels like`;
  detailWindEl.textContent = `${data.wind.speed} ~ Wind speed`;
  wrapperEl.className = "textStyle";
  // console.log(data);
  imgEl.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  wrapperEl.append(imgEl, pEl, detailHumEl, detailFeelEl, detailWindEl);
  return wrapperEl;
};

export const optionGen = (province) => {
  const option = document.createElement("option");
  option.textContent = province.name;
  option.setAttribute("value", province.value);
  return option;
};
