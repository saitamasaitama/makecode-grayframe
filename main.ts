let long2 = img`
    . 2 1 2 .
    1 2 3 2 1
    . 2 1 2 .
`
let bg = scene.backgroundImage()
const gray:Buffer=hex`000000111111222222333333444444555555666666777777888888999999aaaaaabbbbbbccccccddddddeeeeeeffffff`;
image.setPalette(gray)
enum TYPE_OPERATION{
    ADD,
    SET,
    MINUS
}

let obj=JSON.parse(settings.readString("s"));

console.log(obj)

settings.writeString("s", JSON.stringify([
    12345,
    99999
]))

class grayFrame{
    private buff:Image=img``;

    public constructor(){
        //this.buff=image.create(160,108)
    }

    //加算する
    public static drawImage(src:Image,destx:number=0,desty:number=0,operation:TYPE_OPERATION =TYPE_OPERATION.ADD){
        for (let y = 0; y < src.width; y++){
        for(let x=0;x<src.width;x++){
                const srcp:number = src.getPixel(x, y);
                const destp: number = bg.getPixel(destx + x, desty + y);
                
                switch(operation){
                    case TYPE_OPERATION.ADD:
                        bg.setPixel(destx + x, desty + y, this.AddOperation(srcp, destp));
                        break;
                    default:break;
                }

                
            }
        }
    }

    private static AddOperation(a:number,b:number){return Math.min(a+b,0xf);}
    private static MinusOperation(a: number, b: number){return Math.max(a-b,0x1)}
    private static SetOperation(a: number, b: number) {return b;}

}

const s:Sprite=sprites.create(img`
    ....f
    f..f.
    fff..
fffff`)
s.y=0;
s.x=10;

//重力エミュレート

const speed={
    x:0,
    y:0,
}

s.say(":)")

game.onUpdate(function () {
    s.x+=speed.x;
    s.y+= speed.y;

    speed.y+=0.5/60.0;

    bg.drawRect(Math.randomRange(0, 160), 0, 20, 20, Math.randomRange(1, 15))
    for (let index = 0; index < 80; index++) {
        grayFrame.drawImage(long2, Math.randomRange(0, 160), Math.randomRange(0, 120))
    }
})
