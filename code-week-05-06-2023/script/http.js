export const GET = async (province) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${province}&appid=6395dcd5c98aa1b9f002d708f4d46ebd&units=metric`
  );
  const data = await res.json();
  return data;
};
// ho creato la GET modificando il link per prendere le città
