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

