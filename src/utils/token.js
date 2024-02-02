import { getCookie, setCookie } from "./cooki"

const getNewToken = async (refresh , setRefresh) => {
    const refreshToken = getCookie("refreshToken")
    if(!refreshToken) return

    try {
        const res = await fetch('https://bushehrbasketball.pythonanywhere.com/auth/refresh/' , {
            method: "POST",
            body: JSON.stringify({refresh_token : refreshToken}),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            }
          })
          const newToken = await res.json()
          setCookie(newToken.message)
          setRefresh(!refresh)
          console.log(newToken)
    } catch (error) {
        console.log(error)
    }
}

export {getNewToken}