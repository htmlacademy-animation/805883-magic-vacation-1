export default () => {
  window.onload = function () {
    const body = document.querySelector(`body`);
    body.classList.add(`loaded`);
  };
};

