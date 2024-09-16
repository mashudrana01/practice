//1 function calculatedifference
function calculateDifference(num1,num2){
    return num1-num2;
}
//example
let result = calculateDifference(20, 10);
console.log(result); 
//2 odd-number
function isOdd(num){
    return num%2 !==0;
}
//example
console.log(isOdd(1));  
console.log(isOdd(2)); 

//3 find the smallest number
function findMin(numbers){
    if (numbers.length ===0){
        throw new Error("Array cannot be empty");

    }
    return Math.min(...numbers);
}
//example
console.log(findMin([2,4,5,1,9,3,7]));

//4 Function to filter out even numbers from an array,
function filterEvenNumbers(numbers){
    return numbers.filter(num => num %2===0);
}
//example
console.log(filterEvenNumbers([2,3,6,7,9,10]));

//5 Function to sort an array in descending order
function sortArrayDescending(numbers){
    return [...numbers].sort((a,b)=> b-a);

}
console.log(sortArrayDescending([3, 1, 4, 1, 5, 9]));
//6 // Function to lowercase the first letter of a string
function  lowercaseFirstLetter(str) {
    if (str.length === 0) {
      return str; 
    }
        return str[0].toLowerCase() + str.slice(1);
  }
  // Example :
console.log(lowercaseFirstLetter("Hello"));
//7 Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
 function  countVowels (str){
    const vowels='aeiouAEIOU';
    return [...str].filter(char =>vowels.includes(char)).length;
 }
 //example
 console.log(countVowels("Hello World"));

 //8 Function to calculate the average of an array of number
 function findAverage(numbers) {
    if (numbers.length === 0) {
      throw new Error("Array cannot be empty");
    }
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      return sum / numbers.length;
  }
  
  // Example :
  console.log(findAverage([1, 2, 3, 4, 5]));