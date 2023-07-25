var now = new Date()
var hour = now.getHours()
console.log(`Now, its ${hour} hours. `)
if (hour < 12){
    console.log('Good Morning!')
}
else if (hour > 12 && hour <= 16){
    console.log('Good Evening!')
}
else{
    console.log('Good Night!')
}