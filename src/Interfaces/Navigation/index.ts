enum EPrivateScreen {
    Bottom = "Bottom",
    Main = "Main",
    Creation = "Creation",
}
enum EPublicScreen {
    Login = "Login",
    Bottom = "Bottom",
    Register = 'Register'
}

interface IScreenNavigation {
    name: string,
    component: any,
    title?: string,
    initialParams?: Partial<object | undefined>,
    header?: any
}
enum EBottomtab {
    Home = "Home",
    Main = "Main",
}
export {
    EPrivateScreen,
    EPublicScreen,
    EBottomtab
}
export type { IScreenNavigation }