function heeftEenResultaat()
{
    let resultaat =1;
    return resultaat;
}
heeftEenResultaat();

let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());


function ax2bcWiskunde(x,a,b,c) 
{
    let y = (a*(x*x))+ (b*x) +c;
    return y;
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);


function wikunde2(u,h,l)
{
    let logY = Math.log(l) + h + Math.pow(u,2);
    return logY;
}

let logY1 = wikunde2(9,8,15);
console.log(logY1)

let logY2 = wikunde2(100,600,12);
console.log(logY2)

let logY3 = wikunde2(11,12,16);
console.log(logY3)
