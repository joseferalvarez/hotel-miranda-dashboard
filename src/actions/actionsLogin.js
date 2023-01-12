import { getLocalAuth, getLogin } from "../features/sliceLogin";

function getUserDB(dispatch, email, password) {
    const data = {
        email: email,
        pass: password
    }
    dispatch(getLogin(data))
}

function getUserLocal(dispatch) {
    const auth = JSON.parse(localStorage.getItem("auth"));

    const data = {
        user: auth.user,
        token: auth.token
    };

    dispatch(getLocalAuth(data));
}

export {
    getUserDB,
    getUserLocal
};
