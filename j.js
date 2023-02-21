var inputW = document.getElementById('Inpwindow').style.visibility = "hidden"
const todo = document.getElementById('todo');
var check = 0; var trasf

a.onclick = () =>{  
    
    Xbrabo();
    return check = 1;
};
b.onclick = () =>{
    
    Xbrabo();
    return check = 2;
};
c.onclick = () =>{
    
    Xbrabo();
    return check = 3;
}
function Xbrabo(params) {
    var inputW = document.getElementById('Inpwindow').style.visibility = "visible";

}

conf.onclick = () => {
    console.log(check);
    if (check == 1) {
        trasf = inputW.value;
        var div = document.createElement('div')
        document.getElementById('todo').insertAdjacentElement('afterbegin', div);
    }else
    if (check == 2) {
        trasf = inputW.value;
        var div = document.createElement('div')
        document.getElementById('todo').insertAdjacentElement('afterbegin', div);
    }else
    if (check == 3) {
        trasf = inputW.value;
        var div = document.createElement('div')
        document.getElementById('todo').insertAdjacentElement('afterbegin', div);
    }
}

cancel.onclick = () =>{
    var inputW = document.getElementById('Inpwindow').style.visibility = "hidden";

}