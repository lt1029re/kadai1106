const day = parseInt(process.argv[3])

if (day % 25 === 0) {
    console.log('あなたは陽気な性格です')
 } else if (day % 25 === 1) {
     console.log('あなたは内気な性格です')
} 　else if (day % 25 === 2) {
    console.log('あなたは素敵な性格です')
}