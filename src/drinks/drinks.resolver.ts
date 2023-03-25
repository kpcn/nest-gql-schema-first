import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import * as GraphQLTypes from '../graphql-types';

@Resolver('DrinkResult')
export class DrinksResolver {
  @Query('drinks')
  async findAll(): Promise<GraphQLTypes.DrinkResult[]> {
    const coffee = new GraphQLTypes.Coffee();
    coffee.id = 1;
    coffee.name = 'Colombian';
    coffee.brand = 'Black Crow Coffee';

    const tea = new GraphQLTypes.Tea();
    tea.name = 'Lipton';
    return [tea, coffee];
  }

  @ResolveField()
  __resolveType(value: GraphQLTypes.Drink) {
    if (value instanceof GraphQLTypes.Coffee) {
      return 'Coffee';
    } else if (value instanceof GraphQLTypes.Tea) {
      return 'Tea';
    }
    return null;
  }
}
