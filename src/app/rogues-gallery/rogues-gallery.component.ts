import { Component, OnInit } from '@angular/core';
//import { SummonElemental, SummonAbility, SummonType, SummonRole } from '../models/summon.model';

@Component({
  selector: 'app-rogues-gallery',
  templateUrl: './rogues-gallery.component.html',
  styleUrls: ['./rogues-gallery.component.css']
})
export class RoguesGalleryComponent implements OnInit {

  // TODO - Generate data from DB
  // TODO - Create webservices (WP, Node, Symfony/Laravel/ZF2)
  elementals: any[];

  // TODO - Move summon character code to profile component
  constructor() {}

  ngOnInit() {
    this.elementals = [
      // Carbuncle
      {
        name: "Carbuncle",
        type: {
            name: "Esper",
            type: "Ranged"
        },
        role: "Healer",
        abilities: [
          {
            name:"Aide",
            type:"Active",
            cooldown_secs: 120,
            mana_points: 10
          },
          {
            name:"Shield",
            type:"Active",
            cooldown_secs: 120,
            mana_points: 10
          },
          {
            name:"Rejunivate",
            type:"Passive",
            cooldown_secs: 30,
            mana_points: 5
          },
          {
            name:"Ressurect",
            type:"Active",
            cooldown_secs: 120,
            mana_points: 80
          }        ]
      },
      // Shiva
      {
        name: "Shiva",
        type: {
            name: "Esper",
            type: "Ranged"
        },
        role: "Mage",
        abilities: [
          {
            name:"Ice Beam",
            type:"Active",
            cooldown_secs: 120,
            mana_points: 10
          },
          {
            name:"Frost Gale",
            type:"Active",
            cooldown_secs: 120,
            mana_points: 10
          },
          {
            name:"Cocoon",
            type:"Active",
            cooldown_secs: 30,
            mana_points: 5
          },
          {
            name:"Diamond Dust",
            type:"Active",
            cooldown_secs: 120,
            mana_points: 80
          }        
        ]
      },
      // Cloud Strife
      {
        name: "Cloud",
        type: {
            name: "Player",
            type: "Melee"
        },
        role: "Knight",
        abilities: [
          {
            name:"Gunblade",
            type:"Active",
            cooldown_secs: 60,
            mana_points: 10
          },
          {
            name:"Strafe: Ranged / Strafe: Slash",
            type:"Passive",
            cooldown_secs: 60,
            mana_points: 0
          },
          {
            name:"Omega Boost",
            type:"Active",
            cooldown_secs: 30,
            mana_points: 5
          },
          {
            name:"Strider",
            type:"Active",
            cooldown_secs: 180,
            mana_points: 80
          }        
        ]
      },
    ];
  }
}
