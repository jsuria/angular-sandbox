import { Component, OnInit, Input } from '@angular/core';
import { SummonElemental, SummonAbility, SummonType, SummonRole } from '../models/summon.model';

@Component({
  selector: 'app-rogues-profile',
  templateUrl: './rogues-profile.component.html',
  styleUrls: ['./rogues-profile.component.less']
})
export class RoguesProfileComponent implements OnInit {

  @Input()  elementalInput: any;
  elemental: SummonElemental;     // container for the input

  // TODO - Add summon character code here
  constructor() {
  }
  
  ngOnInit() {
    this.elemental = new SummonElemental({
        name: this.elementalInput.name,
        type: new SummonType({
            name: this.elementalInput.type.name,
            type: this.elementalInput.type.type
        }),
        role: new SummonRole(this.elementalInput.role)
    });

    this.elemental.abilities = [];

    this.elementalInput.abilities.forEach((a: { 
          name: string; 
          type: string; 
          cooldown_secs: number; 
          mana_points: number; 
        }) =>
        this.elemental.abilities.push(
          new SummonAbility({
            name:a.name,
            type:a.type,
            cooldown_secs: a.cooldown_secs,
            mana_points: a.mana_points
          })
        )        
      );
    }
}
