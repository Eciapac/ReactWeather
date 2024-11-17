import temp from '../../assets/images/temp.svg'
import press from '../../assets/images/davleniya.dec.svg'
import humidity from '../../assets/images/yomgir.svg'
import wind from '../../assets/images/wind.svg'

const Content = ({weather}) => {
  const weatherData = weather?.weatherData
  const weatherImg = weatherData?.current.weather[0].icon
  function getDate(offset) {
    const date = new Date(new Date().getTime() + offset * 1000)
    const hours = ('0' + date.getUTCHours()).slice(-2)
    const minutes = ('0' + date.getUTCMinutes()).slice(-2)
    return `${hours}:${minutes}`
  }

  function pressureLvl(pressure) {
    if(pressure < 760){
      return 'Пониженное'
    }else if(pressure === 760){
      return 'Нормальное'
    }else{
      return 'Повышенное'
    }
  }
  function windStr(speed) {
    if(speed <= 5){
      return 'лёгкий'
    }else if(speed < 11){
      return 'средний'
    }else{
      return 'сильный'
    }
  }
  function windDeg(deg) {
    if(deg === 0){
      return 'север'
    }else if(deg < 90){
      return 'северо-восток'
    }else if(deg === 90){
      return 'восток'
    }else if(deg < 180){
      return 'юго-восток'
    }else if(deg === 180){
      return 'юг'
    }else if(deg <= 270){
      return 'юго-запад'
    }else if(deg > 270){
      return 'северо-запад'
    }else if(deg === 360){
      return 'север'
    }
  }
  return (
    <div className="header__content">
        <div className="header__content-left">
            <h1>{ Math.floor(weatherData?.current.temp) }°</h1>
            <h2>Сегодня</h2>
            <p>Время: {getDate(weatherData?.timezone_offset)}</p>
            <p>Город: {weatherData?.local_names?.ru ?? weatherData?.local_names?.en}</p>
            <img src={`https://openweathermap.org/img/wn/${weatherImg}@2x.png`} alt="" />
        </div>
        <div className="header__content-right">
          <ul className="header__content-right-list">
            <li>
              <div><img src={temp} alt="" /></div>
              <h3>Температура</h3>
              <p>{ Math.floor(weatherData?.current.temp) }° - ощущается как { Math.floor(weatherData?.current.feels_like) }°</p>
            </li>
            <li>
              <div><img src={press} alt="" /></div>
              <h3>Давление</h3>
              <p>{Math.round(weatherData?.current.pressure  * 0.7506)} мм ртутного столба - {pressureLvl(weatherData?.current.pressure  * 0.7506)}</p>
            </li>
            <li>
              <div><img src={humidity} alt="" /></div>
              <h3>Осадки</h3>
              <p>{weatherData?.current.humidity + '%' ?? 'Без осадков'}</p>
            </li>
            <li>
              <div><img src={wind} alt="" /></div>
              <h3>Ветер</h3>
              <p>{Math.round(weatherData?.current.wind_speed)} м/с {windDeg(weatherData?.current.wind_deg)} - {windStr(weatherData?.current.wind_speed)} ветер</p>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Content