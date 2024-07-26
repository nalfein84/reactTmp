import { EBottomtab, EPrivateScreen, EPublicScreen, IScreenNavigation } from "../Interfaces"
import BottomNavigation from "../Navigation/BottomNavigation/BottomNavigation"
import { Login, MainPage, CreationPage, Register } from "../Page"

const publicRoutes: IScreenNavigation[] = [
    { name: EPublicScreen.Login, component: Login, header: () => null },
    { name: EPublicScreen.Register, component: Register, header: () => null },
]
const privateRoutes: IScreenNavigation[] = [
    { name: EPrivateScreen.Bottom, component: BottomNavigation, header: () => null },
]
const tabArray: any[] = [
    { name: EPrivateScreen.Main, component: MainPage, header: () => null, icon: 'calendar' , label: 'Home Page'},
    { name: EPrivateScreen.Creation, component: CreationPage, header: () => null, icon: 'calendar', label: EPrivateScreen.Creation},
]


export { publicRoutes, privateRoutes, tabArray }