const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="mainContainer">
    <div id="jokes"></div>
    <div id="lyrics"></div>
  </div>`;
};

export default domBuilder;
