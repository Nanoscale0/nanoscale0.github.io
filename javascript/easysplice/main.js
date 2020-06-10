var imgObj = new Image();
var reader = new FileReader();
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var imgData;
var file = document.querySelector("#file")

var lastBottom = 0;

$('#addimg').click(()=>{
    $("#file").click();
})

$("#file").on('change', (event) => {
    reader.onload = (e) =>{
        imgObj.addEventListener('load', ()=>{
            console.log("load")
            // console.log(lastBottom, imgObj.height)
            canvas.height = lastBottom + imgObj.height;
            if (imgObj.width > canvas.width){
                canvas.width = imgObj.width;
            }
            if (imgData !== undefined){
                ctx.putImageData(imgData,0,0)
            }
            ctx.drawImage(imgObj,0,lastBottom);
            imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
            lastBottom += imgObj.height;
            imgObj = new Image();
        })
        imgObj.src = e.target.result;
    }
    reader.readAsDataURL(file.files[0]);
    event.target.value = '';
})

$('#download-img').click(()=>{
    exportCanvasAsPNG('canvas','export');
})

function exportCanvasAsPNG(id, fileName) {
    var canvasElement = document.getElementById(id);

    var MIME_TYPE = "image/png";

    var imgURL = canvasElement.toDataURL(MIME_TYPE);

    var dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
}