/**
 * Class private instance fields
 */

class Counter {
    i = 0; // by default all class fields are public, now in es2022 - we can declare private varilable by `Pound` key

    #j = 0; //private variable 

    print(){
        console.log(this.i)
        this.#j
    }

}

let c = new Counter()

 console.log(c)