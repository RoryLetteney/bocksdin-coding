
type Nullable<T> = T | null;

class Item {
    value: any;
    next: Nullable<Item>;

    constructor(value: any, next: Nullable<Item> = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    head: Nullable<Item>;

    constructor() {
        this.head = null;
    }

    insert(value: any) {
        this.head = new Item(value, this.head);
    }

    removeItem(): Nullable<Item> {
        const topItem = this.head;
        this.head = this.head ? this.head.next : null;

        return topItem;
    }
}

class Stack {
    top: number;
    maxSize: number;
    items: LinkedList;

    constructor(maxSize: number) {
        this.top = 0;
        this.maxSize = maxSize;
        this.items = new LinkedList();
    }

    push(value: any): void {
        if (this.top + 1 > this.maxSize)
            throw new Error("Maximum stack size reached!");

        this.items.insert(value);
        this.top++;
    }

    peek(): Nullable<Item> {
        if (this.top > 0) {
            return this.items.head;
        } else {
            return null;
        }
    }

    pop(): Nullable<Item> {
        if (this.peek()) {
            const topItem = this.items.removeItem();
            this.top--;

            return topItem;
        } else {
            return null;
        }
    }
}

export default Stack;