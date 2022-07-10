import LinkedList, { Node } from "../LinkedList";


const singlyLinkedList = new LinkedList();


singlyLinkedList.insert = function (value) {
    
    // instantiate a new node
    let newNode = new Node(value);

    // set reference to existing head
    newNode.next = singlyLinkedList.head;

    // replace existing head reference with newNode reference
    singlyLinkedList.head = newNode;

    // increase size value of linked list
    singlyLinkedList.size++;

}


singlyLinkedList.insertAt = function (index, value) {

    // create pointer variable
    // start with head of linked list
    let currentNode = singlyLinkedList.head;

    // create a current index counter
    let currentIndex = 0;

    // while currentNode is not null, continue
    while (currentNode !== null) {

        // insert a new Node if the next currentIndex is the one for which we are searching
        if (currentIndex + 1 === index) {
            
            // create a new Node
            let newNode = new Node(value);

            // set newNode.next to reference the currentNode.next
            newNode.next = currentNode.next;

            // set currentNode.next to reference the newNode
            currentNode.next = newNode;

            // increase size value of linked list
            singlyLinkedList.size++;

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


singlyLinkedList.indexOf = function (value) {

    // create pointer variable
    // start with head of linked list
    let currentNode = singlyLinkedList.head;

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
singlyLinkedList.removeElement = function (value) {

    // create pointer variable
    // start with head of linked list
    let currentNode = singlyLinkedList.head;

    // while currentNode is not null, continue
    while (currentNode !== null) {

        // if the currentNode.next is the node for which we are searching, remove it
        if (currentNode.next.value === value) {
            
            // set currentNode.next to reference the node-to-remove's next reference
            currentNode.next = currentNode.next.next;

            // decrease the size value of the linked list
            singlyLinkedList.size--;

            // break the loop
            return;

        }

        else {

            // reference the next node in the list
            currentNode = currentNode.next;

        }

    }

}