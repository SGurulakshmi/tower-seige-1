class GreenBox extends Box{
    constructor(x,y){
        super(x,y,20,20)
    }
    display(){
        fill("Green")
        super.display();
    }
}