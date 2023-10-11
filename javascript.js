let cube1 = document.getElementById('cube1')
let cube2 = document.getElementById('cube2')
/*
let countX = 1;
let countY = 1;
let iterations = 0;
let prevMousePosX;
let prevMousePosY;
cube.style.userSelect = 'none';
cube.addEventListener('mousemove', event => {
    if (event.buttons == 1){
        let mousePosX = ((event.clientX) - 364);
        let mousePosY = ((event.clientY) - 202);
        if (iterations > 0){
            if(mousePosX > prevMousePosX) countX += 1;
            else if (mousePosX < prevMousePosX) countX -= 1;
            if(mousePosY > prevMousePosY) countY -= 1;
            else if (mousePosY < prevMousePosY) countY += 1;
        }
        if (countX > 360 || countX < -360) countX = 0;
        if (countY > 360 || countY < -360) countY = 0;
        cube.style.transform = `rotateY(${countX}deg) rotateX(${countY}deg)`;
        iterations += 1;
        prevMousePosX = mousePosX;
        prevMousePosY = mousePosY;
    }   
});
*/
let wPressed = .9;
let sPressed = .9;
let dPressed = 20;
let aPressed = -20;
let timeForMove = true;
function moveForward(){
    timeForMove = false;
    setTimeout(function(){
        timeForMove = true;
        wPressed+=.1
        if(sPressed > 0){sPressed+=.1};
        cube1.style.transform = `scale(${1 * wPressed}) translateX(${1 * aPressed}px)`
        cube2.style.transform = `scale(${1 * wPressed}) translateX(${1 * aPressed}px)`
    }, 100);
}
function moveBack(){
    timeForMove = false;
    setTimeout(function(){
    timeForMove = true;
    sPressed-=.1
    if(wPressed > 0){wPressed-=.1};
    cube1.style.transform = `scale(${1 * sPressed}) translateX(${1 * aPressed}px)`
    cube2.style.transform = `scale(${1 * sPressed}) translateX(${1 * aPressed}px)`
}, 100);
}
function moveRight(){
    timeForMove = false;
    setTimeout(function(){
    timeForMove = true;
    dPressed+=20;
    aPressed = (dPressed);
    cube1.style.transform = `translateX(${1 * dPressed}px)`
    cube2.style.transform = `translateX(${1 * dPressed}px)`
}, 100);
}

function moveLeft(){
    timeForMove = false;
    setTimeout(function(){
    timeForMove = true;
    aPressed-=20;
    dPressed = (aPressed);
    cube1.style.transform = `translateX(${1 * aPressed}px)`
    cube2.style.transform = `translateX(${1 * aPressed}px)`
}, 100);
}

document.addEventListener('keydown', event => {
    if(event.code == 'KeyW'){
        if(timeForMove == true)moveForward();
    }
    else if(event.code == 'KeyS'){
        if(sPressed>0.21){
            if(timeForMove == true)moveBack();
    }
    }
    else if(event.code == 'KeyD'){
            if(timeForMove == true)moveRight();
    }
    else if(event.code == 'KeyA'){
            if(timeForMove == true)moveLeft();
    }
})

