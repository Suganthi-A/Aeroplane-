window.onload = function() {
    const airplane = document.getElementById('airplane');
    let position = -100;
    const screenWidth = window.innerWidth;

    function moveAirplane() {
        position += 5; 
        airplane.style.left = position + 'px';

        if (position < screenWidth) {
            requestAnimationFrame(moveAirplane);
        } else {
            position = -100; 
            requestAnimationFrame(moveAirplane);
        }
    }

    moveAirplane();
}