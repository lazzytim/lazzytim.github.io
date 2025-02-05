function notifTimer() {
    i = 100
    
    document.getElementById('notification-1').style.transform = 'translateX(0%)'

    setInterval(() => {
        document.getElementById('loading').style.width = i + '%'
        i = i - 1
        
        if (i == 0) {
            document.getElementById('notification-1').style.transform = 'translateX(110%)'
        }
        
    }, 100)
}

// Credit: https://codepen.io/AskeK
// This part of code was taken from CodePen.io
//
// Thank you very much to AskeK for the code.

let prim = document.getElementById('cursorInside');
let seco = document.getElementById('cursorOutside');
let sx, px = sx = window.innerWidth / 2;
let sy, py = sy = window.innerHeight / 2;
const base_speed = 128;

window.addEventListener('mousemove', e => {
  
    px = e.clientX, py = e.clientY;
    prim.style.top = `${py}px`;
    prim.style.left = `${px}px`;
  
});

let render = (() => {

    if (!this.last) this.last = (new Date()).getTime();
    let delta = ((new Date()).getTime() - this.last) / 16;
    this.last = (new Date()).getTime();
    
    let dx = px - sx, dy = py - sy;
    let dir = Math.atan2 (dy, dx);
    let dis = Math.sqrt (dx*dx + dy*dy);

    let t = Math.min (dis / 500, 1);
    let speed = base_speed * ((t*t * (3.0 - 2.0 * t)) * .94 + .06) * delta;

    sx += Math.cos(dir) * speed;
    sy += Math.sin(dir) * speed;
    if (dis <= 1) { sx = px; sy = py; }

    seco.style.top = `${sy}px`;
    seco.style.left = `${sx}px`;

    requestAnimationFrame(render);
    
}); render();

// 
// 
// End of code from AskeK