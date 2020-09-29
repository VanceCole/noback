history.pushState(null, null, '/game');
let noback = true;
window.addEventListener("popstate", async () => {
  if (noback) {
    history.pushState(null, null, '/game');
    if (confirm("Are you sure you want to exit?")) {
      noback = false;
      history.back();
      history.back();
    }
  }
});
