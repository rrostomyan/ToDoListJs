function processValue() {
    const input = document.getElementsByTagName('input')[0];
    const value = input.value.trim();
    if(!value){
        alert('Please enter value.');
        return;
    }
    const item = document.createElement('li');
    item.innerHTML = value;
    const closeIcon = document.createElement('span');
    closeIcon.innerHTML = 'x';
    closeIcon.className = 'remove';
    item.appendChild(closeIcon);
    const list = document.getElementById('toDoList');
    list.appendChild(item);
    input.value = '';
}

function onInputKeyPress() {
    if(event.key === 'Enter'){
        processValue();
    }
}

function onAddBtnClick() {
    processValue();
}

function onItemClick(){
    console.log(event);
    const target = event.target;
    if(target.className === 'remove'){
        const parent = target.parentNode;
        removeItem(parent);
        return;
    }
    target.classList.toggle('checked');
}

function removeItem(item) {
    const list = document.getElementById('toDoList');
    list.removeChild(item);
}


