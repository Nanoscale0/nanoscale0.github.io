var imgObj = new Image();
var reader = new FileReader();
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var imgData;
var file = document.querySelector("#file")

var lastBottom = 0;

var bgcolor = "#FFF";

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
            if (canvas.width > 300){
                $('#canvas').css('width', '300px')
                $('#canvas').css('height', canvas.height * 300 / canvas.width)
            }
            

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
    let date = new Date();
    // if (bgcolor !== "transparent"){
    //     console.log(bgcolor)
    //     imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
    //     ctx.clearRect(0,0,canvas.width,canvas.height); 

    //     ctx.fillStyle = bgcolor;
    //     ctx.fillRect(0,0,canvas.width,canvas.width);

    //     ctx.globalCompositeOperation="destination-over";
    //     ctx.putImageData(imgData,0,0);

    //     // exportCanvasAsPNG('canvas','export-'+date.toLocaleDateString()+"-"+date.toLocaleTimeString());
    //     // ctx.clearRect(0,0,canvas.width,canvas.height);
    //     // ctx.putImageData(imgData,0,0);
    // } else {
        exportCanvasAsPNG('canvas','export-'+date.toLocaleDateString()+"-"+date.toLocaleTimeString());
    // }
})

$('input[name="bgcolor"]').click(()=>{
    if ($('input[name="bgcolor"]:checked').val() == 1){
        bgcolor = "#FFF"
    } else if ($('input[name="bgcolor"]:checked').val() == 2){
        bgcolor = "transparent"
    }
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