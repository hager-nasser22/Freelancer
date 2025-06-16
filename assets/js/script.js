  const videoModal = document.getElementById('videoModal');
  const video = document.getElementById('popupVideo');

  if (videoModal && video) {
    videoModal.addEventListener('hidden.bs.modal', () => {
      video.pause();
      video.currentTime = 0;
    });
  }

  const videoModal2 = document.getElementById('videoModal2');
  const video2 = document.getElementById('popupVideo2');

  if (videoModal2 && video2) {
    videoModal2.addEventListener('hidden.bs.modal', () => {
      video2.pause();
      video2.currentTime = 0;
    });
  }

