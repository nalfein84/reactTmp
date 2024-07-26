
import { useSelector } from 'react-redux'
import { light, dark } from "../../Assets/abstracts/colors"
import React from 'react'
import { Etheme } from '../../Enum/Enum'
import { IKeys, RootState } from '../../Interfaces'

export const ThemeContext = React.createContext<IKeys>(light)
export function ThemeProvider(props: React.PropsWithChildren): JSX.Element {
    const theme = useSelector((state: RootState) => state.setting.theme)
    let type = light
    if (theme === Etheme.dark) {
        type = dark
    }
    return <ThemeContext.Provider value={type}>{props.children}</ThemeContext.Provider>
}
