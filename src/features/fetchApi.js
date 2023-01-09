export async function fetchApi(url, token) {
    return await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        redirect: "follow",
        referrerPolicy: "no-referrer"
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
};
