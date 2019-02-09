// @flow
export default function Pair(first: any, second: any) {
  this.first = first;
  this.second = second;
  this.car = () => this.first;
  this.cdr = () => this.second;
}
