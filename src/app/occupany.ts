export class Occupany {
    constructor(
        public flightNumber : string,
        public totalSeats : number,
        public totalBussinessClassSeats : number,
        public totalFirstClassSeats : number,
        public availableBussinessClassSeats : number,
        public bookedBussinessClassSeats : number,
        public availableFirstClassSeats : number,
        public bookedFirstClassSeats : number
    ) {}
}