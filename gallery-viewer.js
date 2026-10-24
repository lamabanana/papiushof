const viewer = document.querySelector("#image-viewer");
const viewerImage = viewer.querySelector(".image-viewer-content img");
const viewerCaption = viewer.querySelector(".image-viewer-content figcaption");
const invitationImages = [...document.querySelectorAll("[data-image-viewer]")];
let currentImage = 0;

function showInvitationImage(index) {
  currentImage = (index + invitationImages.length) % invitationImages.length;
  const trigger = invitationImages[currentImage];

  viewerImage.src = trigger.href;
  viewerImage.alt = trigger.querySelector("img").alt;
  viewerCaption.textContent = trigger.dataset.imageCaption;
}

invitationImages.forEach((trigger, index) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    showInvitationImage(index);
    viewer.showModal();
  });
});

viewer.querySelector(".image-viewer-close").addEventListener("click", () => {
  viewer.close();
});

viewer.querySelector(".image-viewer-previous").addEventListener("click", () => {
  showInvitationImage(currentImage - 1);
});

viewer.querySelector(".image-viewer-next").addEventListener("click", () => {
  showInvitationImage(currentImage + 1);
});

viewer.addEventListener("click", (event) => {
  if (event.target === viewer) {
    viewer.close();
  }
});

viewer.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    viewer.close();
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    showInvitationImage(currentImage - 1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    showInvitationImage(currentImage + 1);
  }
});
