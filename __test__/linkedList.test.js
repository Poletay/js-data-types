import {
  makeLinkedList,
  insertAtEnd,
  insertAtMiddle,
  insertAtHead,
  deleteElement,
  searchElement,
  isEmpty,
  reverse,
  takeElement,
  toString,
  length,
} from '../src/lib/linkedList';

import { nodeToString, isNode } from '../src/lib/linkedList/linkedListNode';

describe('linkedList', () => {
  const firstList = makeLinkedList(2, 'second', 3, 'fourth');
  const secondList = makeLinkedList('1', null, 'third');
  const thirdList = makeLinkedList();

  it('#length', () => {
    expect(length(firstList)).toBe(4);
    expect(length(secondList)).toBe(3);
    expect(length(thirdList)).toBe(0);
  });

  it('#toString', () => {
    expect(toString(firstList)).toBe('[2, second, 3, fourth]');
    expect(toString(secondList)).toBe('[1, , third]');
    expect(toString(thirdList)).toBe('[]');
  });

  it('#insertAtEnd', () => {
    const appendedList = insertAtEnd(firstList, 'appended');
    expect(toString(firstList)).toBe('[2, second, 3, fourth]');
    expect(toString(appendedList)).toBe('[2, second, 3, fourth, appended]');
  });

  it('#insertAtMiddle', () => {
    const middledList = insertAtMiddle(firstList, 'newSecond', 1);
    const againMiddledList = insertAtMiddle(firstList, 'newLast', 6);
    const andAgainMiddledList = insertAtMiddle(firstList, 'newFirst', -2);
    expect(toString(firstList)).toBe('[2, second, 3, fourth]');
    expect(toString(middledList)).toBe('[2, newSecond, second, 3, fourth]');
    expect(toString(againMiddledList)).toBe('[2, second, 3, fourth, , , newLast]');
    expect(toString(andAgainMiddledList)).toBe('[newFirst, , 2, second, 3, fourth]');
  });

  it('#insertAtHead', () => {
    const headedList = insertAtHead(firstList, 'newHead');
    expect(toString(firstList)).toBe('[2, second, 3, fourth]');
    expect(toString(headedList)).toBe('[newHead, 2, second, 3, fourth]');
  });

  it('#deleteElement', () => {
    const editedList = deleteElement(firstList, 2);
    const againEditedList = deleteElement(firstList, 0);
    const andAgainEditedList = deleteElement(firstList, 3);
    const andEditedList = deleteElement(firstList, 10);


    expect(toString(firstList)).toBe('[2, second, 3, fourth]');
    expect(toString(editedList)).toBe('[2, second, fourth]');
    expect(toString(againEditedList)).toBe('[second, 3, fourth]');
    expect(toString(andAgainEditedList)).toBe('[2, second, 3]');
    expect(toString(andEditedList)).toBe('[2, second, 3, fourth]');
  });

  it('#searchElement', () => {
    const thirdElement = searchElement(firstList, 2);
    const secondElement = searchElement(firstList, 'fourth');
    const nothing = searchElement(firstList, 'test');
    expect(isNode(thirdElement)).toBeTruthy();
    expect(nodeToString(thirdElement)).toBe('[2]');
    expect(isNode(secondElement)).toBeTruthy();
    expect(nodeToString(secondElement)).toBe('[fourth]');
    expect(nothing).toBe(null);
  });

  it('#isEmpty', () => {
    expect(isEmpty(thirdList)).toBeTruthy();
  });

  it('#reverse', () => {
    const reversedFirstList = reverse(firstList);
    const reversedSecondList = reverse(secondList);
    expect(toString(firstList)).toBe('[2, second, 3, fourth]');
    expect(toString(reversedFirstList)).toBe('[fourth, 3, second, 2]');
    expect(toString(secondList)).toBe('[1, , third]');
    expect(toString(reversedSecondList)).toBe('[third, , 1]');
  });

  it('#takeElement', () => {
    const thirdElement = takeElement(firstList, 2);
    const secondElement = takeElement(firstList, 1);
    expect(isNode(thirdElement)).toBeTruthy();
    expect(nodeToString(thirdElement)).toBe('[3]');
    expect(isNode(secondElement)).toBeTruthy();
    expect(nodeToString(secondElement)).toBe('[second]');
  });
});
