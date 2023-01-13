import { getToken } from "../helpers/helpers";

const FETCH_OPTIONS = ["GET", "POST", "PUT", "DELETE"];

const fetchData = {
    method: "",
    mode: "cors",
    cache: "default",
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: null
};

async function fetchGET(url) {
    fetchData.method = FETCH_OPTIONS[0];

    return await fetch(url, fetchData).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
};

async function fetchPOST(url, newitem) {
    fetchData.method = FETCH_OPTIONS[1];
    fetchData.body = JSON.stringify(newitem);

    return await fetch(url, fetchData).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
}

async function fetchPUT(url, newitem) {
    fetchData.method = FETCH_OPTIONS[2];
    fetchData.body = JSON.stringify(newitem);

    return await fetch(url, fetchData).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
}

async function fetchDELETE(url) {
    fetchData.method = FETCH_OPTIONS[3];

    return await fetch(url, fetchData).then((response) => {
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
