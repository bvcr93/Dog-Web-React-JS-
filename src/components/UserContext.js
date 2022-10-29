import { createContext, useState } from "react";

 export const UserContext = createContext()

 export function UserProvider(props){
const [isAuth, setIsAuth] = useState(false)


return (
    <UserContext.Provider value = {{isAuth, setIsAuth}}>
        {props.children}
    </UserContext.Provider>
)
 }