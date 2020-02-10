import React, { createContext, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Languages } from "./Languages"

const initialState = {
    en: true,
    language: Languages.en,
    toggleLanguage: () => {}
}

export const LanguageContext = createContext(initialState)

export const LanguageProvider = props => {
    const [english, setEnglish] = useState(true)

    // On mount, read the preferred theme from the persistence
    useEffect(() => {
        const isEnglish = sessionStorage.getItem("english") === "true"
        setEnglish(isEnglish)
    }, [english])

    const toggleLanguage = () => {
        const isEnglish = !english
        sessionStorage.setItem("english", JSON.stringify(isEnglish))
        setEnglish(isEnglish)
    }

    const language = english ? Languages.en : Languages.sp

    return (
        <LanguageContext.Provider value={{ language, english, toggleLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    )
}

LanguageProvider.propTypes = {
    props: PropTypes.element
}
