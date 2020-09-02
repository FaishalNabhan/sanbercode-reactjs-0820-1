// Soal 1
console.log('-----SOAL 1-----');
// Release 0

console.log('-Release 0-')
class Animal {
    constructor(name, legs=4, cold_blooded=false) {
      this.name = name;
      this.legs = legs;
      this.cold_blooded = cold_blooded;
    }
    get animalname () {
      return this.name;
    }
    set animalname (x) {
      this.name = x
    }
  }
  
  var sheep = new Animal("shaun");
   
  console.log(sheep.name)
  console.log(sheep.legs)
  console.log(sheep.cold_blooded)

// Release 1

console.log('-Release 1-');
class Ape extends Animal {
  constructor (name, cold_blooded) {
   super(name, cold_blooded);
  }
  yell () {
    console.log(`${this.name}`);
    console.log(2);
    console.log(`${this.cold_blooded}`);
    console.log(`Auooo`);
  }
}

console.log('Ape')
var sungokong = new Ape("kera sakti")
sungokong.yell()

class Frog extends Animal {
    constructor (name, legs, cold_blooded) {
      super(name, legs, cold_blooded);
    }
    jump () {
        console.log(`${this.name}`);
        console.log(`${this.legs}`);
        console.log(`${this.cold_blooded}`)
        console.log(`hop hop`);
    }
  }

console.log('Frog :')
var kodok = new Frog("buduk")
kodok.jump()

// Soal 2

console.log('-----SOAL 2-----');
class Clock {
    constructor(template) {
      this.template = template;
    } 
    timer;
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop = () => {
      clearInterval(timer);
    };
  
    start = () => {
      this.render();
      setInterval(this.render.bind(this), 1000);
    }
  }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start();