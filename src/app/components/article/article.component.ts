import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReadingComponent } from '../reading/reading.component';
import { Post } from '../../model/Post'
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  
  public posts: Post[] = [];
  public loaded:boolean = false

  constructor(
    private modalService: NgbModal,
    private _postsService: PostService
  ) { }

  ngOnInit(): void {
    this.loadPosts();
  }
  
  openModal(id: string){
    const modalRef = this.modalService.open(ReadingComponent, {size:'lg',backdrop:'static', keyboard:false})
    let post = this.posts.filter(p => p.id === id);
    modalRef.componentInstance.posts = post;
    modalRef.componentInstance.id = id;
  }
  public loadPosts() {
    this._postsService.loadPosts().subscribe((data) => {
      this.posts = data;
      this.loaded =true;
     
    });}

    getImg(tag: string){
      let path ="assets/img/tags/";
      switch(tag){
        case 'Books': 
          path += 'books.jpg';
          break;
        case 'Technology': 
          path += 'tech.jpg';
          break;
        case 'movie': 
          path += 'movie.jpg';
          break;
        case 'music': 
          path += 'music.jpg';
          break;
        default: 
          path += 'learn.jpeg';
          break;
      }
      return path;
     }
}
