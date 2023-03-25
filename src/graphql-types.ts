/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum CoffeeType {
  ARABICA = 'ARABICA',
  ROBUSTA = 'ROBUSTA',
}

export class CreateCoffeeInput {
  name: string;
  brand: string;
  type?: Nullable<CoffeeType>;
  flavors: string[];
}

export class UpdateCoffeeInput {
  name?: Nullable<string>;
  brand?: Nullable<string>;
  type?: Nullable<CoffeeType>;
  flavors?: Nullable<string[]>;
}

export interface Drink {
  name: string;
}

export class Tea implements Drink {
  name: string;
}

export class Coffee implements Drink {
  id: number;
  name: string;
  brand: string;
  flavors?: Nullable<Flavor[]>;
  type?: Nullable<CoffeeType>;
  createdAt?: Nullable<Date>;
}

export class Flavor {
  id: number;
  name: string;
}

export abstract class IQuery {
  coffees: Coffee[];
  coffee?: Coffee;
  drinks: DrinkResult[];
}

export abstract class IMutation {
  createCoffee?: Coffee;
  updateCoffee?: Coffee;
  removeCoffee?: Coffee;
}

export type DrinkResult = Coffee | Tea;
type Nullable<T> = T | null;
