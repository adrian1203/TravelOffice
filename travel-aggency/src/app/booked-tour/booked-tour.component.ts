import {Component, OnInit} from '@angular/core';
import {AppUser, Cart, Tour} from "../model/app-models";
import {ShoppingCartService} from "../shopping-cart.service";
import {AuthenticationService} from "../autentication.service";
import {ToursService} from "../tours.service";

@Component({
  selector: 'app-booked-tour',
  templateUrl: './booked-tour.component.html',
  styleUrls: ['./booked-tour.component.css']
})
export class BookedTourComponent implements OnInit {

  cart: Cart;
  totalPrice: number;
  totalReservation: number;
  currentUser: AppUser;
  tours: Array<Tour> = new Array<Tour>();


  constructor(private shoppingCartService: ShoppingCartService,
              private authenticationService: AuthenticationService, private tourService: ToursService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);


  }

  ngOnInit(): void {
    this.currentUser.reservation.forEach(e => {
      this.tourService.getTour(e.tourId).subscribe(e => {
        this.tours.push(e);
      });
    });

  }

}
