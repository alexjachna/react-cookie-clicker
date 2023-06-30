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
    const timer = setInterval(() => {
      setCookies((cookies) => cookies + multiplier);
  }, 1000);

    return () => clearInterval(timer);
    }, [multiplier])

  return (
    <div id="main-container">
      <Cookie cookies={cookies} setCookies={setCookies} multiplier={multiplier} />
      
      <div id="upgrades-container">
        <Upgrade cookies={cookies} setCookies={setCookies} upgradeName="Cursor" upgradeImage="./public/cookie.png" cost={costA} setCost={setCostA} multiplier={multiplier} setMultiplier={setMultiplier} worth={1}/>
        <Upgrade cookies={cookies} setCookies={setCookies} upgradeName="Grandma" upgradeImage="./public/grandma.png" cost={costB} setCost={setCostB} multiplier={multiplier} setMultiplier={setMultiplier} worth={3}/>
        <Upgrade cookies={cookies} setCookies={setCookies} upgradeName="Farm" upgradeImage="./public/farm.png" cost={costC} setCost={setCostC} multiplier={multiplier} setMultiplier={setMultiplier} worth={10}/>
        <Upgrade cookies={cookies} setCookies={setCookies} upgradeName="Mines" upgradeImage="./public/mines.png" cost={costD} setCost={setCostD} multiplier={multiplier} setMultiplier={setMultiplier} worth={40}/>
        <Upgrade cookies={cookies} setCookies={setCookies} upgradeName="Factory" upgradeImage="./public/factory.png" cost={costE} setCost={setCostE} multiplier={multiplier} setMultiplier={setMultiplier} worth={100}/>
      </div>
    </div>  
  )
}