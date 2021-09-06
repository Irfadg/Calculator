function buttonclick(val){
   let n=document.querySelector(".output").value =document.querySelector(".output").value+val;
}
function clearData() {
    let n=document.querySelector(".output").value=" "
}
function resoltCarryer() {
    var displayText=document.querySelector(".output").value
    var finalResult= eval(displayText)
    displayText=document.querySelector(".output").value=finalResult
}
