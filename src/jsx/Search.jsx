import { useState } from "react"
import Form from "./FormEventSubmit"

export default function Search() {
    // const [value, setValue] = useState("")

    return (
        <>
            <form action="#" className="form--search">
                <img src="./src/assets/shape.svg" alt="" className="form--search__shape" />
                <input type="text" name="" className="form--search__input--text" placeholder="Search for a country…" />
            </form>
        </>
    )

}