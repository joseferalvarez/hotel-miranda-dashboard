async function fetchLogin(user) {

    const fetchData = {
        method: "POST",
        mode: "cors",
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
            "email": user.email,
            "password": user.pass
        })
    };

    return await fetch(`${process.env.REACT_APP_LOCAL_DOMAIN}/login`, fetchData)
        .then((response) => {
            return response.json();
        }).then((data) => {
            return data;
        });
}

export default fetchLogin;
