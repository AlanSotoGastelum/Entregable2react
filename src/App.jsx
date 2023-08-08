
import './App.css'
import axios from 'axios'
import Weather from "./components/Weather"
import { useEffect, useState } from 'react'


const BackGrounds = {
  "01d": "bg-[url(/images/clearSky.jpg)]",
  "01n": "bg-[url(/images/clearskynigth.jpg)]",   
  "02d": "bg-[url(/images/fewClouds.jpg)]",
  "02n": "bg-[url(/images/fewcloudsnigth.jpg)]",
  "03d": "bg-[url(/images/scatteredclouds.jpg)]",
  "03n": "bg-[url(/images/scatteredcloudsnigth.jpg)]",
  "04d": "bg-[url(/images/brokenclouds.jpg)]",
  "04n": "bg-[url(/images/brokencloudsnigth.jpg)]",
  "09d": "bg-[url(/images/showerrain.jpg)]",
  "09n": "bg-[url(/images/showerrainnigth.jpg)]",
  "10d": "bg-[url(/images/Rain.jpg)]",
  "10n": "bg-[url(/images/rainnigth.jpg)]",
  "11d": "bg-[url(/images/thunderStorm.jpg)]",
  "11n": "bg-[url(/images/thunderStormnigth.jpg)]",
  "13d": "bg-[url(/images/snow.jpg)]",
  "13n": "bg-[url(/images/snownigth.jpg)]",
  "50d": "bg-[url(/images/mist.jpg)]",
  "50n": "bg-[url(/images/mistnigth.jpg)]",
 } 




function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)
  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
      
   const API_KEY = "ad673d0dcb35c9ce3712c047f3292b13"
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
   
   axios.get(url)
   .then(({data}) => setWeatherInfo(data))
   .catch((err) => setWeatherInfo(err))
   
       
   
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
    }, [])
  
    
  

  return (
    <main className={`bg-black min-h-screen text-black bg- no-repeat bg-cover font-lato flex justify-center items-center px-4 ${BackGrounds[weatherInfo?.weather[0].icon]}`} >
     
     
      <Weather weatherInfo={weatherInfo} />
    </main>
  )
}

export default App
