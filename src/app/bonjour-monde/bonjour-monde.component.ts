import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonjour-monde',
  templateUrl: './bonjour-monde.component.html',
  styleUrls: ['./bonjour-monde.component.less']
})
export class BonjourMondeComponent implements OnInit {

  foo:any;

  constructor() { 
    this.foo = {
      name:"Carbuncle",
      type:"Summon",
      role:"Healer"
    };

    this.foo.abilities = [
      {
        name:"Aide",
        type:"Active",
        mana_pt_requirement: 10
      },
      {
        name:"Shield",
        type:"Active",
        mana_pt_requirement: 10
      },
      {
        name:"Rejunivate",
        type:"Passive",
        mana_pt_requirement: 5
      },
      {
        name:"Ressurect",
        type:"Active",
        mana_pt_requirement: 80
      }
    ]
  }

  ngOnInit() {}

}
