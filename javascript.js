let cube = document.querySelector('.cube');
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
