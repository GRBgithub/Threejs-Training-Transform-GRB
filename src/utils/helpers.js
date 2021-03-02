const helpers = {
  getrandomInt: (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  },
  randomizeArray: (array) => {
    var i, j, tmp;
    for (i = array.length - 1; i > 0; i--) {
      j = helpers.getrandomInt(i + 1);
      tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
    return array;
  },
  generateKey: (prefixer) => {
    return `${prefixer}_${new Date().getTime()}`;
  },
  lerp: (a, b, n) => (1 - n) * a + n * b,
  getMousePos: (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.clientX || e.clientY) {
      posx = e.clientX;
      posy = e.clientY;
    }
    return { x: posx, y: posy };
  },
  getSiblings: (e) => {
    let siblings = [];
    if (!e.parentNode) {
      return siblings;
    }
    let sibling = e.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  },
};
export default helpers;
