function Car(name, type) {
    this.name = name;
    this.type = type;
    this.drive = function() {
        alert(`Go!`);
    };
}

let SM5 = new Car('SM5', 'Sedan');
SM5.drive();
Car.prototype.horn = function(){
    alert(`Boooom!`);
}
SM5.horn();
console.log(SM5);