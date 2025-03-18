let findmax = (a, b, c, d) =>{
    let max = a

    if (max<b){
        max = b
    }
    if (max<c){
        max = c
    }
    if (max<d){
        max = d
    }

      return `O maior número é o: ${max}`
    
}
console.log(findmax(7, 77, 777, 7777))

//----

let findmin = (a, b, c, d) =>{
    let min = a

    if (min>b){
        min = b
    }
    if (min>c){
        min = c
    }
    if (min>d){
        min = d
    }

      return `O menor número é o: ${min}`
    
}
console.log(findmin(7, 77, 777, 7777))