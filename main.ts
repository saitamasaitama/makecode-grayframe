let f = 0
let delta = 0
let fps=0
let long2 = img`
    . 2 1 2 .
    1 2 3 2 1
    . 2 1 2 .
`
class Speed implements V2{

  public x:number=0;
  public y:number=0;

  public constructor(){

  }

  public Add(p:V2){
      //yをクランプ
      this.y = Math.clamp(-200,500, this.y + p.y);
      this.x = Math.clamp(-100, 100, this.x + p.x);
  }
}

class obj{
    public get X():number{  return this.pos.x >> 10;};
    public get Y(): number{ return this.pos.y >> 10; };

    public pos:V2={x:0,y:0};
    public speed:Speed=new Speed();
    public graund:boolean=true;
    public constructor(){
    }
    public update(delta:number){
        const accel: V2 = { x: 0, y: 0 };
        
        //落下
        if (!character.graund) {
            accel.y -= 10;
        }


        if (controller.player1.isPressed(ControllerButton.Left)){
            accel.x+=-49;
        }
        if (controller.player1.isPressed(ControllerButton.Right)) accel.x += 49;
        if (controller.player1.isPressed(ControllerButton.Up)){
            if(!character.graund){
                accel.y += 9;
            }
            
        }
        if (controller.player1.isPressed(ControllerButton.Down))accel.y-=49;
        
        if (controller.player1.isPressed(ControllerButton.A)) {
            if (character.graund) {
                accel.y += 450;
                character.graund = false;
            }
        }

        //摩擦
        if(character.graund){
            character.speed.x*=0.9;
        }
        //デルタ
        character.speed.Add(accel);

        if (!this.graund) {
            //着地判定
            if (this.pos.y + (this.speed.y * delta) <= 0) {
                this.graund = true;
            }
        } else {
            //離陸判定
            if (0 < this.pos.y + (this.speed.y * delta)) {
                this.graund = false;
            }
        }

        this.pos.x = Math.clamp(0, 160 << 10, this.pos.x + (this.speed.x * delta));
        this.pos.y = Math.clamp(0, 240 << 10, this.pos.y + (this.speed.y * delta));

    }
}
let character:obj=new obj();

let bg = scene.backgroundImage()
Colors.GrayPalette();
let s = sprites.create(long2, 0)
const speed = {
    x: 0,
    y: 0
}

s.y = character.pos.x
s.x = character.pos.x
s.say(":)")

function deltaUpdate(delta:number,func:(d:number)=>void){
    func(delta);
}

function GroundCheck(pos:V2,speed:V2){
    //
    if(pos.y+speed.y< 30){
        pos.y=30;
    }
}
let lasttime = game.runtime()
game.onUpdateInterval(1000, function () {
    fps = f
    f = 0
    console.log(`POS[${character.X}:${character.Y}] SPEED[${character.speed.x}:${character.speed.y}]`);
})

game.onUpdate(function () {
    delta = (game.runtime() - lasttime);
    
    //s.say(`DELTA=${delta} FPS=${fps} POS[${character.pos.x},${character.pos.y}]`)
    //s.say(`[${character.pos.x},${character.pos.y}][${character.speed.x},${character.speed.y}]`)
    lasttime = game.runtime()
    s.x=character.X;
    s.y=120-character.Y;
    character.update(delta);
    
})
//measure
