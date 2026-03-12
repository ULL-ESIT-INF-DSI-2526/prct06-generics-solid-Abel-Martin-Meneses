import { describe, it, expect, beforeEach } from 'vitest';
import { Salty } from '../../src/ejercicio-pe/Salty';
import { Sweet } from '../../src/ejercicio-pe/Sweet';
import { CookBook } from '../../src/ejercicio-pe/CookBook';

describe('CookBook Class', () => {
  let recetario: CookBook<Salty | Sweet>;
  let ensalada: Salty;
  let bizcocho: Sweet;
  let tortilla: Salty;
  let arroz_con_leche: Sweet;

  beforeEach(() => {
    recetario = new CookBook<Salty | Sweet>();
    ensalada = new Salty('Ensalada', 'Italia', 10, 'entrante');
    bizcocho = new Sweet('Bizcocho', 3, 20, 30, 0);
    tortilla = new Salty('Tortilla', 'España', 20, 'principal');
    arroz_con_leche = new Sweet('Arroz con leche', 5, 15, 0, 60);
  });

  it('Debe añadir recetas y obtener el tamaño (add, size)', () => {
    expect(recetario.size()).toBe(0);
    recetario.add(ensalada);
    recetario.add(bizcocho);
    expect(recetario.size()).toBe(2);
  });

  it('Debe obtener una receta por índice (get) y lanzar error si no existe', () => {
    recetario.add(ensalada);
    expect(recetario.get(0)).toBe(ensalada);
    expect(() => recetario.get(5)).toThrow('El índice no existe en la colección');
    expect(() => recetario.get(-1)).toThrow('El índice no existe en la colección');
  });

  it('Debe eliminar una receta por índice (remove) y lanzar error si no existe', () => {
    recetario.add(ensalada);
    recetario.remove(0);
    expect(recetario.size()).toBe(0);
    expect(() => recetario.remove(0)).toThrow('El índice no existe en la colección');
  });

  it('Debe filtrar recetas devolviendo un nuevo CookBook (filter)', () => {
    recetario.add(ensalada);
    recetario.add(bizcocho);
    const postres: CookBook<Sweet | Salty> = recetario.filter((receta) => receta instanceof Sweet);
    expect(postres.size()).toBe(1);
    expect(postres.get(0).time()).toBe(50);
  });

  it('Debe calcular el tiempo medio (avgTime) o 0 si está vacío', () => {
    expect(recetario.avgTime()).toBe(0);
    recetario.add(ensalada); 
    recetario.add(bizcocho);
    expect(recetario.avgTime()).toBe(30);
  });

  it('Debe añadir recetas y obtener el tamaño (add, size)', () => {
    expect(recetario.size()).toBe(0);
    recetario.add(tortilla);
    recetario.add(arroz_con_leche);
    recetario.add(ensalada)
    expect(recetario.size()).toBe(3);
  });

  it('Debe obtener una receta por índice (get) y lanzar error si no existe', () => {
    recetario.add(tortilla);
    recetario.add(arroz_con_leche);
    expect(recetario.get(0)).toBe(tortilla);
    expect(recetario.get(1)).toBe(arroz_con_leche);
    expect(() => recetario.get(5)).toThrow('El índice no existe en la colección');
    expect(() => recetario.get(-1)).toThrow('El índice no existe en la colección');
  });

  it('Debe eliminar una receta por índice (remove) y lanzar error si no existe', () => {
    recetario.add(arroz_con_leche);
    recetario.remove(0);
    expect(recetario.size()).toBe(0);
    expect(() => recetario.remove(0)).toThrow('El índice no existe en la colección');
  });

  it('Debe filtrar recetas devolviendo un nuevo CookBook (filter)', () => {
    recetario.add(tortilla);
    recetario.add(arroz_con_leche);
    recetario.add(ensalada); 
    recetario.add(bizcocho);
    const postres: CookBook<Sweet | Salty> = recetario.filter((receta) => receta instanceof Sweet);
    expect(postres.size()).toBe(2);
    expect(postres.get(0).time()).toBe(75);
  });

  it('Debe calcular el tiempo medio (avgTime) o 0 si está vacío', () => {
    expect(recetario.avgTime()).toBe(0);
    recetario.add(ensalada); 
    recetario.add(bizcocho);
    recetario.add(tortilla);
    recetario.add(arroz_con_leche);
    expect(recetario.avgTime()).toBe(38.75);
  });
});