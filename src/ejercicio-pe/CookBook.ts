import { Elaborable } from "./Elaborable.js";

/**
 * Clase CookBook que representa un recetario
 */
export class CookBook<T extends Elaborable<any>> {
  private recetas: T[] = [];
  
  constructor() {};

  /**
   * Método que añade una receta al recetario
   * @param receta - es la receta a añadir
   */
  add(receta: T): void {
    this.recetas.push(receta);
  }

  /**
   * Método que elimina una receta a través de su índice en el recetario
   * @param index - indice de la receta a eliminar
   */
  remove(index: number): void {
    if (index < 0 || index >= this.recetas.length) {
      throw new Error ('El índice no existe en la colección');
    }
    this.recetas.splice(index, 1);
  }

  /**
   * Método para obtener una receta por su índice
   * @param index - índice de la receta que se quiere obtenet
   * @returns devuelve la receta que se encuentra en index
   */
  get(index: number): T {
    if (index < 0 || index >= this.recetas.length) {
      throw new Error ('El índice no existe en la colección');
    }

    return this.recetas[index];
  }

  /**
   * Método para obtener el tamaño del recetario
   * @returns devuelve el tamaño del recetario
   */
  size(): number {
    return this.recetas.length;
  }

  /**
   * Método para filtrar recetas en función de un predicado
   * @param predicado - función que se aplica al recetario para filtrar
   * @returns devuelve un recetario resultado del filtro
   */
  filter(predicado: (receta: T) => boolean): CookBook<T> {
    const nuevo_recetario: CookBook<T> = new CookBook<T>();
    for (const receta of this.recetas) {
      if (predicado(receta)) {
        nuevo_recetario.add(receta);
      }
    }
    return nuevo_recetario;
  }
  
  /**
   * Método para calcular el tiempo medio de preparación del recetario
   * @returns devuelve el tiempo medio de preparación de recetas del recetario
   */
  avgTime(): number {
    if (this.size() === 0) return 0;
    const tiempo_total = this.recetas.reduce((suma, actual) => suma + actual.time(), 0);
    return tiempo_total / this.size();
  }
}