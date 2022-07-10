import LinkedList, { DoubleReferenceNode } from "../LinkedList";


const doublyLinkedList = new LinkedList();


doublyLinkedList.insert = function (value) {
    
    // instantiate a new node
    let newNode = new DoubleReferenceNode(value);

    // set newNode.next reference to existing head
    newNode.next = doublyLinkedList.head;

    // set head.previous reference to newNode
    doublyLinkedList.head.previous = newNode;

    // replace existing head reference with newNode reference
    doublyLinkedList.head = newNode;

    // increment size value of linked list
    doublyLinkedList.size++;

}


doublyLinkedList.insertAt = function (index, value) {

    // create pointer variable
    // start with head of linked list
    let currentNode = doublyLinkedList.head;

    // create a current index counter
    let currentIndex = 0;

    // while currentNode is not null, continue
    while (currentNode !== null) {

        // insert a new Node if the next currentIndex is the one for which we are searching
        if (currentIndex + 1 === index) {
            
            // create a new Node
            let newNode = new DoubleReferenceNode(value);

            // set newNode.next to reference the currentNode.next
            newNode.next = currentNode.next;

            // set newNode.previous to reference the currentNode
            newNode.previous = currentNode;

            // set currentNode.next.previous to reference the newNode
            currentNode.next.previous = newNode;

            // set currentNode.next to reference the newNode
            currentNode.next = newNode;

            // break the loop
            return;

        }
        
        else {

            // reference the next node in the list
            currentNode = currentNode.next;

            // increment the currentIndex value
            currentIndex++;

        }

    }

}


doublyLinkedList.indexOf = function (value) {

    // create pointer variable
    // start with head of linked list
    let currentNode = doublyLinkedList.head;

    // create a current index counter
    let currentIndex = 0;

    // while currentNode is not null, continue
    while (currentNode !== null) {

        // return the currentIndex if the currentNode.value is the one for which we are searching
        if (currentNode.value === value)
            return currentIndex;

        else {

            // reference the next node in the list
            currentNode = currentNode.next;

            // increment the currentIndex value
            currentIndex++;

        }

    }

    // if the value wasn't found, return -1
    return -1;
}


// can take in either a value or an index
// for the purpose of this demonstration we will look for a specific value
doublyLinkedList.removeElement = function (value) {

    // create pointer variable
    // start with head of linked list
    let currentNode = doublyLinkedList.head;

    // while currentNode is not null, continue
    while (currentNode !== null) {

        // if the currentNode.next is the node for which we are searching, remove it
        if (currentNode.next.value === value) {

            // set currentNode.next.next.previous to reference the currentNode
            currentNode.next.next.previous = currentNode;
            
            // set currentNode.next to reference the node-to-remove's next reference
            currentNode.next = currentNode.next.next;

            // break the loop
            return;

        }

        else {

            // reference the next node in the list
            currentNode = currentNode.next;

        }

    }

}