const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}
// Only edit below

let firstIndex = data.lists[0][1].length - 1;
let secondIndex = data.lists[1][1].length - 1;
let thirdIndex = data.lists[2][1].length - 1;

const result = []

const extractBiggest = () => {
    let firstIndex = data.lists[0][1].length - 1;
    let secondIndex = data.lists[1][1].length - 1;
    let thirdIndex = data.lists[2][1].length - 1;
  
    const first = data.lists[0][1][firstIndex];
    const second = data.lists[1][1][secondIndex];
    const third = data.lists[2][1][thirdIndex];
  
    if (first >= second && first >= third) {
      result.push(first);
      data.lists[0][1].pop();
    } else if (second >= third) {
      result.push(second);
      data.lists[1][1].pop();
    } else {
      result.push(third);
      data.lists[2][1].pop();
    }
  };

  for (let i = 0; i < 15; i++) {
    extractBiggest();
  }

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)