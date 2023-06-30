import { useState, useEffect } from "react"

export function Upgrade({ cookies, setCookies, upgradeName, upgradeImage, cost, setCost }) {
    const [amount, setAmount] = useState(0)
    const [canAfford, setCanAfford] = useState(false)

    useEffect(() => {
        cookies >= cost ? setCanAfford(true) : setCanAfford(false)
    }, [cookies])

    function purchaseUpgrade() {
        if (cookies >= cost) {
            setAmount((amount) => amount + 1)
            setCookies((cookies) => cookies - cost)
            setCost((cost) => Math.ceil(cost * 1.5))
        }
        else {
            alert('insufficient funds')
        } 
    }

    return (
        <div onClick={purchaseUpgrade} className={canAfford ? 'upgrade' : 'upgrade disabled'}>
            <img src={upgradeImage} alt="" />
            <div className="title-and-cost">
                <p className="upgrade-title">{upgradeName}</p>
                <p className="upgrade-cost">{cost} cookies</p>
            </div>
            <span>{amount}</span>
        </div>
    )
}