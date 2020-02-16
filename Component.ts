namespace Component{
    export interface ComponentInterface{
        owner: Obj;
    }

    export const enum TYPE_COMPONENT{
        SPRITE,
        RIGIDBODY
    }
}


abstract class Component {
    public owner: Obj;
    public static ComponentId():number{return 0;};
}

class SpriteComponent extends Component {
    public static ComponentId(){return 2;}
}

class RigidBodyComponent extends Component {
    public static ComponentId() { return 3; }
}


class Obj {
    public getComponent<T>() {

    }
    public addComponent(c: Component) {
        c.owner = this;
    }
}

const ComponentCache: {
    [id:number]: Component[]
} = {

};