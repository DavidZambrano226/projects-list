import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Projects } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  projectForm: FormGroup;
  project: Projects = {} as Projects;
  id: any;

  constructor( 
      private fb: FormBuilder, 
      private projectService: ProjectService, 
      @Inject(MAT_DIALOG_DATA) public data: any ) {

    this.project = this.data.project;
    this.id = this.project.id;    

    this.projectForm = fb.group({
      name: new FormControl(this.project.name, {validators: Validators.required}),
      description: new FormControl(this.project.description, {validators: Validators.required}),
      badge: new FormControl(this.project.badge, {validators: Validators.required}),
      startAt: new FormControl(this.project.startAt, {validators: Validators.required}),
      finishAt: new FormControl(this.project.finishAt, {validators: Validators.required}),
    })
  }

  ngOnInit(): void {
  }

  editProject() {


    this.project = this.projectForm.value;
    this.project.id = this.id;
    
    this.projectService.updateProject(this.project)
      .subscribe(console.log);
    

  }

}
