import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpverify',
  templateUrl: './cpverify.component.html',
  styleUrls: ['./cpverify.component.scss']
})
export class CpverifyComponent implements OnInit {
  cpverifyForm:FormGroup

  constructor() { }

  ngOnInit(): void {
  }

  role = [
    {}
  ]

  eqp = [
    {}
  ]

  addRole(){
    let obj = {}
    this.role.push(obj);
  }

  addEqp(){
    let obj = {}
    this.eqp.push(obj);
  }

}
