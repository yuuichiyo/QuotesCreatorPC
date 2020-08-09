// 存命期間をoptionで表示する
function born(){
    
    const lifeBegin = document.getElementById('lifeBegin');

document.createElement('option')
for(let i = 1900; i <= 2050; i++) {
    let option = document.createElement('option');
    option.setAttribute('value',i);
    option.innerHTML = i + '年' ;
    lifeBegin.appendChild(option);
};
    
}
born();


function Die(){
    
    const lifeEnd = document.getElementById('lifeEnd');

document.createElement('option')
for(let i = 2000; i <= 2100; i++) {
    let option = document.createElement('option');
    option.setAttribute('value',i);
    option.innerHTML = i + '年' ;
    lifeEnd.appendChild(option);
};
    
}

Die();


