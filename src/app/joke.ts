export class Joke {
	public setup: string;
	public punchline: string;
	public hide: boolean;

	constructor(setup:string,punchline:string,hide:boolean) { 
	this.setup = setup;
	this.punchline = punchline;
	this.hide = true;
	}

	toggle(){
	console.log("toggle called")
		this.hide = !this.hide
	}
}

let joke = new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)",true);

console.log("jsokesf",joke)