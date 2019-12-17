// Reference: https://stackoverflow.com/questions/53071851/getting-the-value-from-input-element-in-typescript

import { List } from './List';

export class Main {
    myList: List;

    constructor() {
        console.log("Test Log");
        this.myList = new List();
    }

    printList() {

        let returnedList: string[] = this.myList.getList();

        let i: number;
        let len: number = this.myList.size();
        let fullList: string = "";

        for (i = 0; i < len; ++i) {
            console.log(i + ". " + returnedList[i]);
            //console.log("\n");
            fullList += "<h4>" + (i + 1) + ". " + returnedList[i] + "</h4>";
        }
        (<HTMLInputElement>document.getElementById("list")).innerHTML = fullList;
    }

    addItem() {
        let x = (<HTMLInputElement>document.getElementById("item")).value;
        if (x != "") {
            console.log("New item added: " + x);
            this.myList.add(x);
        }
    }

    findItem() {
        let x = (<HTMLInputElement>document.getElementById("index")).value;

        if (!(typeof x === "number")) {
            (<HTMLInputElement>document.getElementById("result")).innerHTML = "<h4>Invalid input</h4>";
        }
        else {
            let ans: string = this.myList.getIndexOf(x);
            (<HTMLInputElement>document.getElementById("result")).innerHTML = ans;
        }
    }
}

const main = new Main();