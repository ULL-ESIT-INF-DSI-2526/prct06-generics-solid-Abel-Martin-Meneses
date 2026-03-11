import { BasicGalacticCollection } from "./BasicGalacticCollection.js";
import { Holocron } from "./Holocron.js";
import { SearchByAffiliation } from "./interfaces/SearchByAffiliation.js";
import { SearchByPlanet } from "./interfaces/SearchByPlanet.js";
import { SearchByPower } from "./interfaces/SearchByPower.js";
import { SearchByYear } from "./interfaces/SearchByYear.js";

export class HolocronCollection extends BasicGalacticCollection<Holocron> implements SearchByAffiliation<Holocron>, SearchByPlanet<Holocron>, SearchByPower<Holocron>, SearchByYear<Holocron> {
  searchByAffiliation(affiliation: string): Holocron[] {
    return this.items.filter(holocron => holocron.affiliation === affiliation);
  }

  searchByPlanet(planet: string): Holocron[] {
    return this.items.filter(holocron => holocron.planet === planet);
  }

  searchByPower(power: number): Holocron[] {
    return this.items.filter(holocron => holocron.power === power);
  }

  searchByYear(year: number): Holocron[] {
    return this.items.filter(holocron => holocron.construction_year === year);
  }
}