import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public newData: User[] = [];

  selectData: User | null = null;
  updateData: User | null = null;
  isAdd: boolean = true;
  

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.newData = this.dataService.getList();
  }

  addRow(row : User){
    row = this.dataService.add(row,this.newData);
    this.newData.push(row);
  }

  onUpdateData(row: User) {
    this.newData = this.dataService.update(row,this.newData);
    this.updateData = null;
    this.isAdd =true;
  }

  updateRow(row: User){
    this.isAdd = false;
    this.updateData = row;
    this.selectData = null;
  }

  viewRow(row: User){
    this.isAdd = true;
    this.selectData = row;
    this.updateData = null;
    this.dataService.view(row);
  }
  
  deleteRow(row: User){
    this.dataService.delete(row,this.newData);
  }

}
