const container = document.querySelector('.container');
const squares = document.querySelectorAll('.row .square:not(.occupied)');

//movie selected
const movie = document.getElementById('movie');
const total= document.getElementById('total');
const count = document.getElementById('count');

const reset = document.getElementById('reset');
const column = document.getElementById('column');
let ticketPrice = movie.value;

function updatesquareCountAndTotal(){
const selectedsquares = document.querySelectorAll('.row .square.selected') 
const selectedsquaresCount = selectedsquares.length;
count.innerText = selectedsquaresCount;
total.innerText = selectedsquaresCount*ticketPrice;
 
}

function updateTicketPrice(){
    ticketPrice = movie.value;
    updatesquareCountAndTotal();
}

function selectsquare(e){
if(e.target.classList.contains('square') && !e.target.classList.contains('occupied') || e.target.classList.contains('image')){
    if(e.target.classList.contains('image')){
        const imgUrl = e.target.src;
        const targetImg = document.getElementById('img1');
        const newImage = document.createElement('img');
        newImage.src= imgUrl;
        targetImg.appendChild(newImage);

        
        console.log(imgUrl)
        e.target.parentElement.classList.toggle('selected');
    }

    e.target.classList.toggle('selected');
// desapear(e.target);
    console.log(e.target);
updatesquareCountAndTotal();
    }
}

function resetAll(){
    const selectedsquares = document.querySelectorAll('.row .square.selected');
    selectedsquares.forEach(element => {
        element.classList.remove('selected');
        
    });
  updateTicketPrice();

}

function desapear(m){
    setTimeout(() => {
       const item=m;
       if(item.classList.contains('selected')){

        item.classList.remove('selected');
        console.log(item);
       }
        
    }, 2000);
}
movie.addEventListener('change',updateTicketPrice);
container.addEventListener('click', selectsquare);
reset.addEventListener('click',resetAll);
updatesquareCountAndTotal();