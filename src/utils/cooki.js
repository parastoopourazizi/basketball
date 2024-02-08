const setCookie = tokens => {
    document.cookie = `accessToken=${tokens.access_token}; max-age=${20 * 60}`

    document.cookie = `refreshToken=${tokens.refresh_token}; max-age=${24 * 60 * 60}`
}

const getCookie = (cookieName) => {
   return document.cookie.split(';').find(token => token.trim().split('=')[0] === cookieName)?.split('=')[1]
}
export {setCookie , getCookie}