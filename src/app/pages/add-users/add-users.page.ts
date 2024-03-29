import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage'; 
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.page.html',
  styleUrls: ['./add-users.page.scss'],
})
export class AddUsersPage implements OnInit {
  form: FormGroup;
  allUsers: [] = [];

  constructor(private fb: FormBuilder, private router: Router) { 
    this.form = this.fb.group({
      users: this.fb.array([]),
    });
  }

  ngOnInit() {
    const x = this.form.controls.users as FormArray;
    x.push(this.fb.group({
      username: '',
    }));
    
   
  }
  onSubmit() {
    this.allUsers = this.form.value.users;
    this.form.value.users.forEach( element => {
      element.username = element.username.charAt(0).toUpperCase() + element.username.slice(1);
    });

    // Inicializo el dataService seteando los usuarios
    DataService.init(this.allUsers);

    this.router.navigate(['./select-three']);
  }

  addUserForm() {
    const x = this.form.controls.users as FormArray;
    
    x.push(this.fb.group({
      username: '',
    }));

    
    setTimeout(() => {
      let element = document.getElementById('form-' +  (x.length - 1));
      element.scrollIntoView();
      element.getElementsByTagName('input')[0].focus();
    },100);

    
  }

  removeItem(i) {
    const x = this.form.controls.users as FormArray;
    x.removeAt(i);
    
    
  }

  showHowToPlay() {
    this.router.navigate(['./how-slider']);
  }

}
