const config = {
    screens: {
        Home: {
            path: "Home"
        },
        Profile: {
            path: "profile/:id",
            parse: {
                id: (id: string) => `${id}`
            }
        },
        ResetPassword: {
            path: "ResetPassword/:token",
            parse: {
                token: (token: string) => `${token}`
            }
        }
    }
}
const linking = {
    prefixes: ["myApp://"],
    config
}
export default linking