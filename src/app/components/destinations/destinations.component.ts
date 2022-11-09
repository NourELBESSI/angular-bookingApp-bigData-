import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Country } from 'src/app/model/country';
import { CountriesServiceService } from 'src/app/services/countries.service.service';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  public countries: Country[] = [];
  public loaded:boolean = false

  constructor(
    private modalService: NgbModal,
    private _countriesService: CountriesServiceService
  ) { }

  ngOnInit(): void {
    this.loadCountries();
  }

  public loadCountries() {
    this._countriesService.loadCountries().subscribe((data ) => {
  
      this.countries = data;
      console.log(this.countries);
      this.loaded =true;
     
    });}

  openModal(){
    const modalRef = this.modalService.open(BookComponent, { backdrop:'static', keyboard:false})
   // modalRef.componentInstance.country = data;
  }
  getCountry(id: number){
    let path ="assets/img/";
    switch(id){
      case 1: 
        path += 'rome.jpg';
        break;
      case 2: 
        path += 'paris.jpg';
        break;
      case 3: 
        path += 'berlin.jpeg';
        break;
      case 4: 
        path += 'spain.jpg';
        break;
      case 5: 
        path += 'newYork.jpg';
        break;
      case 6: 
        path += 'china.jpg';
        break;
      case 7: 
        path += 'greece.jpg';
        break;
      case 8: 
        path += 'istanbul.jpg';
        break;

    }
    return path;
   }
}
