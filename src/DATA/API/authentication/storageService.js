function getAuthToken() {
    return localStorage.getItem("at");
}

function getId() {
    return localStorage.getItem("id");
}

function setAuthToken(token, id) {
    localStorage.setItem("at", token);
    localStorage.setItem("id", id);
}

function removeAuthToken() {
    localStorage.removeItem("at");
    localStorage.removeItem("id");
}

export default {
    getAuthToken,
    setAuthToken,
    removeAuthToken,
    getId
}