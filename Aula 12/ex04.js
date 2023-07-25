var age = 2
console.log(`You have ${age} years.`)
if (age < 16){
    console.log("You are a minor. Don't vote.")
}

else if (age < 18 || age > 65){
    console.log('Optional vote.')
}

else{
    console.log('Mandatory vote.')
}