import { useState } from "react"

const Weather = ({weatherInfo}) => {
    const [isCelsius, setIsCelsius] = useState(true)

const  changeCelsius = (tempK) => {

     return (tempK - 273.15).toFixed(0)
    }
const changeFahrenheit = (tempK) => {

    return (((tempK - 273.15)*9/5) + 32).toFixed(0)
}
const handleChangeUnitTemp = () => {
    setIsCelsius(!isCelsius)

}

const tempChange = isCelsius ? changeCelsius(weatherInfo?.main.temp) : changeFahrenheit(weatherInfo?.main.temp)

const changeTextButtom = isCelsius ? "Cambiar a F" : "Cambiar a C";

    
    return (
        /*Contenedor principal*/
        <section className="text-center">
            <h2 className="text-4xl">{weatherInfo?.name} </h2>
            {/*Contenedor de secciones superior e inferior*/}
            <section className="grid gap-4 sm:grid-cols-[auto_auto]" >
                {/*seccion superior*/}
                <section className="bg-white/40 p-2 rounded-2xl grid grid-cols-2 items-center ">
                    <h4 className="col-span-2 text-2xl">{weatherInfo?.weather[0].description}</h4>
                    <span className="text-6xl">{tempChange}°{isCelsius ? "C": "F"}</span>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                    </div>
                </section>
                {/*seccion inferior*/}
                <section className="bg-white/40 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1">
                    <article className="flex gap-2 items-center">
                        <div>
                            <img src={"/images/Wind.png"} alt="" />
                        </div>
                        <span>{weatherInfo?.wind.speed}m/s</span>
                    </article> 
                    <article className="flex gap-2 items-center">
                        <div>
                            <img src={"/images/humidity.png"} alt="" />
                        </div>
                        <span>{weatherInfo?.main.humidity}%</span>
                    </article>
                    <article className="flex gap-2 items-center">
                    <div>
                         <img src={"/images/presure.png"} alt="" />
                     </div>
                        <span>{weatherInfo?.main.pressure}hPa</span>
                    </article>
                    
                </section>
            </section>
            <section>
                <button onClick={handleChangeUnitTemp}
                className="mt-4 bg-white/40 p-1 rounded-2xl">{changeTextButtom}°</button>
            </section>


        </section>
    )
}

export default Weather