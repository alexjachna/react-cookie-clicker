import { useState } from "react"
import { Cookie } from "./Cookie"

export function Upgrade({ upgradeName, upgradeImage, cost }) {
    const [amount, setAmount] = useState(0) 

    function purchaseUpgrade() {
        setAmount(amount + 1)
    }

    return (
        <div onClick={purchaseUpgrade} className="upgrade">
            <img src={upgradeImage} alt="" />
            <div className="title-and-cost">
                <p className="upgrade-title">{upgradeName}</p>
                <p className="upgrade-cost">{cost} cookies</p>
            </div>
            <span>{amount}</span>
        </div>
    )
}