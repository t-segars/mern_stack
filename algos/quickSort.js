var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}


function partition(nums = [], left = 0, right = nums.length - 1) { 
    // FIND THE MIDDLE INDEX
    let pivotIndex = Math.floor((left + right)/2)
    let pivotValue = nums[pivotIndex]
    let tempPivotIndex = right
    // SWAP THE PIVOT VALUE WITH THE RIGHT BOUND

    // CREATE A LEFT POINT THAT START AT THE LEFT BOUND
    // CREATE A RIGHT POINTER THAT STARTS AT THE RIGHT BOUND - 1

    // START MOVING YOUR LEFT POINT RIGHT UNTIL WE SEE A VALUE GREATER THAN THE PIVOT VALUE

    // START MOVING YOUR RIGHT POINTER LEFT UNTIL WE SEE A VALUE LESS THAN THE PIVOT VALUE

    // SWAP THE LEFT AND RIGHT POINTER


    // ONCE THE LEFT AND THE RIGHT POINTERS HAVE CROSSED, SWAP THE PIVOT WITH THE RIGHT POINTER

    // RETURN THE INDEX WHERE THE PIVOT ENDED UP
}

