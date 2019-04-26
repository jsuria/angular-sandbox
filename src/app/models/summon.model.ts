export class SummonElemental {
    name: string;
    type: SummonType;
    role: SummonRole;
    abilities: SummonAbility[];

    constructor(options: { name: string, type: SummonType, role: SummonRole }) {
        this.name = options.name;
        this.type = options.type;
        this.role = options.role;
    }
}

export class SummonAbility {
    name: string;
    type: string;  // passive. active
    cooldown_secs: number; // preferably numeric
    mana_points: number;

    constructor(options: { name: string, type: string, cooldown_secs: number, mana_points: number }) {
        this.name = options.name;
        this.type = options.type;
        this.cooldown_secs = options.cooldown_secs;
        this.mana_points = options.mana_points;
    }
}

export class SummonType {
    name: string; 
    type: any; // melee, ranged

    constructor(options: { name: string, type: any }) {
        this.name = options.name;
        this.type = options.type;
    }
}

export class SummonRole {
    name: string; 

    constructor(name: string) {
        this.name = name;
    }
}