window.R = {};
R.BM = (r, s) => {
    var e = s.length;
    for (let t = 0; t < e; t++) r[s[t]] = r[s[t]].bind(r)
};
R.Lerp = (start, end, t) => {
    return (1 - t) * start + t * end
}

// init
! function () {
    "use strict";
    // init circle at center
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    class Circle {
        constructor() {
            this.el = document.querySelector('.circle');

            this.x = mouseX;
            this.y = mouseY;
            this.w = 30;
            this.h = 30;
            R.BM(this, ['move', 'update'])
            setInterval(this.move, 1000 / 60);
        }

        move() {
            this.x = R.Lerp(this.x, mouseX, 0.1);
            this.y = R.Lerp(this.y, mouseY, 0.1);
            this.update()
        }
        update() {
            var l = this.x - this.w / 2;
            var t = this.y - this.h / 2;
            document.querySelector('.circle').style.transform = "translate3d(" + l + 'px,' + t + 'px, 0px)'
        }
    }



    new class {
        constructor() {
            let i = new Circle();
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
        }
    }()

}()