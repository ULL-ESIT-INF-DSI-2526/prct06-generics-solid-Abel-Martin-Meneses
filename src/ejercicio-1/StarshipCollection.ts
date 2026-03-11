import { BasicGalacticCollection } from "./BasicGalacticCollection.js";
import { Starship } from "./Starship.js";
import { SearchByAffiliation } from "./interfaces/SearchByAffiliation.js";
import { SearchByPlanet } from "./interfaces/SearchByPlanet.js";
import { SearchByPower } from "./interfaces/SearchByPower.js";
import { SearchByYear } from "./interfaces/SearchByYear.js";

export class StarshipCollection extends BasicGalacticCollection<Starship> implements SearchByAffiliation<Starship>, SearchByPlanet<Starship>, SearchByPower<Starship>, SearchByYear<Starship> {
  searchByAffiliation(affiliation: string): Starship[] {
    return this.items.filter(starship => starship.affiliation === affiliation);
  }

  searchByPlanet(planet: string): Starship[] {
    return this.items.filter(starship => starship.planet === planet);
  }

  searchByPower(power: number): Starship[] {
    return this.items.filter(starship => starship.power === power);
  }

  searchByYear(year: number): Starship[] {
    return this.items.filter(starship => starship.construction_year === year);
  }
}
