
document.addEventListener('DOMContentLoaded', function() {
  new Main;
});

class Main {
  constructor() {
    this._init();
  }

  _init() {
    Pace.on('done', this._paceDone.bind(this));
  }

  _paceDone() {
    this._scroll();
  }

  _inviewAnimation(el, inview) {
    if(inview) {
        el.classList.add('inview');
    } else {
        el.classList.remove('inview');
    }
  }

  _scroll() {
    new ScrollObserver('.skill__items', this._inviewAnimation.bind(this), {rootMargin: "0px 0px -200px 0px"});
    new ScrollObserver('.top__title', this._inviewAnimation.bind(this), {rootMargin: "0px 0px -200px 0px"});
    new ScrollObserver('.appear', this._inviewAnimation.bind(this), {rootMargin: "0px 0px -200px 0px"});
    new ScrollObserver('.underline', this._inviewAnimation.bind(this), {rootMargin: "0px 0px -200px 0px"});
  }
}



