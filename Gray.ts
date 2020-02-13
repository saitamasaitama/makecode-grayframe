namespace Gray{
  export enum TYPE_OPERATION{
    ADD,
    SET,
    MINUS
  }

  export function drawImage(src:Image,destx:number=0,desty:number=0,operation:Gray.TYPE_OPERATION =Gray.TYPE_OPERATION.ADD){
    for (let y = 0; y < src.width; y++){
      for(let x=0;x<src.width;x++){
        const srcp:number = src.getPixel(x, y);
        const destp: number = bg.getPixel(destx + x, desty + y);

        switch(operation){
          case Gray.TYPE_OPERATION.ADD:
              bg.setPixel(destx + x, desty + y, this.AddOperation(srcp, destp));
          break;
          default:break;
        }
      }
    }
  }

  //以降　関数追加
}
