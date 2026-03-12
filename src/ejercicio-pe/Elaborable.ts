/**
 * Interfaz genérica Elaborable que sirve para definir una receta
 */
export interface Elaborable<T> {
  desc(): T;
  time(): number;
}