import { makePair } from '../src/lib/pair';
import {
  makeLinkedListNode,
  getNodeValue,
  getNextNode,
  isNode,
  nodeToString,
} from '../src/lib/linkedList/linkedListNode';

describe('linkedListNode', () => {
  const first = '1';
  const second = 2;
  const secondNode = makeLinkedListNode(2, null);
  const firstNode = makeLinkedListNode('1', secondNode);
  const pair = makePair('1', secondNode);

  it('#isNode', () => {
    expect(isNode(firstNode)).toBeTruthy();
    expect(isNode(secondNode)).toBeTruthy();
    expect(isNode(pair)).toBeFalsy();
    expect(isNode(5)).toBeFalsy();
    expect(isNode({})).toBeFalsy();
  });

  it('#getNodeValue', () => {
    expect(getNodeValue(firstNode)).toBe(first);
    expect(getNodeValue(secondNode)).toBe(second);
  });

  it('#getNextNode', () => {
    expect(getNextNode(firstNode)).toBe(secondNode);
    expect(getNextNode(secondNode)).toBe(null);
  });

  it('#nodeToString', () => {
    expect(nodeToString(secondNode)).toBe(`[${second}]`);
    expect(nodeToString(firstNode)).toBe(`[${first}]`);
  });
});
