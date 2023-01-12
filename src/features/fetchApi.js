async function fetchGET(url, token) {
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

async function fetchPOST(url, token, newitem) {
    return await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ room: newitem })
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
}

async function fetchPUT(url, token, newitem) {
    return await fetch(url, {
        method: "PUT",
        mode: "cors",
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ room: newitem })
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
}

async function fetchDELETE(url, token) {
    return await fetch(url, {
        method: "DELETE",
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

export {
    fetchGET,
    fetchPOST,
    fetchPUT,
    fetchDELETE
};
