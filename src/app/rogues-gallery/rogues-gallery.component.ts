import { Component, OnInit } from '@angular/core';
import { SummonElemental, SummonAbility, SummonType, SummonRole } from './summon.model';

@Component({
  selector: 'app-rogues-gallery',
  templateUrl: './rogues-gallery.component.html',
  styleUrls: ['./rogues-gallery.component.less']
})
export class RoguesGalleryComponent implements OnInit {

  elemental: SummonElemental;

  constructor() { 

    this.elemental = new SummonElemental({
      name: "Carbuncle",
      type: new SummonType({
          name: "Esper",
          type: "Ranged"
      }),
      role: new SummonRole("Healer")
    });

    this.elemental.abilities = [
        new SummonAbility({
          name:"Aide",
          type:"Active",
          cooldown_secs: 120,
          mana_points: 10
        }),
        new SummonAbility({
          name:"Shield",
          type:"Active",
          cooldown_secs: 120,
          mana_points: 10
        }),
        new SummonAbility({
          name:"Rejunivate",
          type:"Passive",
          cooldown_secs: 30,
          mana_points: 5
        }),
        new SummonAbility({
          name:"Ressurect",
          type:"Active",
          cooldown_secs: 120,
          mana_points: 80
        })
    ];

  }

  ngOnInit() {}

}
