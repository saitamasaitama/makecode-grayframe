let long2 = img`
    . 2 1 2 .
    1 2 3 2 1
    . 2 1 2 .
`
let bg = scene.backgroundImage()
Colors.GrayPalette();
enum TYPE_OPERATION{
    ADD,
    SET,
    MINUS
}

//let obj=JSON.parse(settings.readString("s"));
console.log(obj)
/*
settings.writeString("s", JSON.stringify([
    12345,
    99999
]))
*/
const s:Sprite=sprites.create(img`
    ....f
    f..f.
    fff..
fffff`)
s.y=0;
s.x=10;

//重力エミュレート


s.say(":)")

game.onUpdate(function () {
    s.x+=speed.x;
    s.y+= speed.y;
    speed.y+=0.1/60.0;
    //    bg.drawRect(Math.randomRange(0, 160), 0, 20, 20, Math.randomRange(1, 15))
    for (let index = 0; index < 80; index++) {
        Gray.drawImage(long2, Math.randomRange(0, 160), Math.randomRange(0, 120))
    }
})


