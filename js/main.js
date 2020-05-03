/**
 * Created by issuser on 2020/4/18.
 */
var container = document.getElementById('container');

 var arr = []
for(var i = 0;i<100;i++){
  var r = Tools.getRandom(0,255);
  var g = Tools.getRandom(0,255);
  var b = Tools.getRandom(0,255);
  var box = new Box(container,{
    backgroundColor:'rgb('+r+','+g+','+b+')',
    borderRadius:'100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  })
  arr.push(box);
}

setInterval(randomBox,2000);

randomBox();
function randomBox(){
  for(var i=0;i<arr.length;i++){
    var box = arr[i];
    box.random()
  }
}












