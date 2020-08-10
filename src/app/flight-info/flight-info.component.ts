import { Component, OnInit } from '@angular/core';
import { ArsServicesService } from '../ars-services.service';
import { FlightInfo } from '../flightInfo';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css']
})
export class FlightInfoComponent implements OnInit {

  flightInfo: FlightInfo[];


  selectedFlight: FlightInfo = {
    flightNumber: null,
    departureCity: null,
    arrivalCity: null,
    airline: null,
    departureDate: null,
    arrivalDate: null,
    departureTime: null,
    arrivalTime: null,
    firstClassSeats: null,
    firstClassSeatFare: null,
    bussinessClassSeats: null,
    bussinessClassFare: null,
  };

  constructor(private service: ArsServicesService) {
    this.service.getFlightInfo();

  }

  cancelFlight(flightInfo: FlightInfo) {
    this.service.cancelFlight(flightInfo.flightNumber).subscribe(response => {
      console.log(response);
      this.getFlights(); 
      console.log(flightInfo.flightNumber);
      console.log('one flight cancelled');
      //alert("Flight cancelled successfully!!!");
    }, err => {
      console.log(err);
    }
    );
  }

  selectFlight(flight: FlightInfo) {
    this.selectedFlight = flight;
  }

  updateFlightDetails(form: NgForm) {
    this.service.updateFlightInfo(form.value).subscribe(response => {
      console.log(response);
      form.reset();
      alert("Flight details updated successfully!!!");

    }, err => {
      console.log(err);
    })
  }

  getFlights() {
    this.service.getFlightInfo().subscribe(data => {
      this.flightInfo = data.searchFlight;
      console.log(data);
    })
  }

  ngOnInit() {
    this.getFlights();
  };
}

