import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  doctorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.doctorForm = this.fb.group({
      Email: ['', Validators.required ],
      Password: ['', Validators.required ]
    })
   }
  

  ngOnInit(): void {
    
  }

}
