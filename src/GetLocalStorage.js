function GetLocalStorage() {
    const userKey = Object.keys(window.localStorage)
        .filter(it => it.startsWith('user'))[0];
    const user = userKey ? JSON.parse(localStorage.getItem(userKey)) : '';
    return user;
}

export default GetLocalStorage;