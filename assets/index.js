document.addEventListener('DOMContentLoaded', () => {
  // clipboard.js
  const clipboard = new ClipboardJS('.copy > a');
  clipboard.on('success', function(e) {
    const copiedElement = e.trigger.previousElementSibling
    if (!copiedElement.classList.contains('show')) {
      copiedElement.classList.add('show')
      window.setTimeout(() => { copiedElement.classList.add('active') }, 10)
      window.setTimeout(() => { copiedElement.classList.remove('active') }, 2010)
      window.setTimeout(() => { copiedElement.classList.remove('show') }, 2220)
      e.clearSelection()
    }
  });

  // PhotoSwipe
  const pswpElement = document.getElementsByClassName('pswp')[0];
  const items = [
      { src: 'assets/images/photos/01.jpg', w: 1650, h: 2444 },
      { src: 'assets/images/photos/02.jpg', w: 1537, h: 2419 },
      { src: 'assets/images/photos/03.jpg', w: 1680, h: 2520 },
      { src: 'assets/images/photos/04.jpg', w: 1480, h: 2003 },
      { src: 'assets/images/photos/05.jpg', w: 1586, h: 2243 },
      { src: 'assets/images/photos/06.jpg', w: 1632, h: 2395 },
  ]

  const photos = document.getElementsByClassName('photo');
  [...photos].forEach((element, index, array) => {
    element.addEventListener('click', (e) => {
      const options = {
          index: parseInt(e.target.dataset.index, 10) - 1,
          fullscreenEl: false,
          zoomEl: false,
          shareEl: false,
      }
      const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    })
  });
})
