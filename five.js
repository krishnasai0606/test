//Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.
//e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);
function find_duplicate_in_array(arra1) {
    var object = {};
    var result = [];

    arra1.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
       if(object[prop] >= 1) {
           result.push(prop);
       }
    }

    return result;

}

console.log(find_duplicate_in_array([1, 2, 2, 4, 4,5, 4, 7, 8, 7, 7, 71, 3, 6,66,57,54,46,89,100,101,99,98,97,97]));