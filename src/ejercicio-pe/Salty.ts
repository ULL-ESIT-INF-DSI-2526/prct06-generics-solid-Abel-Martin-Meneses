import { Elaborable } from "./Elaborable.js";

/**
 * Clase Salty que representa platos salados e implementa la interfaz Elaborable
 */

export class Salty implements Elaborable<string> {
  /**
   * Es el método constructor de la clase Salty
   * @param _nombre - nombre del plato
   * @param _pais - país de origen del plato
   * @param _tiempo - tiempo en minutos para preparar el plato
   * @param _tipo_plato - tipo de plato (entrante, principal, postre)
   */
  constructor(
    private readonly _nombre: string,
    private readonly _pais: string,
    private readonly _tiempo: number,
    private readonly _tipo_plato: string
  ) {
    if (!this._nombre.trim()) {
      throw new Error ('El nombre no puede ser vacío');
    }

    if (this._tiempo < 0) {
      throw new Error ('El tiempo debe ser positivo');
    }
  }

  /**
   * Devuelve el nombre del plato
   */
  get nombre(): string { return this._nombre; };

  /**
   * Devuelve el país de origen
   */
  get pais(): string { return this._pais; };

  /**
   * Devuelve el tiempo de preparación
   */
  get tiempo(): number { return this._tiempo; };

  /**
   * Devuelve el tipo de plato
   */
  get tipo_plato(): string { return this._tipo_plato; };

  /**
   * Propiedad que contiene la descripción del plato
   * @returns devuelve una string con el nombre del plato y su país de origen
   */
  desc(): string {
    return `${this._nombre} - Origen: ${this._pais}`;
  }

  /**
   * Propiedad que contiene el tiempo de realización del plato
   * @returns devuelve el tiempo en minutos que se tarda en realizar el plato
   */
  time(): number {
    return this._tiempo;
  }
}