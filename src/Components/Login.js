import { useState } from 'react'

/* Redux */
import {useDispatch} from 'react-redux'
import { login } from '../Redux/userSlice'

export default function Login(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login({
            name: name,
            email: email,
            password:password,
            loggedIn: true
        }))
    }

    return (
        <div>
            <form onSubmit={submitHandler} autoComplete="off">
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}