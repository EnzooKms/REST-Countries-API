import { useState } from "react"

export default function Filter() {
    // const [value, setValue] = useState("")

    return (
        <>
            <select name="pays" className="pays-select">
                <option value="Filter by Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </>
    )

}