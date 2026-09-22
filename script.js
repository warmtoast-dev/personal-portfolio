document.addEventListener("DOMContentLoaded", () => {
  setupExternalLinks();
  setCurrentYear();
});

function setupExternalLinks() {
  document.querySelectorAll("a[href]").forEach((link) => {
    const url = new URL(link.href, window.location.href);

    if (
      (url.protocol === "http:" || url.protocol === "https:") &&
      url.hostname !== window.location.hostname
    ) {
      link.classList.add("external-link");
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
}
