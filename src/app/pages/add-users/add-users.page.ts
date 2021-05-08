import { Component, OnInit } from '@angular/core';
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
   
  }
  onSubmit() {
    this.allUsers = this.form.value.users;

    // Inicializo el dataService seteando los usuarios
    DataService.init(this.allUsers);

    this.router.navigate(['./select-three']);
  }

  addUserForm() {
    const x = this.form.controls.users as FormArray;
    x.push(this.fb.group({
      username: '',
    }));
  }

}
