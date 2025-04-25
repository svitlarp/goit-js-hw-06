class StringBuilder {
    #value = "";

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value = this.#value.concat(str);
    }

    padStart(str) {
        this.#value = str + this.#value;
    }

    padBoth(str) {
        this.#value = str + this.#value + str;
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="





// let str = "Hello, World!";
// let ch = "*";
// let res = `${ch}${str}`;
// console.log(res);


let str = "Hello Sv";
let ch = "**!"
console.log(`${ch} ${str} ${ch}`);