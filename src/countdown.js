module.exports = function countdown(tick) {
    let count = 10;

    let timer = setInterval(_ => {
        console.log("count" , count);
        if  (count === 0) {
            clearInterval(timer);
            console.log("done");
        }
        tick(count--);
    }, 1000);
}