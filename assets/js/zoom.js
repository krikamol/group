// Initialize medium zoom.
$(document).ready(function () {
  let zoomBg = getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color").trim();
  
  if (zoomBg.length === 4 && zoomBg.startsWith('#')) {
    zoomBg = '#' + zoomBg[1] + zoomBg[1] + zoomBg[2] + zoomBg[2] + zoomBg[3] + zoomBg[3];
  }

  medium_zoom = mediumZoom("[data-zoomable]", {
    background: zoomBg + "ee", // + 'ee' for trasparency.
  });
});
