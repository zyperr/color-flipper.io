const primaryColors = ["white","Red","blue","yellow"];
const secondaryColors =["white","orange","green","purple"];
const tertiaryColors = ["white","#FF5A04","#DEFF00","#FFC600","#00A08C","#CE0063"];
const hexaColors = ["","#00FFFF","#7FFFD4","#FFE4C4","#A52A2A","#DC143C","#556B2F","#2F4F4F","#696969","#FF00FF","#FFD700","#DAA520","#008000","#ADFF2F","#4B0082","#7CFC00","#20B2AA","#E6E6FA","#BDB76B","#8B008B","#6E2C00","#D4AC0D","#EC7063","#A9DFBF","#76D7C4","#34495E","#A569BD","#633974"];
const backgroundChange = document.querySelector("body");

const btnPrimary = document.getElementById("btn-primary");
const btnSecondary = document.getElementById("btn-secondary");
const btnTertiary = document.getElementById("btn-tertiary");
const btnHexadecimal = document.getElementById("btn-hexadecimal");
const colorChange = document.querySelector(".change-color");

btnPrimary.addEventListener('click', ()=>{
    let i = parseInt(Math.random(1)*primaryColors.length);
    backgroundChange.style.backgroundColor = primaryColors[i];
    colorChange.textContent = primaryColors[i];
    colorChange.style.color = primaryColors[i];
});

btnSecondary.addEventListener('click',()=>{
    let i = parseInt(Math.random(1)*secondaryColors.length);
    backgroundChange.style.backgroundColor = secondaryColors[i];
    colorChange.textContent = secondaryColors[i];
    colorChange.style.color = secondaryColors[i];
})
btnTertiary.addEventListener('click',()=>{
    let i = parseInt(Math.random(1)*tertiaryColors.length);
    backgroundChange.style.backgroundColor = tertiaryColors[i];
    colorChange.textContent = tertiaryColors[i];
    colorChange.style.color = tertiaryColors[i];
})

btnHexadecimal.addEventListener('click',()=>{
    var hexaFinal= "#";
    let i = parseInt(Math.random()*hexaColors.length);
    backgroundChange.style.backgroundColor = hexaColors[i];
    colorChange.textContent = hexaColors[i];
    colorChange.style.color = hexaColors[i];
})
