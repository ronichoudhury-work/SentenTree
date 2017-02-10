export default class Node {
  constructor(rawNode, index) {
    this.index = index;
    this.left = 0;
    this.leftNodes = [];
    this.right = 0;
    this.rightNodes = [];
    this.data = rawNode;
  }

  isLeaf(){
    return !this.left || !this.right;
  }
}
