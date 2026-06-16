// Check if the user is on a Mac and update the shortcut key for search accordingly
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    let shortcutKeyElement = document.querySelector("#search-toggle .nav-link");
    if (shortcutKeyElement) {
      // keep a plain "Search" label (the Ctrl/Cmd+K hotkey still works)
      shortcutKeyElement.innerHTML = '<i class="ti ti-search"></i> Search';
    }
  }
});
