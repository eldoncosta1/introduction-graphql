import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";
import crypo from 'crypto';

// query: buscar dados
// mutation: criar, alterar ou deletar

@Resolver()
export class UserResolver {
  private data: User[] = [];

  @Query(() => [User])
  async users() {
    return this.data;
  }

  @Mutation(() => User)
  async createUser(
    @Arg('name') name: string,
  ) {
    const user = { id: crypo.randomUUID(), name }

    this.data.push(user);

    return user;
  }
}