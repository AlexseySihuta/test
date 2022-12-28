const getS = selector => document.querySelector(selector);

getS('.btn-edit').onclick = function () {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;
}
 
getS('.btn-save').onclick = function () {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
}

getS('.btn-style').addEventListener('click', () => {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
})
document.querySelectorAll('input[name=size]').forEach(function(e) {
    e.addEventListener('click', fontSize)
})

function fontSize() {
    getS('.top-block').style.fontSize = event.target.value;
}

let fF = document.getElementById('fontFamily');
fF.addEventListener('change', function (e) {
    getS('.top-block').style.fontFamily = this.value;
})

let colors = ['#ffe3e3', '#ffc9c9', '#ffa8a8', '#ff8787', '#ff6b6b', '#fa5252', '#f03e3e', '#e03131', '#c92a2a'];
let bgColorsMas = ['#dbe4ff', '#bac8ff', '#91a7ff', '#748ffc', '#5c7cfa', '#4c6ef5', '#4263eb', '#3b5bdb', '#364fc7']
for (let i = 0; i < getS('.colors').children.length; i++) {
    getS('.colors').children[i].style.backgroundColor = colors[i];
    getS('.colors').children[i].addEventListener('click',  function(){
        getS('.top-block').style.color = this.style.backgroundColor;
    })
}
for(i = 0; i < getS('.bgColors').children.length; i++){
    getS('.bgColors').children[i].style.backgroundColor = bgColorsMas[i]
    getS('.bgColors').children[i].addEventListener('click', function(){
        getS('.top-block').style.backgroundColor = this.style.backgroundColor;
    })
}
getS('.btn-bg-color').addEventListener('click', function(){
    getS('.bgColors').classList.remove('hide');
    if(getS('.btn-text-color').classList != 'hide'){
        getS('.colors').classList.add('hide')
    }
})

getS('.btn-text-color').addEventListener('click', function(){
    getS('.colors').classList.remove('hide');
    if(getS('.btn-bg-color').classList != 'hide'){
        getS('.bgColors').classList.add('hide')
    }
})


getS('input[name=weight]').addEventListener('click', fontWeight)
getS('input[name=italic]').addEventListener('click', italic)
function italic() {
    if(event.target.checked){
        getS('.top-block').classList.add('italic');
    }
    else{
        getS('.top-block').classList.remove('italic');
    }
}

function fontWeight(){
    if(event.target.checked){
        getS('.top-block').classList.add('bold');
    }
    else{
        getS('.top-block').classList.remove('bold');
    }
}


getS('.btn-add').onclick = function(){
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
}

const list = document.forms['form-list'];

getS('.btn-create-list').addEventListener('click',function(){
    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
    for(let i=0; i<countLi; i++){
        getS('.edit-area').value += `<li>item ${i+1}</li>`;
    }
    getS('.edit-area').value += '</ul>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
})
const table = document.forms['form-table'];

getS('.btn-create-table').addEventListener('click', () =>{
    const countTR = table.countTR.value
    const countTD = table.countTD.value
    const widthTD = table.widthTD.value
    const heightTD = table.heightTD.value
    const widthBorder = table.widthBorder.value
    const typeBorder = table.typeBorder.value
    const colorBorder = table.colorBorder.value
    getS('.edit-area').value += `<table style="border: ${widthBorder}px ${typeBorder} ${colorBorder}">`;
    for(i=0; i<countTR; i++){
        getS('.edit-area').value += `<tr>`
        for(e=0; e<countTD; e++){
            getS('.edit-area').value += `<td style="width: ${widthTD}px; height: ${heightTD}px;border: ${widthBorder}px ${typeBorder} ${colorBorder}">TD</td>`
        }
        getS('.edit-area').value += `</tr>`
    }
    getS('.edit-area').value += `</table>`
    
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
})

getS('.choose2').addEventListener('click', ()=>{
    getS('.create-list').classList.remove('hide')
    if(getS('.create-table').classList != 'hide'){
        getS('.create-table').classList.add('hide')
    }
})
getS('.choose1').addEventListener('click', ()=>{
    getS('.create-table').classList.remove('hide')
    if(getS('.create-list').classList != 'hide'){
        getS('.create-list').classList.add('hide')
    }
})