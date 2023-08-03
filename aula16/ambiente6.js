function fibonacci(num){
    let previous = 0
    let now = 1
    let next = 1
    for(let i = 0; i < num; i++){
        console.log(next)
        previous = now + next
        now = next
        next = previous
    }
}


fibonacci(10)