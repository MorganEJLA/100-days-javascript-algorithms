function sum(arr) {
    let total =0;
    // we have a function that takes an array and sums all the items to the total of the array/ 
    for(let i =0; i<arr.length; i++){
        total += arr[i];
    //adds in the value of each item of the array to the total variable. 
    //What takes up space?
    //line 4 and 5 both have values = . 
    //no matter the size of the array it doesnt have an impact on the space being taken//
    //Answer : (0)1 space ---its constant space. 

    }
    return total;
}