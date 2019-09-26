import Component from '@ember/component';
import layout from '../../templates/components/dds/jump-to';

export default Component.extend({
  layout,
  
  actions: {
    onChange(target) {
      if(target && target != "") {
        this.scrollToTarget("#"+target, 0, 300);
      }
    },
  },

  scrollToTarget(target, offset, duration) {
    const targetPos = this.getElemDistance(document.querySelector(target)) + offset;
    this.animateScroll(targetPos, duration)
  },

  getElemDistance( elem ) {
    let location = 0;
    if (elem.offsetParent) {
        do {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        } while (elem);
    }
    return location >= 0 ? location : 0;
  },

  animateScroll(targetPos, duration) {
    if (window.scrollY != undefined) {
    const self = this;
    const startPos = window.scrollY;
    const speed = 20;
    let time = 0;
    const animate = function () {
      time += speed;
      window.scrollTo(0, self.getAnimationPos(time, startPos, targetPos - startPos, duration));
      if (time < duration) {
        setTimeout(animate, speed);
      }
    };
    animate();
    } else {
      window.scrollTo(0, targetPos);
    }
  },

  getAnimationPos(time, startPos, endPos, duration) {
    time /= duration / 2;
    if (time < 1) {
      return endPos / 2 * time * time + startPos;
    }
    time--;
    return -endPos / 2 * (time * (time - 2) - 1) + startPos;
  }
});
