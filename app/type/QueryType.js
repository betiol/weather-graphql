// @flow

import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
} from 'graphql';

import CityType from './CityType';

import getWeather from '../services/CityWeather';

export default new GraphQLObjectType({
    name: 'Query',
    description: 'The root of all... queries',
    fields: () => ({
        weatherByCity: {
            type: CityType,
            args: {
                city: {
                    type: new GraphQLNonNull(GraphQLString),
                }
            },
            resolve: async (obj, args, context) => {
                return await getWeather(args.city);
            }
        },
    }),
});