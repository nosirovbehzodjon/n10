const getData = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        console.log("storage-error-get", e);
    }
};

const setData = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log("storage-errorp-set", e);
    }
};

export { getData, setData };
