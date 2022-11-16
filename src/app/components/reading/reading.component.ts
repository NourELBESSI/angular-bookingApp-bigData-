import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/model/Post';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {
  @Input() public posts: any;
  @Input() public id: any;
  public postToShow: Post[] = [];

  constructor(
    public activeModal: NgbActiveModal,

  ) { }

  ngOnInit(): void {
    this.postToShow = this.posts;

  }

}
