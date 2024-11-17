import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/logo.svg'
const Navbar = ({ changeWeather }) => {
  const [city, setCity] = useState('Чирчик')
  const isMounted = useRef(false)
  useEffect(() => {
    if(isMounted.current && city){
      changeWeather(city)
    }
    isMounted.current = true
  }, [city])
  
  return (
    <nav className="header__nav">
        <a href="/"><img src={logo} alt="" /></a>
        <input 
          type="text"
          placeholder='Выбрать город'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
    </nav>
  )
}

export default Navbar