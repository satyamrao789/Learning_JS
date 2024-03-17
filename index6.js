console.log("Learning while loop");

let num = Number.parseInt(prompt("Enter a number"));

let rev = 0, value = num;

while (num != 0) {
    rem = num % 10;
    rev = rev*10 + rem;
    num = Math.floor(num / 10);
}
if(value == rev)
console.log(value +" is a palindrome number");
else
console.log(value +" is NOT a palindrome number");

