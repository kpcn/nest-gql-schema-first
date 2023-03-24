import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as GraphQLTypes from 'src/graphql-types';
import { CoffeesService } from './coffees.service';

@Resolver()
export class CoffeesResolver {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Query('coffees')
  async coffees(): Promise<GraphQLTypes.Coffee[]> {
    return this.coffeesService.findAll();
  }

  @Query('coffee')
  async findOne(
    @Args('id', ParseIntPipe) id: number,
  ): Promise<GraphQLTypes.Coffee> {
    return this.coffeesService.findOne(id);
  }

  @Mutation('createCoffee')
  async create(
    @Args('createCoffeeInput')
    createCoffeeInput: GraphQLTypes.CreateCoffeeInput,
  ): Promise<GraphQLTypes.Coffee> {
    return this.coffeesService.create(createCoffeeInput);
  }

  @Mutation('updateCoffee')
  async update(
    @Args('id', ParseIntPipe) id: number,
    @Args('updateCoffeeInput')
    updateCoffeeInput: GraphQLTypes.UpdateCoffeeInput,
  ): Promise<GraphQLTypes.Coffee> {
    return this.coffeesService.update(id, updateCoffeeInput);
  }
}
