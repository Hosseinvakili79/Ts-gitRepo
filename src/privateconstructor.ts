class Singleton{
    private static instance :Singleton

    private constructor(){
        console.log("singlton instance is created");
        
    }

    public static getInstance():Singleton{
        if(!Singleton.instance){
            Singleton.instance=new Singleton();
        }
        return Singleton.instance;

    }
    public showMessage():void{
        console.log("this is singlton instance");
        
    }
}
//const s1 =new Singleton()

let s1 =Singleton.getInstance()
s1.showMessage()
let s2=Singleton.getInstance()
s2.showMessage()
console.log(s1 ===s2);
