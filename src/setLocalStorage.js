function setLocalStorage(obj){
    localStorage.setItem('user' ,JSON.stringify(obj));
}

export default setLocalStorage;