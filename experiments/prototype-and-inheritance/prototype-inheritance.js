function Car(name, type) {
    this.name = name;
    this.type = type;
    this.drive = function() {
        alert(`Go!`);
    };
}

let SM5 = new Car('SM5', 'Sedan');

Car.prototype.horn = function(){
    alert(`Boooom!`);
}

function ElectronicCar() {
    this.engineType = "electrocity";
}

ElectronicCar.prototype = new Car;

let teslaModel3 = new ElectronicCar();

