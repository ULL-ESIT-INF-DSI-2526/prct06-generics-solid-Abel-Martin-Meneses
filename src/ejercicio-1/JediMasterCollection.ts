import { BasicGalacticCollection } from "./BasicGalacticCollection.js";
import { JediMaster } from "./JediMaster.js";
import { SearchByAffiliation } from "./interfaces/SearchByAffiliation.js";
import { SearchByPlanet } from "./interfaces/SearchByPlanet.js";
import { SearchByPower } from "./interfaces/SearchByPower.js";
import { SearchByYear } from "./interfaces/SearchByYear.js";

export class JediMasterCollection extends BasicGalacticCollection<JediMaster> implements SearchByAffiliation<JediMaster>, SearchByPlanet<JediMaster>, SearchByPower<JediMaster>, SearchByYear<JediMaster> {
  searchByAffiliation(affiliation: string): JediMaster[] {
    return this.items.filter(jedi => jedi.affiliation === affiliation);
  }

  searchByPlanet(planet: string): JediMaster[] {
    return this.items.filter(jedi => jedi.planet === planet);
  }

  searchByPower(power: number): JediMaster[] {
    return this.items.filter(jedi => jedi.power === power);
  }

  searchByYear(year: number): JediMaster[] {
    return this.items.filter(jedi => jedi.training_year === year);
  }
}