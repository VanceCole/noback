history.pushState(null, null, '/game');
let noback = true;
window.addEventListener("popstate", async () => {
  if (noback) {
    history.pushState(null, null, '/game');
    if (!game.settings.get('noback', 'prompt')) return;
    if (confirm(game.i18n.localize('NOBACK.confirm'))) {
      noback = false;
      history.back();
      history.back();
    }
  }
});

Hooks.on('init', () => {
  game.settings.register('noback', 'prompt', {
    name: game.i18n.localize('NOBACK.prompt'),
    hint: game.i18n.localize('NOBACK.promptHint'),
    scope: 'client',
    config: true,
    type: Boolean,
    default: true,
  });
})