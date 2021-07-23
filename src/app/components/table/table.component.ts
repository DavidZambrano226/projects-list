import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../modals/delete/delete.component';
import { EditComponent } from '../modals/edit/edit.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'badge', 'startAt', 'finishAt', 'actions'];
  dataSource: Projects[] = [];
  
  constructor( private projectService: ProjectService, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.getProjects()
    .subscribe((data: Projects[]) => this.dataSource = data);
  }

  openDeleteModal( id: number ) {
    const dialogRef = this.dialog.open(DeleteComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllProjects();
    });
  }
  openUpdateModal( project: Projects ) {
    const dialogRef = this.dialog.open(EditComponent, { data: { project } });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllProjects();
    });
  }

}
