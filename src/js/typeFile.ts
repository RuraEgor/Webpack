const num: Number = 34;
function fun(value: number): void {
	console.log("value", value );
}

const logClass = (id: number = 100): any => {
	// constructor.prototype.id = 34;
	return (constructor: Function) => {
		constructor.prototype.id = id;
	}
}

@logClass(200)
class User {
	
	id!: number;
	
	constructor(){
		console.log("ffffffffff",  );
	}
	
	showZn():void { console.log("rrrrrrrr",  ); }
}

let zn = new User();
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA", zn );
console.log("zn.id", zn.id );
console.log("zn.id", zn.showZn() );

let ttt = {
	name: 'Tom',
	show(n: number = 50){ console.log("nnn", n ); }
}

setTimeout( () => { console.log("pppppppppppppp", ttt ); }, 1000);


const addFuelToRocket = (target: Function) => {
	console.log("ffffffffff",  );
	
	// return class extends target {
	// 	zn: number = 100;
	// }
}



@addFuelToRocket
class Rocket {}


const rocket = new Rocket()
// console.log((rocket).fuel) // 100
console.log("rocket", rocket );
console.log("==============================================================================",  );


interface IProp {
	name: string
	age: number
	show(text: string): string
}

interface IProp2 {
	name2?: string
}

class Mon<T> implements IProp, IProp2 {
	name: string = 'Tom';
	name2: string = 'Tom 2';
	age: number = 20;
	
	constructor(work: T){
		console.log("work -", work );
	}
	
	show(tt: string): string { return tt; }
}

let vvv = new Mon<string>('Super text');
console.log("vvv", vvv );


//==========
function loop<S,N>(name: S, age: N){
	console.log("vvvvvvv", name, ' ', age );
}

loop<string, number>('Alex', 34);


console.log("==============================================================================",  );

interface IFun<R> {
	(name: R): R;
}

// function someRain(name: string){ return name }

let rain: IFun<string> = (name: string) => { return name }

// let res2 = rain('Maradona')
// console.log("res2", res2 );

function someFunPr2(name: string): IFun<string>{
	return rain;
}

let zn22 = someFunPr2('Tom');
console.log("zn22", zn22('ffffffffff') );

console.log("========================",  );


class Rain<T> {
	age: number = 34;
	constructor(public name: T){}
}

function someFunPr(name: string): Rain<string>{
	return new Rain(name);
}

let zn2 = someFunPr('Alex');
console.log("zn", zn2 );


console.log("==============================================================================",  );

interface IPol<T, R> {
	name: T
	age: R
}

const IPoll: IPol<string, number> = {
	name: 'Tom',
	age: 45
}

console.log("IPoll", IPoll );

console.log("==============================================================================",  );

abstract class Pol {
	abstract age: number;
	name: string = "Pol";
	
	abstract show(name: string): string
}

class Tom extends Pol {
	
	constructor(public name: string, public age: number) {
		super();
	}
	
	show(zn: string): string {
		return zn;
	}
}

let ppp = new Tom('Tom', 34);
console.log("ffffffffffff", ppp.show('root') );
console.log("ppp", ppp );


console.log("***********************************************************************",  );
// interface ICheckFile {
// 	name: string
// 	age: number
// }

const masPr: ICheckFile = {
	name: 'Tom',
	age: 2323
}

console.log("ICheckFile", masPr );
console.log("***********************************************************************",  );


console.log("==============================================================================",  );

export  {num, fun};