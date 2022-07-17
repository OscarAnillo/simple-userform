import { useDispatch, useSelector } from "react-redux";

/* actions */
import { logout, selectUser } from "../Redux/userSlice";

export default function Logout(){
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const clickHandler = (e) => {
        e.preventDefault();
        dispatch(logout())
    }
    return (
        <div>
            <h1>Welcome <span>{user.name}</span></h1>
            <button onClick={clickHandler}>Log out</button>
        </div>
    )
}