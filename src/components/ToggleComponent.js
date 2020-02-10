import React, { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export const ToggleComponent = () => {
    const { toggleLanguage, english } = useContext(LanguageContext)
    return (
        <div>
            <button type="button" onClick={toggleLanguage}>
                Toggle to {!english ? "English" : "Spanish"} language
            </button>
        </div>
    )
}
