const Counter = {
    count:0,
    increment: function() {
        //this.count++; or
        this.count+=1;
        return this.count;
    },
    reset: function() {
        this.count=0;
        return this.count;
    },
    incrementWithDelay : function(delay) {
        setTimeout(() => {
            this.count+=1;
            console.log(this.count);
        }, delay);
    }
};

console.log(Counter.increment());
console.log(Counter.increment());
//console.log(Counter.reset());
Counter.incrementWithDelay(2000);
