


//定义属性
HorizonLine.size = {
    WIDTH:600,
    HEIGHT: 12,
    // 在canvas中的位置
    YPOS:127
};
// 精灵图的定义
var spriteDefinition = {
    // 地面在精灵图中的位置
    HORIZON:{
        x:2,
        y:54
     }
},
    FPS=60,
imgSprite = document.getElementById('sprite');
// canvas地面绘制在画布上
// spritpos 地面在精灵图上的坐标
function HorizonLine(canvas, spritePos) {
    this.canvas = canvas;
    this.spritePos = spritePos;
    this.ctx = canvas.getContext('2d');
    this.size = HorizonLine.size;
    // 在精灵图坐标为2处和602处分别为不同的地形
    this.difrenceXpos = [this.spritePos.x, this.spritePos.x + this.size.WIDTH];
    this.xpos = [];//地面在画布中的x坐标
    this.ypos = 0;//地面在画布中的y坐标
    this.bumpThreshold = 0.5; //随机地形函数
    this.setSourceDimesions();
    this.draw();
}
// HorizonLine原型中的方法
HorizonLine.prototype = {
    setSourceDimesions: function () {
        // 地面在画布上的位置
        this.xpos = [0, this.size.WIDTH];
        this.ypos = this.size.YPOS;
    },
    //随机地形
    getRandomtype: function () {
        return Math.random() > this.bumpThreshold ? this.size.WIDTH : 0;
    },
    draw: function () {
        //要绘制的图像，图像将要被绘制的区域的左上角的坐标，图像所要绘制区域的大小，所要绘制的图像区域的左上角坐标，图像区域所要绘制的画布大小
        this.ctx.drawImage(imgSprite,
            this.sourceXpots[0], this.spritePos.y,
            this.size.WIDTH, this.size.HEIGHT,
            this.xpos[0], this.ypos,
            this.size.WIDTH, this.size.HEIGHT);
        
            this.ctx.drawImage(imgSprite,
                this.sourceXpots[1], this.spritePos.y,
                this.size.WIDTH, this.size.HEIGHT,
                this.xpos[1], this.ypos,
            this.size.WIDTH,this.size.HEIGHT);
    },
    updateXPos: function (pos,increment) {
        var line1 = pos,
            line2 = pos === 0 ? 1 : 0;
        this.xpos[line1] -= increment;
        this.xpos[line2] = this.xpos[line1] + this.size.WIDTH;
        // 若第一段地面完全移出canvas外
    if(this.xpos[line1] <= -this.size.WIDTH){
        // 则将其移动至canvas外右侧
        this.xpos[line1] += this.size.WIDTH * 2;
        // 同时将第二段地面移动至canvas内
        this.xpos[line2] = this.xpos[line1] - this.size.WIDTH;
        // 随机选择地形
        this.sourceXpots[line1] = this.getRandomtype() + this.spritePos.x;
        }
    },
    update: function (deltaTime, speed) {
        //FPS每秒传真率(刷新率)
        var increment = Math.floor(speed * (FPS / 1000) * deltaTime);
        if (this.xpos[0] <= 0) {
            // 交换地面一和地面二
            this.updateXPos(0, increment);
        } else {
            this.updateXPos(1, increment);
        }
        this.draw();
    },
    reset: function () {
        this.xpos[0] = 0;
        this.xpos[1] = this.size.WIDTH;
    }
    
};
window.onload = function () {
    var canvas = document.createElement('canvas'),
    a = document.getElementById('runner-container'),
    ctx = canvas.getContext('2d');
    canvas.id = 'c';
    canvas.width = 600;
    canvas.height = 150;
    a.appendChild(canvas);
    var h = new HorizonLine(canvas, spriteDefinition.HORIZON);
    var startTime = 0;
    (function draw(time) {
        ctx.clearRrct(0, 0, 600, 150);
        time = time || 0;
        h.update(time - startTime, 3);
        startTime = time;
        window.requestAnimationFrame(draw);
    })();
};