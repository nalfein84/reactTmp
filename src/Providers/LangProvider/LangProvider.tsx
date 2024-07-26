import { useSelector } from "react-redux"
import EN from "../../Lang/en"
import FR from "../../Lang/fr"
import { IKeys, RootState } from "../../Interfaces"
import React from "react"
import { Elang } from "../../Enum/Enum"
export const LangContext = React.createContext<IKeys>(FR)
export default function LangProvider(props: React.PropsWithChildren): JSX.Element {
  const lang = useSelector((state: RootState) => state.setting.lang)
  let type = FR
  if (lang === Elang.en) {
    type = EN
  }
  return <LangContext.Provider value={type}>{props.children}</LangContext.Provider>
}
