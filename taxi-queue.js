function TaxiQueue() {

	let queCounter = 0;
	let taxiCounter = 0;

	function joinQueue() {
		queCounter++;
	}

	function leaveQueue() {
		decrementQueue(queCounter);
		
		if(queCounter > 0){
			queCounter--;
		}
		else{
			queCounter = 0;
		}
		return queCounter;
	}
	function joinTaxiQueue() {
		taxiCounter++;
	}

	function queueLength() {
		return queCounter;
	}

	function taxiQueueLength() {
		return taxiCounter;
	}

	function taxiDepart(){

		if(queCounter >= 12){
			taxiCounter--;
		}
		return taxiCounter;
	}
	function decrementQueue(queCounter){
        let newQueueCount = 0;
		if(queCounter >= 12){
			newQueueCount = queCounter - 12;
		}
		return newQueueCount;
	}
	// for(i = 0; i < queCounter; i++){
	// }
	// function decrementQueue(queCounter){
	// 	let newQueueCount;
	// 	while(queCounter <= 12){
	// 		newQueueCount = queCounter - 12;
	// 	}
	// 	return newQueueCount;
	// }

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart,
		decrementQueue
	}
}