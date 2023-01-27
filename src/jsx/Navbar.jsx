import { useState } from "react"

export default function Navbar() {
    // const [value, setValue] = useState("")

    return (
        <>
            <nav className="bg-primary navbar">
                <h1 className="text-black navbar__world">Where in the world?</h1>

                <div className="navbar__div">
                    <img src="./src/assets/DarkLogo.svg" alt="img" className="navbar__div_logo" />
                    <p className="text-black navbar__div__text">Dark Mode</p>
                </div>
            </nav>
        </>
    )

}