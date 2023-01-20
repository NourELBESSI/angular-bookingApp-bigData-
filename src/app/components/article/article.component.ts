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

  
  public posts2: Post[] = [
  {id: '1', title: 'Angular', tag: 'Books', description: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.', text: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.', date: new Date('2020-01-01')},
  {id: '2', title: 'React', tag: 'Technology', description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.', text: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.', date: new Date('2020-01-01')},
  {id: '3', title: 'Bob Marley', tag: 'music', description: 'Bob Marley was a Jamaican singer-songwriter and musician. He was the rhythm guitarist and lead singer for the ska, rocksteady, and reggae bands The Wailers (1963–1974) and Bob Marley & the Wailers (1974–1981).', text: 'Bob Marley was a Jamaican singer-songwriter and musician. He was the rhythm guitarist and lead singer for the ska, rocksteady, and reggae bands The Wailers (1963–1974) and Bob Marley & the Wailers (1974–1981). Marley remains the most widely known and revered proponent of reggae music, and is credited with helping spread both Jamaican music and the Rastafari movement to a worldwide audience.', date: new Date('2020-01-01')},
  {id: '4', title: 'John Wick', tag: 'movie', description: 'John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski and written by Derek Kolstad.', text: 'John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski and written by Derek Kolstad. The film stars Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo, and Willem Dafoe.', date: new Date('2020-01-01')},
  {id: '5', title: 'Dave', tag: 'music', description: 'Dave is an American hip hop recording artist from Chicago, Illinois. He is signed to Interscope Records and his debut album, Psychodrama, was released on May 17, 2019.', text: 'Dave is an American hip hop recording artist from Chicago, Illinois. He is signed to Interscope Records and his debut album, Psychodrama, was released on May 17, 2019. Dave is known for his unique style of rapping, which is characterized by his rapid-fire delivery and his use of wordplay.', date: new Date('2020-01-01')}]

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
