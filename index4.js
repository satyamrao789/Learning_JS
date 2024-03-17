//alert is used to display a message as pop-up
alert("We will learn about condition expression")

//prompt asks you to enter a value
//prompt - jo bhi output hai usko string me btayega letter , symbol , number v . 
let a = prompt("Whats your age ?") 

a = Number.parseInt(a) // converting string to number

if (a >= 16) {
  alert("Yor can apply for driving license in India")
}
else {
  alert("You cannot apply for driving license in India")
}