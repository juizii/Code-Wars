// Write a class Block that creates a block (Duh..)

// Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

class Block{

    constructor(data){
      this.width = data[0];
      this.length = data[1];
      this.height = data[2];
    }
    
    getWidth(){
      return this.width;
    }
    
    getLength(){
      return this.length;
    }
    
    getHeight(){
      return this.height;
    }
    
    getVolume(){
      return this.width * this.length * this.height;
    }
    
    getSurfaceArea(){
      return 2*(this.length * this.width) + 2*(this.length * this.height) + 2*(this.height * this.width);
    }
  }