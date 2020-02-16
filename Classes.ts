interface V2{
    x: number,
    y: number,
}

interface V3{
    x:number,
    y:number,
    z:number    
}
interface Transform{
    positin():V3;
    rotation(): V3;
}

function updateDelta(delta:number,func:(d:number)=>void){
    func(delta);
}


