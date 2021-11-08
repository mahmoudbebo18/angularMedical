import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {

  visitorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.visitorForm = this.fb.group({
      Email: ['', Validators.required ],
      Password: ['', Validators.required ]
    })
   }

  ngOnInit(): void {
  }

}
