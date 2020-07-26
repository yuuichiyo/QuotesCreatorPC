function born(){
    
    const yearBorn = document.getElementById('yearBorn');

document.createElement('option')
for(let i = 1900; i <= 2050; i++) {
    let option = document.createElement('option');
    option.setAttribute('value',i);
    option.innerHTML = i + '年' ;
    yearBorn.appendChild(option);
};
    
}
born();


function yearDie(){
    
    const yearDie = document.getElementById('yearDie');

document.createElement('option')
for(let i = 2000; i <= 2100; i++) {
    let option = document.createElement('option');
    option.setAttribute('value',i);
    option.innerHTML = i + '年' ;
    yearDie.appendChild(option);
};
    
}

yearDie();


