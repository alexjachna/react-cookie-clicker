

export function Cookie({ cookies, setCookies }) {

    return (
        <div id="cookie-container">
            <p className='cookie-count'>{cookies} Cookies</p>
            <p className='cookie-per-second'>10.8 Passive Cookies per second</p>
            <img onClick={() => setCookies(cookies + 1)} className="cookie-image" src="./public/cookie.png" alt="" />
        </div>
    )
}