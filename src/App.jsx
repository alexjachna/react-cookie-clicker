import './styles.css'
import { useState, useEffect } from 'react'
import { Cookie } from './Cookie'
import { Upgrade } from './Upgrade'

export default function App() {
  const [cookies, setCookies] = useState(0)
  const [costA, setCostA] = useState(10)
  const [costB, setCostB] = useState(100)
  const [costC, setCostC] = useState(1000)
  const [costD, setCostD] = useState(10000)
  const [costE, setCostE] = useState(100000)
  const [multiplier, setMultiplier] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMultiplier(multiplier + 1);
  }, 1000);

  return () => window.clearInterval(timer);
    }, [])

  return (
    <div id="main-container">
      <Cookie cookies={cookies} setCookies={setCookies} multiplier={multiplier} />
      
      <div id="upgrades-container">
        <Upgrade cookies={cookies} setCookies={setCookies} upgradeName="Cursor" upgradeImage="./public/cookie.png" cost={costA} setCost={setCostA} setMultiplier={setMultiplier}/>
        <Upgrade cookies={cookies} setCookies={setCookies} upgradeName="Grandma" upgradeImage="./public/grandma.png" cost={costB} setCost={setCostB}/>
        <Upgrade cookies={cookies} setCookies={setCookies} upgradeName="Farm" upgradeImage="./public/farm.png" cost={costC} setCost={setCostC}/>
        <Upgrade cookies={cookies} setCookies={setCookies} upgradeName="Mines" upgradeImage="./public/mines.png" cost={costD} setCost={setCostD}/>
        <Upgrade cookies={cookies} setCookies={setCookies} upgradeName="Factory" upgradeImage="./public/factory.png" cost={costE} setCost={setCostE}/>
      </div>
    </div>  
  )
}