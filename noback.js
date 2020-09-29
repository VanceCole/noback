history.pushState(null, null, '/game');
let noback = true;
window.addEventListener("popstate", async () => {
  if (noback) {
    history.pushState(null, null, '/game');
    let c = confirm("Are you sure you want to exit?");
    if (c) {
      noback = false;
      history.back();
      history.back();
    }
  }
});