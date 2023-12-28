function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function checkAuth(){
    const isAuthienticated = localStorage.getItem("isAuthienticated")
    if(isAuthienticated == "true"){
        const isLoggedIn = true
        return isLoggedIn
    }else{
        const isLoggedIn = false
        return isLoggedIn
    }
}

export async function authienticate(email, password){
    await sleep(500)
    if(email === "demo@demo.com" && password === "p123"){
        localStorage.setItem("isAuthienticated", "true")
        return true
    }else{
        return false
    }
}