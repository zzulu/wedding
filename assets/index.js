// PhotoSwipe
const pswpElement = document.getElementsByClassName('pswp')[0];
const items = [
    { src: 'assets/images/photos/01.jpg', w: 3299, h: 4887 },
    { src: 'assets/images/photos/02.jpg', w: 3073, h: 4838 },
    { src: 'assets/images/photos/03.jpg', w: 3360, h: 5040 },
    { src: 'assets/images/photos/04.jpg', w: 2960, h: 4005 },
    { src: 'assets/images/photos/05.jpg', w: 3172, h: 4485 },
    { src: 'assets/images/photos/06.jpg', w: 3263, h: 4790 },
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
