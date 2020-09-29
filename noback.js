history.pushState(null, null, '/game');
let noback = true;
window.addEventListener("popstate", async () => {
  if (noback) {
    history.pushState(null, null, '/game');
    if (confirm(game.i18n.localize('NOBACK.confirm'))) {
      noback = false;
      history.back();
      history.back();
    }
  }
});
