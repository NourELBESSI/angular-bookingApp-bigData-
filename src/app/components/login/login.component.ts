import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientServiceService } from 'src/app/services/client.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public client: any[] = [];
  public username: string = '';
  

  constructor(
    public activeModal: NgbActiveModal,
    private _clientService: ClientServiceService
  ) {}

  ngOnInit(): void {}
  public loadClients() {
    this._clientService.loadClients().subscribe((data) => {
      this.client.push(data);
      console.log(this.client);
    });
  }
  public save() {
    console.log('saving');
    this.loadClients();
    console.log('username', this.username);
    this.client.forEach((data) => {
      console.log('username DATA', data.lastname);
      if (data.lastname === this.username) {
        console.log('true');
      } else {
        console.log('false');
      }
    });
  }
}
