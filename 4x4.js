const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.style.backgroundColor="#c7c7c7";

const foXfo = document.getElementsByClassName('aside-menu__4x4')[0];

// let data;

let widthPixel; 

let posPixelX = 0;
let posPixelY = 0;

foXfo.onclick = function(){
    handler([
        ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
        ["FFEB3B", "FFC107","FFC107","FFEB3B"],
        ["FFEB3B", "FFC107","FFC107","FFEB3B"],
        ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
    ]);
};

function handler(data) {
    for(let x = 0; x < data.length; x++){

        for(let i = 0; i < data[x].length; i++){

            widthPixel = 512/data[x].length;

            ctx.fillStyle = "#" + data[x][i];
            ctx.fillRect(posPixelX, posPixelY, widthPixel, widthPixel);
            
            posPixelX += widthPixel;
        }
        posPixelX = 0;
        posPixelY += widthPixel; 
    }    
}
