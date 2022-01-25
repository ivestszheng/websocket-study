((doc, Socket) => {
  const oList = doc.querySelector("#list");
  const oMsg = doc.querySelector("#message");
  const oSendBtn = doc.querySelector("#send");
  const ws = new Socket("ws:localhost:8000");

  const init = () => {
    bindEvent();
  };

  function bindEvent() {
    oSendBtn.addEventListener("click", handleSendBtnClick, false);
    ws.addEventListener("open", handleOpen, false);
    ws.addEventListener("close", handleClose, false);
    ws.addEventListener("error", handleError, false);
    ws.addEventListener("message", handleMessage, false);
  }

  function handleSendBtnClick(e) {
    console.log("Send message", e);
  }
  function handleOpen(e) {
    console.log("Websocket open", e);
  }
  function handleClose(e) {
    console.log("Websocket close", e);
  }
  function handleError(e) {
    console.log("Websocket error", e);
  }
  function handleMessage(e) {
    console.log("Websocket message", e);
  }

  init();
})(document, WebSocket);
