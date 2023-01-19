function getToken() {
    if (localStorage.getItem("auth")) {
        return JSON.parse(localStorage.getItem("auth")).token;
    }
}

export default getToken;
