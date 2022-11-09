import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {

  }
  openModal(){
    console.log("here")
    const modalRef = this.modalService.open(LoginComponent, {backdrop:'static', keyboard:false})
  }

}
