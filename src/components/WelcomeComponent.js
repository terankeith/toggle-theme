import React, { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export const WelcomeComponent = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div>
            <p>{language.headerText}</p>
            <p>{language.footerText}</p>
        </div>
    )
}
