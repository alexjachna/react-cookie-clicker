import './styles.css'
import { useState } from 'react'
import { Cookie } from './Cookie'
import { Upgrade } from './Upgrade'

export default function App() {
  const [cookies, setCookies] = useState(0)
  const [multiplier, setMultiplier] = useState(0)

  return (
    <div id="main-container">
      <Cookie cookies={cookies} setCookies={setCookies} />
      
      <div id="upgrades-container">
        <Upgrade upgradeName="Cursor" upgradeImage="./public/cookie.png" cost="10" />
        <Upgrade upgradeName="Grandma" upgradeImage="./public/grandma.png" cost="100" />
        <Upgrade upgradeName="Farm" upgradeImage="./public/farm.png" cost="1000" />
        <Upgrade upgradeName="Mines" upgradeImage="./public/mines.png" cost="10000" />
        <Upgrade upgradeName="Factory" upgradeImage="./public/factory.png" cost="100000" />
      </div>
    </div>  
  )
}