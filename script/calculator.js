var allButton=document.querySelectorAll(".digit");
allButton.forEach(ele=>{
    ele.addEventListener("click",function(){
        showDigit(ele.innerText);
    })
})
var allButton=document.querySelectorAll(".ope");
allButton.forEach(ele=>{
    ele.addEventListener("click",function(){
        showDigit(ele.innerText);
    })
})



function showDigit(num){
    var string=localStorage.getItem("string") || "";
    string+=num;
    document.querySelector("#screen").innerText="";
    document.querySelector("#screen").innerText=string;
    localStorage.setItem("string",string)
    
}


document.querySelector(".equal").addEventListener("click",function(){
    var string=localStorage.getItem("string") || "";
    document.querySelector("#screen").innerText="";
    // localStorage.clear();
    document.querySelector("#screen").innerText=eval(string);
    localStorage.setItem("string",eval(string))
})



document.querySelector(".red").addEventListener("click",function()
{
    localStorage.clear();
    window.location.reload();
})
