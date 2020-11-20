let cloned = {
    name:"Conan",
    lastName:"Obraen",
    birth: new Date(1984, 12, 11),
    age:23,
    get fullName(){
        return this.name + " "+ this.lastName;
    },
    set fullName(value){
        [this.name,this.lastName] = value.split(" ");
    },
    say(){
        console.log("Hello my full name is "+ this.fullName)
    }
};

let sayHi = function (){
    console.log("Hello Alex");
}

let sayBye = function(){
    console.log("bye bye!!!");
}


let dfd ="Awesome";
export default dfd;
export{cloned as conan, sayHi,sayBye}
