const button = document.getElementById('button');
let stopped = false;
 
function move ( isReturning ) {
 const width = button.parentNode.clientWidth ;
 const left = parseInt ( button.style.left , 10 ) || 0;
 if (! stopped ) {
    button.style.left = ( isReturning ? left - 1 : left + 1) + 'px';
    // isReturning: true (move to left)
    // isReturning: false (move to right)
    // button is moving to Left && button isn't at the position at the left of container 
    // || (OR)
    // button is at the position at the right of the container(Start returning to left)
    // width(404 - 2px * 2) - button.width(100) = 300
    // left === 300

    setTimeout (() => move (( isReturning && left > 0) || left === width - button.clientWidth ),10);
 };
};
 
//move(undefined/falsy/false); isReturning: false;
//Move toward right
move();
button.addEventListener('click', () => {
  // type in your code here
  stopped = !stopped;
  move();
});