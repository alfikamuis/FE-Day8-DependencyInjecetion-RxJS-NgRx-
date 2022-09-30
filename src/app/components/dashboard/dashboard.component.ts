import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  newData: User[] = [
    {id: 1,nama:"alfika",kota:"banyuwangi"},
    {id: 2,nama:"muis",kota:"malang"}
  ];

  selectData: User | null = null;
  updateData: User | null = null;
  isAdd: boolean = true;
  

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  addRow(row : User){
    if (row.id < this.newData.length){
      row.id = this.newData.length + 1;
    }
    this.newData.push(row);
  }

  onUpdateData(row: User) {
    this.newData = this.newData.map(item =>{
      if (row.id === item.id) {
        return row;
      }
      return item;
    })
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
    this.router.navigate(['/view/'+row.id+'/'+row.nama+'/'+row.kota]);
  }
  
  deleteRow(row : User) {
    for (let i in this.newData) {
      if (this.newData[i]['id'] == row.id) {
        this.newData.splice(parseInt(i), 1);
      }
    }
  }

}
