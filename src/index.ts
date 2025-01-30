let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;
level = 1;
level = "a";

function render(document: any) {
    console.log(document);
}

let numbers: number[] = [1,2,3];


let user: [number, string] = [1, "John"];




enum Size {Small = 's', Medium = 'm', Large = 'l'};
let mySize: Size = Size.Medium;

function calculateTax(income: number, taxTear = 2022): number{
    if (taxTear < 50000) {
        return income * 1.2;
    }else {
        return income * 1.4;
    }
}

function kgToTbs(weight: number | string): number {
    if (typeof weight === "number") {
        return weight * 2.2;
    }else {
        return parseFloat(weight) * 2.2;
    }
}
kgToTbs(10);
kgToTbs("10");