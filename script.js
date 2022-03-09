window.N = {};
N.BM = (r, s) => {
    var e = s.length;
    for (let t = 0; t < e; t++) r[s[t]] = r[s[t]].bind(r)
};
N.Lerp = (start, end, t) => {
    return (1 - t) * start + t * end
}

N.Cr = (t) => document.createElement(t);

// init
! function () {
    "use strict";
    // init circle at center
    let mouseX = window.innerWidth / 4;
    let mouseY = window.innerHeight / 4;

    class Circle {
        constructor() {
            this.el = R.Cr('div');
            this.el.classList.add('cursor-container', 'mix-blend')
            document.body.appendChild(this.el)

            let img = R.Cr('img');
            img.id = 'textWrapper';
            img.src = 'nam-hai.png'
            this.el.appendChild(img)
            let circle = R.Cr('div');
            circle.classList.add('circle');
            this.el.appendChild(circle);

            this.text = this.el.querySelector('#textWrapper');

            this.x = mouseX;
            this.y = mouseY;
            this.w = 0;
            this.h = 0;
            R.BM(this, ['move', 'update', 'shrink', "grow"])
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
            this.el.style.transform = "translate3d(" + l + 'px,' + t + 'px, 0px)'
        }

        shrink() {
            this.text.style.width = '6rem'
        }
        grow() {
            this.text.style.width = '10rem'
        }
    }

    class init {
        constructor(cercle) {
            this.wrapper = R.Cr('div');
            this.wrapper.classList.add('wrapper');
            document.body.appendChild(this.wrapper);
            let h = new h1(this.wrapper)
            h.add('Lucas ')
            h.add('<span>Nam Haï</span>')
            h.add(' TRAN')

            let i = new img(this.wrapper);
            i.hero.addEventListener('mouseenter', cercle.shrink);
            i.hero.addEventListener('mouseleave', cercle.grow);


            new h1(this.wrapper).add('- Developper -')
        }
    }

    class img {
        constructor(nodeParent) {
            this.hero = R.Cr('div');
            this.hero.classList.add('hero')
            nodeParent.appendChild(this.hero)
        }
    }

    class h1 {
        constructor(nodeParent) {
            this.h = R.Cr('h1');
            nodeParent.appendChild(this.h)
            this.h.appendChild(document.createTextNode(''));
        }
        add(content) {
            this.h.innerHTML += content
        }
    }

    new class {
        constructor() {
            let i = new Circle();
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
            new init(i)
        }
    }()

}()