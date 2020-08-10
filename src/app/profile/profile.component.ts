import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from '../profileInfo';
import { ArsServicesService } from '../ars-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileInfo: ProfileInfo[];


  selectedProfile: ProfileInfo = {
    flightNo: null,
    departureCity: null,
    arrivalCity: null,
    departureDate: null,
    arrivalDate: null,
    departureTime: null,
    arrivalTime: null,
    bookingId: null,
    userId: null,
    firstName: null,
    lastName: null,
    classType: null,
    passengers: null,
    totalFare: null,
  };

  constructor(private service: ArsServicesService) {
    this.service.getProfileInfo();

  }

  cancelBookedFlight( profileInfo: ProfileInfo) {
    this.service.cancelBookedFlight(profileInfo.bookingId).subscribe(response => {
      console.log(response);
      this.getProfiles();
      console.log(profileInfo.bookingId);
      console.log('one flight cancelled');
      alert("Ticket Cancelled Successfully....!!!");
      //alert("Flight cancelled successfully!!!");
    }, err => {
      console.log(err);
    }
    );
  }


  selectProfile(profile: ProfileInfo) {
    
    this.selectedProfile = profile;
  }

  getProfiles() {
    this.service.getProfileInfo().subscribe(data => {
      this.profileInfo=data.getAllBookingInfo;
      console.log("array",ProfileInfo);
      console.log(data);
    })
  }

  ngOnInit() {
    this.getProfiles();
  }

}
