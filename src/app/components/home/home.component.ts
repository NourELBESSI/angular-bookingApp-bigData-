import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WritingComponent } from '../writing/writing.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  openModal(){
    const modalRef = this.modalService.open(WritingComponent, {size:'lg',backdrop:'static', keyboard:false})
  }
}
