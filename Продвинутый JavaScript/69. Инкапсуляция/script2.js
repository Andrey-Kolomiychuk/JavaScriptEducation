// class Example {
//     constructor(prop){
//         this.prop = prop;
//     }
 
//     showThis = () => {
//         console.log(this)
//     }
 
//     doSmth(){
//         console.log('Действие');
//         return this.showThis;
//     }
// }
 
// const func = new Example('smth').doSmth();
// func();


// class Example {
//     constructor(prop){
//         this.prop = prop;
//     }
 
//     showThis() {
//         console.log(this)
//     }
 
//     doSmth(){
//         console.log('Действие');
//         return this.showThis;
//     }
// }
 
// const func = new Example('smth').doSmth();
// func();

class Example {
    constructor(prop){
        this.prop = prop;
    }
 
    showThis() {
        console.log(this);
    }
}
 
new Example('smth').showThis();