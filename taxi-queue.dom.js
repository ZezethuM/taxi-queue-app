// write your DOM code here.
// DOM element references
// create Factory Function instance
// DOM events

const passengerCount = document.querySelector('.passenger_queue_count');
const taxiCount = document.querySelector('.taxi_queue_count');
const joinButton = document.querySelector('.join_queue');
const leaveButton = document.querySelector('.leave_queue');
const taxiJoinButton = document.querySelector('.join_taxi_queue');
const departButton = document.querySelector('.depart');

const taxiQueue = TaxiQueue();

function taxiPassengerStored(key) {
    	const taxiPassenger = localStorage.getItem(key);
    	if (taxiPassenger) {
    		return taxiPassenger;
    	}
    	return 0;
    }
joinButton.addEventListener("click", function(){
    
    taxiQueue.joinQueue();
    localStorage.setItem("Passengers", taxiQueue.queueLength());
    passengerCount.innerHTML = taxiPassengerStored("Passengers");
});

leaveButton.addEventListener("click", function(){
    passengerCount.innerHTML = taxiQueue.leaveQueue();
});

taxiJoinButton.addEventListener("click", function(){

    taxiQueue.joinTaxiQueue();
    taxiCount.innerHTML = taxiQueue.taxiQueueLength();
    localStorage.setItem("Taxis", taxiQueue.taxiQueueLength())
});

departButton.addEventListener("click", function(){

    taxiCount.innerHTML = taxiQueue.taxiDepart();
    passengerCount.innerHTML = taxiQueue.decrementQueueLength();
});



