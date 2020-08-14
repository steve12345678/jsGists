const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

//movie selected
const movie = document.getElementById('movie');
const total= document.getElementById('total');
const count = document.getElementById('count');

const reset = document.getElementById('reset')

let ticketPrice = movie.value;

function updateSeatCountAndTotal(){
const selectedSeats = document.querySelectorAll('.row .seat.selected') 
const selectedSeatsCount = selectedSeats.length;
count.innerText = selectedSeatsCount;
total.innerText = selectedSeatsCount*ticketPrice

    console.log(selectedSeatsCount)
}

function updateTicketPrice(){
    ticketPrice = movie.value;
    updateSeatCountAndTotal()
}

function selectSeat(e){
if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
e.target.classList.toggle('selected');
updateSeatCountAndTotal()
    }
}

function resetAll(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    selectedSeats.forEach(element => {
        element.classList.remove('selected')
        
    });
  updateTicketPrice()

}
movie.addEventListener('change',updateTicketPrice)
container.addEventListener('click', selectSeat);
reset.addEventListener('click',resetAll);
updateSeatCountAndTotal()