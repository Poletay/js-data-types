// @flow
import {
  type Node,
  makeLinkedListNode,
  getNodeValue,
  getNextNode,
} from './linkedListNode';

export type LinkedList = Node;

export const getHead = (list: LinkedList): any => getNodeValue(list);
export const getTail = (list: LinkedList): LinkedList | null => getNextNode(list);
export const isEmpty = (list: LinkedList): boolean => (
  getNodeValue(list) === null && getNextNode(list) === null
);

export const insertAtHead = (list: LinkedList, element: any): LinkedList => {
  if (isEmpty(list)) {
    return makeLinkedListNode(element, null);
  }
  return makeLinkedListNode(element, list);
};

export const makeLinkedList = (...elements: any): LinkedList => {
  const emptyLinkedList: LinkedList = makeLinkedListNode(null, null);

  const fillLinkedList = (list: LinkedList, index: number = 0): LinkedList => {
    if (index < 0) {
      return list;
    }
    const newElement = elements[index];
    const newList: LinkedList = insertAtHead(list, newElement);
    return fillLinkedList(newList, index - 1);
  };
  const lastElementIndex = elements.length - 1;
  return fillLinkedList(emptyLinkedList, lastElementIndex);
};

export const toArray = (list: LinkedList): Array<any> => {
  const iter: any = (iterList: LinkedList | null, acc: Array<any> = []) => {
    if (iterList === null) {
      return acc;
    }
    const head: any = getHead(iterList);
    const tail: LinkedList | null = getTail(iterList);
    const newAcc: Array<any> = [...acc, head];
    return iter(tail, newAcc);
  };
  return iter(list);
};

export const length = (list: LinkedList): number => {
  if (isEmpty(list)) {
    return 0;
  }
  const arrayOfElements = toArray(list);
  return arrayOfElements.length;
};

export const insertAtEnd = (list: LinkedList, newElement: any): LinkedList => {
  const arrayOfElements = toArray(list);
  const newArrayOfElements: Array<any> = [...arrayOfElements, newElement];
  const newList = makeLinkedList(...newArrayOfElements);
  return newList;
};

export const insertAtMiddle = (list: LinkedList, newElement: any, position: number): LinkedList => {
  const arrayOfElements: Array<any> = toArray(list);
  const listLength = length(list);
  const makeArrayOfNullElements = (amount: number): Array<null> => {
    const iter = (counter: number = 0, acc: Array<null> = []) => {
      if (counter < 1) {
        return acc;
      }
      const newAcc = acc.concat([null]);
      return iter(counter - 1, newAcc);
    };
    return iter(amount);
  };
  if (position < 0) {
    const amountNullElements: number = Math.abs(position) - 1;
    const arrayOfNulls: Array<null> = makeArrayOfNullElements(amountNullElements);
    const newArrayOfElements: Array<any> = [newElement, ...arrayOfNulls, ...arrayOfElements];
    return makeLinkedList(...newArrayOfElements);
  }
  if (position > listLength) {
    const amountNullElements = position - listLength;
    const arrayOfNulls: Array<null> = makeArrayOfNullElements(amountNullElements);
    const newArrayOfElements: Array<any> = [...arrayOfElements, ...arrayOfNulls, newElement];
    return makeLinkedList(...newArrayOfElements);
  }
  const firstPartOfList = arrayOfElements.slice(0, position);
  const secondPartOfList = arrayOfElements.slice(position, listLength);
  const newArrayOfElements: Array<any> = [...firstPartOfList, newElement, ...secondPartOfList];
  return makeLinkedList(...newArrayOfElements);
};

export const deleteElement = (list: LinkedList, index: number): LinkedList => {
  const listLength = length(list);
  if (listLength < 0 || listLength < index || index < 0) {
    return list;
  }
  const arrayOfElements = toArray(list);
  const firstPartOfList = arrayOfElements.slice(0, index);
  const secondPartOfList = arrayOfElements.slice(index + 1);
  const newArrayOfElements = firstPartOfList.concat(secondPartOfList);
  return makeLinkedList(...newArrayOfElements);
};

export const searchElement = (list: LinkedList, element: any): Node | null => {
  const iter = (nextNode: LinkedList | null): Node | null => {
    if (nextNode === null || isEmpty(nextNode)) {
      return null;
    }
    const head = getHead(nextNode);
    const tail = getTail(nextNode);
    if (head === element) {
      return nextNode;
    }
    return iter(tail);
  };
  return iter(list);
};

export const reverse = (list: LinkedList): LinkedList => {
  const iter = (reversedList: LinkedList, reversingList: LinkedList | null): LinkedList => {
    if (reversingList === null || isEmpty(reversingList)) {
      return reversedList;
    }
    const head = getHead(reversingList);
    const tail = getTail(reversingList);
    const newReversedList = insertAtHead(reversedList, head);
    return iter(newReversedList, tail);
  };

  const emptyList = makeLinkedList();
  return iter(emptyList, list);
};

export const takeElement = (list: LinkedList, index: number): Node | null => {
  const iter = (nextNode: LinkedList | null, counter: number = 0): Node | null => {
    if (nextNode === null) {
      return nextNode;
    }

    if (counter < 1) {
      return nextNode;
    }
    const tail: LinkedList | null = getTail(nextNode);
    return iter(tail, counter - 1);
  };
  return iter(list, index);
};

export const toString = (list: LinkedList): string => {
  const arrayOfElements: Array<any> = toArray(list);
  const stringOfElements: string = arrayOfElements.join(', ');
  return `[${stringOfElements}]`;
};
