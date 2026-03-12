import { describe, it, expect } from 'vitest';
import { Salty } from '../../src/ejercicio-pe/Salty';

describe('Salty Class', () => {
  it('Debe crear una receta salada y devolver sus propiedades y getters', () => {
    const tortilla: Salty = new Salty('Tortilla', 'España', 20, 'principal');
    expect(tortilla.nombre).toBe('Tortilla');
    expect(tortilla.pais).toBe('España');
    expect(tortilla.tiempo).toBe(20);
    expect(tortilla.tipo_plato).toBe('principal');
    expect(tortilla.time()).toBe(20);
    expect(tortilla.desc()).toBe('Tortilla - Origen: España');
  });

  it('Debe lanzar error si el nombre es vacío', () => {
    expect(() => new Salty('', 'Test', 5, 'entrante')).toThrow('El nombre no puede ser vacío');
  });

  it('Debe lanzar error si el tiempo es negativo', () => {
    expect(() => new Salty('Error', 'Test', -5, 'entrante')).toThrow('El tiempo debe ser positivo');
  });

  it('Debe crear una receta salada correctamente', () => {
    const papas_fritas: Salty = new Salty('Papas fritas', 'Francia', 15, 'entrante');
    expect(papas_fritas.desc()).toBe('Papas fritas - Origen: Francia');
    expect(papas_fritas.time()).toBe(15);
  })

  it('Debe crear una receta salada correctamente y obtener sus getters', () => {
    const tacos: Salty = new Salty('Tacos', 'México', 45, 'principal');
    expect(tacos.desc()).toBe('Tacos - Origen: México');
    expect(tacos.time()).toBe(45);
    expect(tacos.nombre).toBe('Tacos');
    expect(tacos.pais).toBe('México');
    expect(tacos.tiempo).toBe(45);
    expect(tacos.tipo_plato).toBe('principal');
  })

  it('Debe lanzar error si el tiempo es negativo', () => {
    expect(() => new Salty('Error', 'Test', -100, 'entrante')).toThrow('El tiempo debe ser positivo');
  });

  it('Debe lanzar error si el nombre es vacío', () => {
    expect(() => new Salty('', 'Papas', 25, 'principal')).toThrow('El nombre no puede ser vacío');
  });
});