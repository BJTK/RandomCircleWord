/**
 * Created by issuser on 2020/4/18.
 */
function Box(parent,options) {
   options = options||{}
        this.backgroundColor = options.backgroundColor || 'red';
         this.borderRadius = options.borderRadius || '100%';
        this.width = options.width || 100;
        this.height = options.height || 100;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.div1 = document.createElement('div');
        this.div1.innerHTML = getRandomText();

       parent.appendChild(this.div1);

       this.parent = parent;

      this.init();
}

 Box.prototype.init = function(){
  var div = this.div1;
  div.style.backgroundColor = this.backgroundColor;
  div.style.borderRadius = this.borderRadius;
  div.style.width = this.width + 'px';
  div.style.height = this.height + 'px';
  div.style.left = this.x + "px";
  div.style.top = this.y + "px";
  div.style.position = 'absolute';
 }
 Box.prototype.random = function(){
   var  x = Tools.getRandom(0,this.parent.offsetWidth/this.width - 2)*this.width;
   var  y = Tools.getRandom(0,this.parent.offsetHeight/this.height - 2)*this.height;
    this.div1.style.left  = x + 'px';
    this.div1.style.top = y + 'px'
 }

//随机生成文字
function getRandomText(){
  eval( "var word=" +  '"\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16)+'"')
  return word
}
















