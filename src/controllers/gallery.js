var ui = new UI();
var get = new GetJokes();

document.addEventListener('DOMContentLoaded', () => {
    get.fetchImgsSrc().then(resp => {
        var srclines = resp.lines.split('\n');
        ui.setGalleryPictures(srclines);
    });
});