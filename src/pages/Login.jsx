import React from "react"
import { authienticate } from "../api/auth" 
import { useNavigate, redirect, useLocation, useNavigation } from "react-router-dom"

export default function Login() {
    const isAuthienticated = localStorage.getItem("isAuthienticated")
    const [loginFormData, setLoginFormData] = React.useState({ email: "demo@demo.com", password: "p123" })
    const [formState, setFormState] = React.useState('idle')
    const location = useLocation().search
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        setFormState((prev) => ('submitting'))
        const authData = await authienticate(loginFormData.email, loginFormData.password)
        setLoginFormData((prev) => {
            return { email: "", password: "" }
        })
        if(authData == true){
            setFormState((prev) => ('idle'))
            navigate('/host/vans', {replace: true})
        }else{
            setFormState((prev) => ('idle'))
            navigate('/login?message=incorrectCredentials', {replace: true})
        }
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleLogOut(e){
        e.preventDefault()
        localStorage.clear()
        navigate('/')
    }

    if (isAuthienticated == "true"){
        return(<div className="login-container">
                <h1>Sad to see you go! Please click the button below to log out</h1>
                <form onSubmit={handleLogOut} className="login-form">
                    <button>Log Out</button>
                </form>
            </div>)
    }else{
        return (
            <div className="login-container">
                <h1>Sign in to your account</h1>
                {location === "?message=incorrectCredentials" ? <h3 className="red">Incorrect email or password, please try again</h3> : null}
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        name="email"
                        onChange={handleChange}
                        type="email"
                        placeholder="demo@demo.com"
                        value={loginFormData.email}
                    />
                    <input
                        name="password"
                        onChange={handleChange}
                        type="password"
                        placeholder="p123"
                        value={loginFormData.password}
                    />
                    <button disabled={formState === 'submitting'}>{formState === 'submitting'? "Logging in..." : "Log in"}</button>
                </form>
            </div>
        )
    }
}