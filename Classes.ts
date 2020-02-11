// Add your code here
interface V3{
    x:number,
    y:number,
    z:number    
}
interface Transform{
    positin():V3;
    rotation(): V3;
}


abstract class Component{
    public owner:Obj;
}

class SpriteComponent extends Component{

}

class RigidBodyComponent extends Component{

}


class Obj{
    public getComponent<T>() {

    }
    public addComponent(c:Component){
        c.owner=this;
    }
}

const Components:{
    [key:string]:string
}={

};