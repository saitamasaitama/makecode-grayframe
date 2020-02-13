let long2 = img`
    . 2 1 2 .
    1 2 3 2 1
    . 2 1 2 .
`;


let bg:Image = scene.backgroundImage()
Colors.GrayPalette();

const s:Sprite=sprites.create(img`
    ....f
    f..f.
    fff..
    fffff
`);

s.y=0;
s.x=30;
s.say(":)")

game.onUpdate(function () {
    s.x+=speed.x;
    s.y+= speed.y;
    speed.y+=0.1/60.0;
    for (let index = 0; index < 80; index++) {
        Gray.drawImage(long2, Math.randomRange(0, 160), Math.randomRange(0, 120))
    }
})


