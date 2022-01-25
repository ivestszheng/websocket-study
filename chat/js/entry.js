((doc, storage, location) => {
  const oUername = doc.querySelector("#username");
  const oEnterBtn = doc.querySelector("#enter");

  const init = () => {
    bindEvent();
  };

  function bindEvent() {
    oEnterBtn.addEventListener("click", handleEnterBtnClick, false);
  }

  function handleEnterBtnClick() {
    const username = oUername.value.trim();

    if (username.length < 6) {
      alert("用户名不小于6位");
      return;
    }

    storage.setItem("username", username);
    location.href = "index.html";
  }

  init();
})(document, localStorage, location);
