pipButton.addEventListener('click', async function() {
  pipButton.disabled = true;
  try {
    if (videoElement !== document.pictureInPictureElement) {
      await videoElement.requestPictureInPicture();
    } else {
      await document.exitPictureInPicture();
    }
  } catch(error) {
    console.log(error);
  } finally {
    pipButton.disabled = false;
  }
})