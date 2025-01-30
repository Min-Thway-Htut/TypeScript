type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag:() => {},
    resize:() => {}
}

type Quantity = 50 | 100;
let quantity: 50 | 100 = 50;

function greet(name: string) {
    if(name)
    console.log(name.toUpperCase());
    else
    console.log("Hola");
}

console.log(null);


type Customer = {
    birthday: Date;
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {birthday: new Date()};
}