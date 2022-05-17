document.querySelector("#speed").addEventListener("change",function(){
    var v=document.querySelector("#speed").value;


var m = 1.67 * (10**-27);
var c = 3 * (10 ** 8);
// var c = 0

// (a) E = mc^2

var Eo = m * (c ** 2)
console.log("Eo = "+Eo.toFixed(13)+" j");

var Rest_energy = (Eo/1.6)*(10**-11/10**-19)* 1000000  ;
var res1=document.createElement("p");
res1.innerText="(a) Rest Energy = " + Rest_energy.toFixed(0) +" MeV"



// (b) Total_energy :
//    ->  1 MeV = 1.602×10^-19 JOULE 

var Total_energy = (((Eo)/(1-(v*v/c*c))**0.5)/1.6)*(10**-11/10**-19) * 1000000

var res2=document.createElement("p");
res2.innerText="(b) Total_energy = "+ Total_energy.toFixed(0)  +" MeV"
console.log();

// (c) kinetic energy = total energy - rest energy 
var res3=document.createElement("p");
res3.innerText="(c) Kinetic energy = "+ (Total_energy - Rest_energy) +" MeV"




// (d) Rest mass.

 v = c ;

var rest_mass =  (m/((1-(v*v/c*c))**0.5)) ;

if( isNaN(rest_mass))
{
  rest_mass = 0
}
var res4=document.createElement("p");
res4.innerText="(d) Rest mass = "+(rest_mass)+" MeV  (v=c) "
document.querySelector("#result").innerText=""
document.querySelector("#result").append(res1,res2,res3,res4)

// Photons have no inertial mass and no relativistic mass.


})


document.querySelector("#Q2").addEventListener("click",function(){
    var H=document.querySelector("#Field").value;
    var L=document.querySelector("#wavelength").value;


    var C= 3*(10**8);

    var e= 1.602176634 * (10**-19);

    var m= 9.1093837015 * (10**-31);

    // formulae = (L^2/C)+(eH/4*pi*m)

    var ans = "Separation between Zeeman components of the spectral line : "+((L**2)*e*H)/(C*4*Math.PI*m)
    document.querySelector("#result2").innerText=""
    document.querySelector("#result2").append(ans);

})



document.querySelector("#Q3").addEventListener("click",function(){
    var H=document.querySelector("#Field2").value;
    var L=document.querySelector("#L").value;
    var delta_L=document.querySelector("#delta_L").value;
    var c=3*(10**8);

    // formulae: e/m = (delta_L*4*pi*c)/(((delta_L)**2)*H)

    var ans="the e/m ratio for an electron : "+(delta_L*4*Math.PI*c)/(((delta_L)**2)*H)


    document.querySelector("#result3").innerText=""
    document.querySelector("#result3").append(ans);
})