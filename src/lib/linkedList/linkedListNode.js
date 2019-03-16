// @flow
import {
  type Pair,
  makePair,
  getFirstPairElement,
  getSecondPairElement,
  isPair,
} from '../pair';

export type Node = Pair;

export const makeLinkedListNode = (value: any, nextNode: Node | null): Node => {
  const node: Pair = makePair(value, nextNode);
  node.node = true;
  return node;
};
export const getNodeValue = (node: Node): any => getFirstPairElement(node);
export const getNextNode = (node: Node): Node | null => getSecondPairElement(node);

export const isNode = (node: Node): boolean => isPair(node) && node.node;
export const nodeToString = (node: Node): string => {
  if (isNode(node)) {
    const value = getNodeValue(node);
    return `[${value}]`;
  }
  return String(node);
};
