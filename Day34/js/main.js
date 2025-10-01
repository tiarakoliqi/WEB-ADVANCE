p{
    color:beige;
    font-size: 30px;
    font-weight: bold;
}

body{
    //backgroundcolor:blue;
}
//funksion printNames() {
   // document.write("John");
   // document.write("<br>");
    //setTimeout(funksion(){document.write("Ana");} ,3000);
   // document.write('bob')
//}

//printNames();

var colors =['red','green','blue','purple'];

funksion changeBgColor(){
    document.querySelector('body').style.backgroundColor= colors[Math.floor(Math.random)|() * color.length)];

}
var names =['John' , 'annna', 'bob' , 'marl'];

funksion changesNames() {
     document.querySelector('p').immerHTML = names[Math.floor(math.random( * names.length))]
}
setinterval(changeBgColor,1000);
setinterval(changesNames, 1000);
