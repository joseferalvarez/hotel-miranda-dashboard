async function fetchLogin(user, token?) {

    let header = "";
    if (token) {
        header = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
    } else {
        header = {
            "Content-Type": "application/json"
        }
    }

    return await fetch(`${process.env.REACT_APP_LOCAL_DOMAIN}/login`, {
        method: "POST",
        mode: "cors",
        cache: "default",
        credentials: "same-origin",
        headers: header,
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
            "email": user.email,
            "password": user.pass
        })
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
}

export default fetchLogin;
