import { describe, it, expect, beforeEach } from "vitest";
import { JediMaster } from "../../src/ejercicio-1/JediMaster";
import { JediMasterCollection } from "../../src/ejercicio-1/JediMasterCollection";
import { StarshipCollection } from "../../src/ejercicio-1/StarshipCollection";
import { HolocronCollection } from "../../src/ejercicio-1/HolocronCollection";
import { Starship } from "../../src/ejercicio-1/Starship";
import { Holocron } from "../../src/ejercicio-1/Holocron";

describe('JediMasterCollection', () => {
  let jediCollection: JediMasterCollection;
  let yoda: JediMaster
  let anakin: JediMaster;

  beforeEach(() => {
    jediCollection = new JediMasterCollection();
    
    yoda = new JediMaster('Yoda', 'República', 9500, 896, 'Desconocido');
    anakin = new JediMaster('Anakin Skywalker', 'República', 8500, 41, 'Tatooine');
    
    jediCollection.addNewItem(yoda);
    jediCollection.addNewItem(anakin);
  });

  describe('Operaciones Básicas (BasicGalacticCollection)', () => {
    it('debe devolver todos los elementos con getAll()', () => {
      expect(jediCollection.getItems().length).toBe(2);
    });

    it('debe eliminar un elemento con remove()', () => {
      jediCollection.removeItem(yoda);
      expect(jediCollection.getItems().length).toBe(1);
      expect(jediCollection.getItems()[0].name).toBe('Anakin Skywalker');
    });

    it('debe buscar entidades por nombre (searchByName)', () => {
      const results = jediCollection.searchByName('skywalker');
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Anakin Skywalker');
    });

    it('debe obtener un elemento por el índice (getItem)', () => {
      const result = jediCollection.getItem(0);
      expect(result).toBe(jediCollection.getItem(0));
    })

    it('debe obtener el número de elementos de una collection (getNumberOfItems)', () => {
      const result = jediCollection.getNumberOfItems();
      expect(result).toBe(2);
    })
  });

  describe('Búsquedas Específicas Jedi', () => {
    it('debe filtrar por afiliación (searchByAffiliation)', () => {
      const results = jediCollection.searchByAffiliation('República');
      expect(results.length).toBe(2);
    });

    it('debe filtrar por planeta (searchByPlanet)', () => {
      const results = jediCollection.searchByPlanet('Tatooine');
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Anakin Skywalker');
    });

    it('debe filtrar por poder (searchByPower)', () => {
      const results = jediCollection.searchByPower(9500);
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Yoda');
    });

    it('debe filtrar por año evaluando training_year (searchByYear)', () => {
      const results = jediCollection.searchByYear(896);
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Yoda');
    });
  });
});

describe('StarshipCollection', () => {
  let starshipCollection: StarshipCollection;
  let xwing: Starship;

  beforeEach(() => {
    starshipCollection = new StarshipCollection();
    xwing = new Starship('X-Wing', 'República', 100, 0, 'Fresia');
    
    starshipCollection.addNewItem(xwing);
  });

  it('debe buscar por nombre (searchByName)', () => {
    expect(starshipCollection.searchByName('X-Wing').length).toBe(1);
  });

  it('debe filtrar por afiliación (searchByAffiliation)', () => {
    expect(starshipCollection.searchByAffiliation('República').length).toBe(1);
  });

  it('debe filtrar por poder (searchByPower)', () => {
    expect(starshipCollection.searchByPower(100).length).toBe(1);
  });

  it('debe filtrar por planeta (searchByPlanet)', () => {
    expect(starshipCollection.searchByPlanet('Fresia').length).toBe(1);
  });

  it('debe filtrar por año evaluando construction_year (searchByYear)', () => {
    expect(starshipCollection.searchByYear(0).length).toBe(1);
  });
});

describe('HolocronCollection', () => {
  let holocronCollection: HolocronCollection;
  let sithHolocron: Holocron;

  beforeEach(() => {
    holocronCollection = new HolocronCollection();
    sithHolocron = new Holocron('Holocrón Sith', 'Sith', 5000, 3956, 'Korriban');
    
    holocronCollection.addNewItem(sithHolocron);
  });

  it('debe buscar por nombre (searchByName)', () => {
    expect(holocronCollection.searchByName('Sith').length).toBe(1);
  });

  it('debe filtrar por afiliación (searchByAffiliation)', () => {
    expect(holocronCollection.searchByAffiliation('Sith').length).toBe(1);
  });

  it('debe filtrar por poder (searchByPower)', () => {
    expect(holocronCollection.searchByPower(5000).length).toBe(1);
  });

  it('debe filtrar por planeta (searchByPlanet)', () => {
    expect(holocronCollection.searchByPlanet('Korriban').length).toBe(1);
  });

  it('debe filtrar por año evaluando construction_year (searchByYear)', () => {
    expect(holocronCollection.searchByYear(3956).length).toBe(1);
  });
});