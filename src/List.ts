export class List {
    private aList: string[] = [];

    constructor() {

    }

    size(): number {
        return this.aList.length;
    }

    getList(): string[] {
        return this.aList;
    }

    getIndexOf(index: number): string {
        if (index < 0 || index >= this.aList.length) {
            return "Invalid index";
        }
        return this.aList[index];
    }

    add(item: string) {
        this.aList.push(item);
    }
};