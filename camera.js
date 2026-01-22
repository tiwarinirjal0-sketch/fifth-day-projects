// const video = document.getElementById('camera');

// navigator.mediaDevices.getUserMedia({video : true, audio : false})
// .then(stream => {
//     video.srcObject = stream;
// })
// .catch(err => {
//     console.error("camera access denied:", err);
// })

const video = document.getElementById("camera");
const effects = document.querySelectorAll(".effects");

const colors = [
    
    "grayscale(100%)",
    "sepia(100%)",
    "invert(100%)",
    "hue-rotate(90deg)",
    "hue-rotate(180deg)"
  ];

navigator.mediaDevices.getUserMedia({video : true, audio : false})
.then(stream => {
    video.srcObject = stream;
})
.catch(err =>{
    console.error("camera access denied:", err)
})


function setfilter(filter){
    video.style.filter = filter;
}

setfilter('grayscale(100%)')

effects.forEach((e) =>{
    let i = 0;
    e.addEventListener("click", () => {
        setfilter(colors[i]);
        e.style.backgroundColor = colors[i];
        i++;
    } )
})
