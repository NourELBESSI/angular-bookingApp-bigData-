import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {

storyForm = this.formBuilder.group({
  title: '',
  description: '', 
  text: ''
});

  constructor(
    public activeModal: NgbActiveModal,

    private formBuilder: FormBuilder,
    private _postsService: PostService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
 
    console.log('Your order has been submitted', this.storyForm.value);
   
    //  this.post.description = this.storyForm.controls.description;
let post = <Post><unknown> {
title : this.storyForm.controls.title.value,
description : this.storyForm.controls.description.value,
text : this.storyForm.controls.text.value,
tag: null,
date: null,
}

console.log("post afteeer", post)
this._postsService.savePost(post).subscribe((res) => {
 console.log("works")
})
   
  }

}
