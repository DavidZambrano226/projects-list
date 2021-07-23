import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  projectForm: FormGroup;

  constructor( private fb: FormBuilder, private projectService: ProjectService ) {

    this.projectForm = fb.group({
      name: new FormControl("", {validators: Validators.required}),
      description: new FormControl("", {validators: Validators.required}),
      badge: new FormControl("", {validators: Validators.required}),
      startAt: new FormControl("", {validators: Validators.required}),
      finishAt: new FormControl("", {validators: Validators.required}),
    })
    
   }

  ngOnInit(): void {
  }

  save() {
    if (!this.projectForm.valid) {
      return;
    }

    console.log(this.projectForm.value);
    this.projectService.saveProject(this.projectForm.value)
      .subscribe(console.log);
  }

}
