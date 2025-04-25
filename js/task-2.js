class Storage {
    #items = [];

    constructor(params=[]) {
        this.#items = params;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        if (this.#items.includes(itemToRemove)) {
            const indexOfItem = this.#items.indexOf(itemToRemove);
            this.#items.splice(indexOfItem, 1);
        }
        else {
            console.log(`The item ${itemToRemove} does not exist in this class.`);
        }
    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
