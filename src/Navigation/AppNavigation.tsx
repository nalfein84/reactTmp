
import { useSelector } from 'react-redux'
import { RootState } from '../Interfaces/Redux'
import { PrivateNavigation } from './PrivateNavigation/PrivateNavigation'
import { PublicNavigation } from './PublicNavigation/PublicNavigation'
import { LangProvider } from '../Providers'
import { ThemeProvider } from '../Providers/ThemeProvider/ThemeProvider'
import ModalProvider from '../Providers/ModalProvider/ModalProvider'
import React from 'react'

const AppNavigation = () => {
    const { accessToken, user } = useSelector((state: RootState) => state.auth)

    return (
        <LangProvider>
            <ThemeProvider>
                <ModalProvider />
                {
                    accessToken ? <PrivateNavigation /> : <PublicNavigation />
                }

            </ThemeProvider>
        </LangProvider>
    )
}

export default AppNavigation