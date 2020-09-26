var ui = new UI();
var get = new GetJokes();
const imgCont = document.querySelector('.img-container');

document.addEventListener('DOMContentLoaded', () => {
    get.fetchImgsSrc().then(resp => {
        var srclines = resp.lines.split('\n');
        ui.setGalleryPictures(srclines);
        addImgListener();
    });
});

function addImgListener() {
    imgCont.addEventListener('click', function (e) {
        if (e.target.classList.contains("open-modal")) {
            let src = e.target.src.slice(32);
            ui.setModalData(src);
        }
    });
}
