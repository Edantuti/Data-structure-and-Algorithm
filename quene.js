class Quene{
    constructor(){
        this.quene = [];
    }
    checkEmpty(){
        return (this.quene.length === 0);
    }
    Enquene(element){
        this.quene.push(element);
    }
    Dequene(){
        if(this.checkEmpty() === true){
            console.log('The element are empty.');
        }
        return this.quene.shift();
    }
    display(){
        console.log(this.quene);
    }
    length(){
        console.log(this.quene.length)
    }
}

module.exports = new Quene;