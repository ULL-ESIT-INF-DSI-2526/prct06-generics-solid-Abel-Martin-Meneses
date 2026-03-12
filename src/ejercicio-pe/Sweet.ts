import { Elaborable } from "./Elaborable.js";

/**
 * Interfaz que define un objeto Sweet
 */
interface SweetObject {
  nombre: string;
  dificultad: number;
}

/**
 * Clase Sweet que representa un plato dulce e implementa la interfaz Elaborable
 */
export class Sweet implements Elaborable<SweetObject> {
  /**
   * Es el método constructor de la clase Sweet
   * @param _nombre - nombre del plato
   * @param _dificultad - dificultad de realización del plato
   * @param _tiempo_preparacion - tiempo de preparación en minutos
   * @param _tiempo_horneado - tiempo de horneado en minutos
   * @param _tiempo_refrigeracion - tiempo de refrigeración en minutos
   */
  constructor(
    private readonly _nombre: string,
    private readonly _dificultad: number,
    private readonly _tiempo_preparacion: number,
    private readonly _tiempo_horneado: number,
    private readonly _tiempo_refrigeracion: number,
  ) {
    if (!this._nombre.trim()) {
      throw new Error ('El nombre no puede ser vacío');
    }

    if (this._dificultad < 1 || this._dificultad > 10) {
      throw new Error ('La dificultad debe ser un número entre 1 y 10');
    }

    if (this._tiempo_preparacion < 0 || this._tiempo_horneado < 0 || this._tiempo_refrigeracion < 0) {
      throw new Error ('Los tiempos deben ser positivos');
    }
  }

  /**
   * Devuelve el nombre del plato
   */
  get nombre(): string { return this._nombre; };

  /**
   * Devuelve la dificultad del plato
   */
  get dificultad(): number { return this._dificultad; };

  /**
   * Devuelve el tiempo de preparación en minutos
   */
  get tiempo_preparacion(): number { return this._tiempo_preparacion; };

  /**
   * Devuelve el tiempo de horneado en minutos
   */
  get tiempo_horneado(): number { return this._tiempo_horneado; };

  /**
   * Devuelve el tiempo de refrigeración en minutos
   */
  get tiempo_refrigeracion(): number { return this._tiempo_refrigeracion; };

  /**
   * Propiedad que contiene la descripción del plato
   * @returns devuelve un objeto SweetObject
   */
  desc(): SweetObject {
    return { nombre: this._nombre, dificultad: this._dificultad };
  }

  /**
   * Propiedad que contiene el tiempo total en minutos para hacer el plato
   * @returns el tiempo total de preparación del plato en minutos sumando todos los tiempos
   */
  time(): number {
    return this._tiempo_preparacion + this._tiempo_horneado + this._tiempo_refrigeracion;
  }
}