import { useDispatch, useSelector } from "react-redux"
import Navbar from "./Navbar"
import { getWeatherInfo } from "../../store/getWeatherSlice"
import Content from "./Content"

const Header = () => {
  const dispatch = useDispatch()
  const weatherInfo = useSelector((state) => state.weather.data)
  const changeWeatherHandler = (city) => {
    dispatch(getWeatherInfo(city))
  }
  return (
    <header className="header">
        <Navbar changeWeather={changeWeatherHandler}/>
        { weatherInfo && <Content weather={weatherInfo}/>}
        
    </header>
  )
}

export default Header