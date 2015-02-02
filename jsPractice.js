// Common factors ------------------------------------------------------------------------------------------------
var number = 0
var count=0

for (var i = 0; i < 1000; i++) { 
    if (i%3==0 && i%5==0) {
         number+=i
         count++
         
    }
}

console.log(number)
console.log("There were "+count+" shared factors")

// Fibonaci ------------------------------------------------------------------------------------------------------
var total =0 
var previous =0
var initial = 1
var totalEvenValue = 0

while (initial+previous <400000000) {
    total= initial+previous
    previous= initial
    initial= total
    if (total%2==0){
        totalEvenValue += total
        }
    }

console.log("The sum of the even numbers in the fibonaci sequence under 40000000 is "+totalEvenValue+".")

//Find Largest Prime Factor under 1000-----------------------------------------------------------------------------------

var num = 600851475143
var largePrime = 0

for (i=999; i>2; i-=2){
    if (num%i==0 && i%3!=0 && i%5!=0 && i%7!=0 && largePrime < i) {

        for (var x = 3; x < i+1 ; x+=2) {
            if (i%x==0 && i==x) {
            largePrime = i;
            }
        }
    }
}
console.log("The largest prime factor of "+num+" is "+largePrime".")