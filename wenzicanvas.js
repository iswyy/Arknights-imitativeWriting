function wenzicanvas(ele1,ele2,num) {
    var message=ele1;
    var canvas=ele2;
     // 配置项
     var color="#fff";//粒子颜色
     // 文字大小
     var fontSize=35;
     // 粒子数量
     var amount=num;
     // 粒子大小
     var size=0.5;
     var initialDisplacenent=500;
     var initialVelocity=50;
     var velocityRetention=0.95;
     var settleSpeed=1;
     var fleeSpeed=1;
     var fleeDistance=50;
     var flee=true;
     var scatterVelocity=3;
     // var scatter=true;
     
     // 获取上下文对象
     const ctx=canvas.getContext('2d');
     // 粒子集合，长度为粒子数量
     var points=[];
     var MOUSE={
         x:0,
         y:0
     }
     function Point(x,y,r,g,b,a){
         var angle=Math.random()*6.28;
         this.destX=x;
         this.destY=y;
         this.originalR=r;
         this.originalG=g;
         this.originalA=a;
         this.x=canvas.width/2-x+(Math.random()-0.5)*initialDisplacenent;
         this.y=canvas.height/2-y+(Math.random()-0.5)*initialDisplacenent;
         this.velx=initialVelocity*Math.cos(angle);
         this.vely=initialVelocity*Math.sin(angle);
         this.targetX=canvas.width/2-x;
         this.targetY=canvas.height/2-y;
         this.r=r;
         this.g=g;
         this.b=b;
         this.a=a;
     
         this.getX=function(){
             return this.x;
         }
     
         this.getY=function(){
             return this.y;
         }
         this.resetTarget=function(){
             this.targetX=canvas.width/2-this.destX;
             this.targetY=canvas.height/2-this.destY;
         }
         this.fleeFrom=function(x,y){
             this.velx -= ((MOUSE.x-this.x)*fleeSpeed/10);
             this.vely -= ((MOUSE.y-this.y)*fleeSpeed/10);
         }
         this.settleTo=function(x,y){
             this.velx+=((this.targetX-this.x)*settleSpeed/100);
             this.vely+=((this.targetY-this.y)*settleSpeed/100);
             this.velx -=this.velx*(1-velocityRetention);
             this.vely -=this.vely*(1-velocityRetention);
         }
         this.scatter=function(){
             var unit=this.unitVecToMouse();
             var vel=scatterVelocity*10*(0.5+Math.random()/2);
             this.velx = -unit.x*vel;
             this.vely= -unit.y*vel;
         }
         this.move=function(){
             if(this.distanceToMouse()<=fleeDistance){
                 this.fleeFrom(MOUSE.x,MOUSE.y);
             }else{
                 this.settleTo(this.targetX,this.targetY);
             }
             if(this.x+this.velx<0|| this.x+this.velx>=canvas.width){
                 this.velx *= -1;
             }
             if(this.y+this.vely<0|| this.y+this.vely>=canvas.height){
                 this.vely *= -1;
             }
             this.x+=this.velx;
             this.y+=this.vely;
         }
         this.distanceToTarget=function(){
             return this.distanceTo(this.targetX,this.targetY);
         }
         this.distanceToMouse=function(){
             return this.distanceTo(MOUSE.x,MOUSE.y);
         }
         this.distanceTo=function(x,y){
         return Math.sqrt((x-this.x)*(x-this.x)+(y-this.y)*(y-this.y));
         }
         this.unitVecToTarget=function(){
             return this.unitVecTo(this.targetX,this.targetY);
         }
         this.unitVecToMouse=function(){
             return this.unitVecTo(MOUSE.x,MOUSE.y);
         }
         this.unitVecTo=function(x,y){
             var dx=x-this.x;
             var dy=y-this.y;
             return {
                 x:dx/Math.sqrt(dx*dx+dy*dy),
                 y:dy/Math.sqrt(dx*dx+dy*dy)
             };
         }
     }
         if(flee){
             window.addEventListener('mousemove',function(event){
             MOUSE.x=event.clientX;
             MOUSE.y=event.clientY;
             });
         }
         // 粒子的位置
         function resizeCanvas(){
             canvas.width=window.innerWidth/4;
             canvas.height=window.innerHeight/6;
         }
         // 设置文字基本属性
         function adjustText(){
             ctx.fillStyle=color;
             // 设置或返回在绘制文本时使用的当前文本基线
             ctx.textBaseline="middle";
             ctx.textAlign='center';
             ctx.font=fontSize+"px Arial";
             // 在x，y位置绘制被填充文本
             ctx.fillText(message, canvas.width / 2, canvas.height / 2);
            //  计算文字宽度
             var textWidth=ctx.measureText(message).width;
             if(textWidth == 0){
                 return;
             }
             var minX=canvas.width/2-textWidth/2;
             var minY=canvas.height/2-fontSize/2;
             // 返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据。
             var data=ctx.getImageData(minX,minY,textWidth,fontSize).data;
             var isBlank=true;
             for(var i=0;i<data.length;i++){
                 if(data[i] !=0){
                     isBlank=false;
                     break;
                 }
             }
             if(!isBlank){
                 var count=0;
                 var curr=0;
                 var num=0;
                 var x=0;
                 var y=0;
                 var w=Math.floor(textWidth);
                 points=[];
                 // 循环添加粒子到指定数量
                 while(count<amount){
                     while(curr==0){
                         num=Math.floor(Math.random()*data.length);
                         curr=data[num];
                     }
                     num=Math.floor(num/4);
                     x=w/2-num%w;
                     y=fontSize/2-Math.floor(num/w);
                     points.push(new Point(x,y,data[num*4],data[num*4+1],data[num*4+2],data[num*4+3]));
                     curr=0;
                     count++;
                 }
             }
         }
         function init(){
             resizeCanvas()
             adjustText();
             // 动画
             window.requestAnimationFrame(animate);
         }
         function animate(){
             update();
             draw();
         }
         function update(){
             var point;
             for(var i=0;i<points.length;i++){
                 point=points[i];
                 point.move();
             }
           }
         //   画出图案
           function draw(){
             //   清理指定区域
               ctx.clearRect(0,0,canvas.width,canvas.height);
               var point;
             //   循环绘制出粒子，粒子个数为points的长度
               for(var i=0;i<points.length;i++){
                   point=points[i];
                   ctx.fillStyle="rgba("+point.r+","+point.g+","+point.b+","+point.a+")";
                   ctx.beginPath();//清除之前的描绘路径，重新开始新的草稿
                 //  getContext方法 arc方法创建弧，曲线参数为中心x坐标，y坐标，半径，起始角，弧度角
                   ctx.arc(point.getX(),point.getY(),size,0,2*Math.PI);
                 //   getContext方法  进行填充
                   ctx.fill();
               }
             //   js动画  比使用定时器性能要更好
               window.requestAnimationFrame(animate);
           }
           init();
}
   