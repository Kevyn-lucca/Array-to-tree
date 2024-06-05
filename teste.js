class Node {
	constructor(d) {
		this.data = d;
		this.left = null;
		this.right = null;
	}
}

let root = null;

function sortedArrayToBST(arr, start, end) {
	if (start > end) {
		return null;
	}
	let mid = parseInt((start + end) / 2);
	let node = new Node(arr[mid]);
	node.left = sortedArrayToBST(arr, start, mid - 1);

	node.right = sortedArrayToBST(arr, mid + 1, end);
	return node;
}
const prettyPrint = (node, prefix = "", isLeft = true) => {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
	}
	console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
	}
};

let arr = [1, 2, 3, 4, 5, 6, 7];
let n = arr.length;
preOrder(root);
