global.setHTML = (html, shouldReturn = false) => {
  let domString = String.raw({ raw: html })
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace(/>\s+</g, "><");

  if (shouldReturn) {
    return domString;
  }

  document.body.innerHTML = domString;
};

document.fonts = {
  ready: async () => {
    return true;
  },
};

beforeEach(() => {
  jest.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => cb());
});
