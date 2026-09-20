const Storage = {
    save: function(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
        console.log(`Saved data to ${key}`);
    },
    load: function(key) {
        return JSON.parse(localStorage.getItem(key));
    }
};

// This is the ONE primary export for this file
export default Storage;