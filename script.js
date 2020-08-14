const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

//movie selected
const movie = document.getElementById('movie');
const total= document.getElementById('total');
const count = document.getElementById('count');

const ticketPrice = movie.value;

function updateSeatConut(){

   const selectedSeats = document.querySelectorAll('.row .seat.selected') 
const selectedSeatsCount = selectedSeats.length;
    console.log(selectedSeatsCount)
}

function selectSeat(e){
if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
e.target.classList.toggle('selected');

updateSeatConut()
}
}
container.addEventListener('click', selectSeat);
updateSeatConut()