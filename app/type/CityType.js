// @flow

import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
    name: 'City',
    description: 'Represents an address',
    fields: {
        temp: {
            type: GraphQLInt,
            resolve: obj => obj.temp,
        },
        date: {
            type: GraphQLString,
            resolve: obj => obj.date,
        },
        time: {
            type: GraphQLString,
            resolve: obj => obj.time,
        },
        condition_code: {
            type: GraphQLString,
            resolve: obj => obj.condition_code,
        },
        description: {
            type: GraphQLString,
            resolve: obj => obj.description,
        },
        currently: {
            type: GraphQLString,
            resolve: obj => obj.currently,
        },
        cid: {
            type: GraphQLString,
            resolve: obj => obj.cid,
        },
        city: {
            type: GraphQLString,
            resolve: obj => obj.city,
        },
        img_id: {
            type: GraphQLString,
            resolve: obj => obj.img_id,
        },
        humidity: {
            type: GraphQLString,
            resolve: obj => obj.humidity,
        },
        wind_speedy: {
            type: GraphQLString,
            resolve: obj => obj.wind_speedy,
        },
        sunrise: {
            type: GraphQLString,
            resolve: obj => obj.sunrise,
        },
        sunset: {
            type: GraphQLString,
            resolve: obj => obj.sunset,
        },
        condition_slug: {
            type: GraphQLString,
            resolve: obj => obj.condition_slug,
        },
        city_name: {
            type: GraphQLString,
            resolve: obj => obj.city_name,
        },
    }
});