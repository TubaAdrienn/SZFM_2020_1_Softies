//get a ui manipulator and a getter object
// add eventlistener to DOMContentLoaded, fetchimgsrc
// splitlines and setgallerypictures 

var ui = new UI();
var get = new GetJokes();

document.addEventListener('DOMContentLoaded', () => {
    get.fetchImgsSrc().then(resp => {
        var srclines = resp.lines.split('\n');
        ui.setGalleryPictures(srclines);
    });
});