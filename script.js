//while loop
var x = 1;
while (x <= 51){
	document.getElementById("first").innerHTML += x + ", ";
	x = x+ 2;
}

//do-while loop
var y = 2;
do{
	document.getElementById("secondline").innerHTML += y + ", ";
	y = y +2;
}while (y <= 50)

//for loop
for (var z =1; z <=4096; z=z*2){
	document.getElementById("thirdline").innerHTML += z + ", ";
}