import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router: Router,) { }

  getList(): User[] {
    return [
      { id: 1, nama: "alfika", kota: "banyuwangi" },
      { id: 2, nama: "muis", kota: "malang" }
    ];
  }

  add(row: User, newData: User[]){
    const last = newData[newData.length-1].id
    if (row.id < last || row.id === null){
      row.id = last+1;
    }
    return row;
  }

  update(row: User, newData: User[]) {
    newData = newData.map(item => {
      if (row.id === item.id) {
        return row;
      }
      return item;
    })
    return newData;
  }

  view(row: User) {
    this.router.navigate(['/view/' + row.id + '/' + row.nama + '/' + row.kota]);
  }

  delete(row: User, newData: User[]) {
    for (let i in newData) {
      if (newData[i]['id'] == row.id) {
        newData.splice(parseInt(i), 1);
      }
    }
  }
}
