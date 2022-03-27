function task(num,time,cb){
    setTimeout(() => {
        console.log(`Task ${num} done`)
        return cb();
    }, time);
}

let taskArr = [4000,5000,1000,2000,1500];

function iteratorSeries(taskArr,done){
    function iterator(index){
        if(index===taskArr.length){
            return done()
        }
        task(index,taskArr[index],()=>{
            iterator(index+1)
        })
    }
    iterator(0)
}

iteratorSeries(taskArr,()=>{
    console.log("\nAll tasks completed")
})
