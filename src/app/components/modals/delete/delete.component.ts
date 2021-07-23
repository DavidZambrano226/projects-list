import { Component, Inject, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Projects } from 'src/app/models/project.model';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  project: any;
  loading = true;

  constructor( 
      private projectService: ProjectService, 
      @Inject(MAT_DIALOG_DATA) public data: any 
  ) { }

  ngOnInit(): void {
    const { id } = this.data;
    this.projectService.getProjectById(id)
      .subscribe(data => {
        this.project = data;
        this.loading = false;
      })
  }

  delete() {
    const { id } = this.data;
    this.projectService.deleteProject(id)
      .subscribe(console.log);
  }

}
