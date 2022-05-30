function TaxiQueue() {

	let queCounter = 0;
	let taxiCounter = 0;

	function joinQueue() {
		queCounter++;
	}

	function leaveQueue() {
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
		if(queueLength() >= 12 && taxiQueueLength() > 0){
			taxiCounter--;
			queCounter -= 12;	
		}
		return taxiCounter;
	}
	
	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart,
	}
}