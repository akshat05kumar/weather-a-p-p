var icon = document.getElementById('icon');
let cityname = document.getElementById('cityname');

let temperature = document.getElementById('temperature');
let forecast = document.getElementById('forecast');


const cityNameInput = document.getElementById('cityNameInput');
const submit = document.getElementById('submit');

submit.addEventListener('click',(e)=>{

  e.preventDefault();
  fetchWeather(cityNameInput.value);
  cityNameInput.value='';

});

const fetchWeather= async (city)=>{
   
   try{
     const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=303b38624dfeceeb29797d48ab9febcb
     `,{mode:"cors"}
     );

     const weather_data= await weather.json();
     console.log(weather_data);
     const place =weather_data.name;
     const temp =weather_data.main.temp;
     const main =weather_data.weather[0].description;
     const iconId =weather_data.weather[0].icon;

     cityname.textContent=place;
     temperature.textContent=Math.round(temp);
     forecast.textContent=main;
     icon.src=`http://openweathermap.org/img/wn/${iconId}@2x.png`;
   }
catch(error){
  alert('city not found!')
}
};
