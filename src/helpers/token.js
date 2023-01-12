function getToken() {
    return JSON.parse(localStorage.getItem("auth")).token;
}

export default getToken;
