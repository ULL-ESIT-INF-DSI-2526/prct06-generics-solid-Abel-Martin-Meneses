import { describe, it, expect } from 'vitest';
import { Sweet } from '../../src/ejercicio-pe/Sweet';

describe('Sweet Class', () => {
  it('Debe crear una receta dulce y calcular el tiempo total', () => {
    const tarta: Sweet = new Sweet('Tarta de Manzana', 5, 15, 45, 10);
    expect(tarta.nombre).toBe('Tarta de Manzana');
    expect(tarta.dificultad).toBe(5);
    expect(tarta.tiempo_preparacion).toBe(15);
    expect(tarta.tiempo_horneado).toBe(45);
    expect(tarta.tiempo_refrigeracion).toBe(10);
    expect(tarta.time()).toBe(70);
    expect(tarta.desc()).toEqual({ nombre: 'Tarta de Manzana', dificultad: 5 });
  });

  it('Debe lanzar error si la dificultad está fuera de rango', () => {
    expect(() => new Sweet('Mala', 11, 10, 10, 10)).toThrow('La dificultad debe ser un número entre 1 y 10');
    expect(() => new Sweet('Mala', 0, 10, 10, 10)).toThrow('La dificultad debe ser un número entre 1 y 10');
  });

  it('Debe lanzar error si algún tiempo es negativo', () => {
    expect(() => new Sweet('Error', 5, -1, 10, 10)).toThrow('Los tiempos deben ser positivos');
  });

  it('Debe crear una receta dulce correctamente', () => {
    const croissant: Sweet = new Sweet('Croissant', 3, 15, 30, 0);
    expect(croissant.time()).toBe(45);
    expect(croissant.desc()).toEqual({ nombre: 'Croissant', dificultad: 3 });
  });

  it('Debe crear una receta dulce y calcular el tiempo total', () => {
    const arroz_con_leche: Sweet = new Sweet('Arroz con leche', 5, 15, 0, 60);
    expect(arroz_con_leche.nombre).toBe('Arroz con leche');
    expect(arroz_con_leche.dificultad).toBe(5);
    expect(arroz_con_leche.tiempo_preparacion).toBe(15);
    expect(arroz_con_leche.tiempo_horneado).toBe(0);
    expect(arroz_con_leche.tiempo_refrigeracion).toBe(60);
    expect(arroz_con_leche.time()).toBe(75);
    expect(arroz_con_leche.desc()).toEqual({ nombre: 'Arroz con leche', dificultad: 5 });
  });

  it('Debe lanzar error si la dificultad es mayor a 10 o menor a 1', () => {
    expect(() => new Sweet('Mala', 11, 10, 10, 10)).toThrow('La dificultad debe ser un número entre 1 y 10');
    expect(() => new Sweet('Mala', 0, 10, 10, 10)).toThrow('La dificultad debe ser un número entre 1 y 10');
  });

  it('Debe lanzar error si algún tiempo es negativo', () => {
    expect(() => new Sweet('Error', 5, 1, -10, 10)).toThrow('Los tiempos deben ser positivos');
  });

  it('Debe lanzar error si algún tiempo es negativo', () => {
    expect(() => new Sweet('Error', 5, 1, 10, -10)).toThrow('Los tiempos deben ser positivos');
  });
});