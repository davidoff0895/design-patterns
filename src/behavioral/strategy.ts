class Context {
    constructor(private strategy: Strategy) {}
    public sort(arr: number[]) {
        return this.strategy.sort(arr)
    }
}
abstract class Strategy {
    abstract sort(arr: number[]): number[];
}
class BubbleSortStrategy extends Strategy {
    sort(arr: number[]): number[] {
        const len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }
}
class QuickSortStrategy extends Strategy {
    sort(arr: number[]): number[] {
        if (arr.length <= 1) {
            return arr;
        }

        const pivot = arr[arr.length - 1];
        const leftList = [];
        const rightList = [];

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                leftList.push(arr[i]);
            }
            else {
                rightList.push(arr[i])
            }
        }

        return [...this.sort(leftList), pivot, ...this.sort(rightList)];
    }
}

let unsortedArr = [2, 27, 14, 52, 31, 96, 73, 47, 22, 6];
const bubbleSort = new Context(new BubbleSortStrategy());
console.log(bubbleSort.sort([...unsortedArr]));
const quickSort = new Context(new QuickSortStrategy());
console.log(quickSort.sort([...unsortedArr]));