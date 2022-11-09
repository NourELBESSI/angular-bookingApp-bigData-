import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl} from '@angular/forms';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() public country: any;
  public username: string = '';
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
