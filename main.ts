
const long2:Image = img`
    .212.
    12321
    .212.
`;

const bg:Image=scene.backgroundImage();

const gray:Buffer=hex`000000111111222222333333444444555555666666777777888888999999aaaaaabbbbbbccccccddddddeeeeeeffffff`;
image.setPalette(gray)

enum TYPE_OPERATION{
    ADD,
    SET,
    MINUS
}

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


game.onUpdate(function () {
    
    bg.drawRect(Math.randomRange(0,160), 0,20, 20,Math.randomRange(1,15))
    for(let i=0;i<80;i++){
        grayFrame.drawImage(long2, Math.randomRange(0, 160), Math.randomRange(0, 120))
    }

    
    //scene.backgroundImage().scroll(0, 0)
})
