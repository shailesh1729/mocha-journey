// test/pokeapi.test.js
import request from 'supertest';
import { expect } from 'chai';

const API_URL = 'https://pokeapi.co/api/v2';

describe('PokéAPI Endpoints', () => {

    it('should fetch a single Pokémon by name', async () => {
        const response = await request(API_URL).get('/pokemon/pikachu');
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal('pikachu');
        expect(response.body.id).to.equal(25);
    });

    it('should fetch a single Pokémon by ID', async () => {
        const response = await request(API_URL).get('/pokemon/25');
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal('pikachu');
    });

    it('should return a 404 for a non-existent Pokémon', async () => {
        const response = await request(API_URL).get('/pokemon/this-pokemon-does-not-exist');
        expect(response.status).to.equal(404);
        // The API returns an empty object on a 404 for this endpoint, not a string
        expect(response.body).to.deep.equal({});
    });

    it('should return a 400 for an invalid endpoint', async () => {
        const response = await request(API_URL).get('/invalid-endpoint-path');
        expect(response.status).to.equal(400);
        // The API returns a 400 status with an empty body for invalid endpoints
        expect(response.body).to.deep.equal({});
    });

    it('should fetch all Pokémon with pagination', async () => {
        const response = await request(API_URL).get('/pokemon');
        expect(response.status).to.equal(200);
        expect(response.body.results).to.be.an('array');
        expect(response.body.results).to.have.lengthOf(20); // Default page size
        expect(response.body.next).to.exist; // Check for next page URL
    });
});

describe('PokéAPI Abilities Endpoint', () => {

  it('should fetch a Pokémon\'s abilities and verify the data structure', async () => {
    const response = await request(API_URL).get('/pokemon/bulbasaur');
    expect(response.status).to.equal(200);
    
    // Assert that the 'abilities' property exists and is an array
    expect(response.body.abilities).to.exist;
    expect(response.body.abilities).to.be.an('array');
    
    // Assert that each ability object has the required properties
    response.body.abilities.forEach(ability => {
      expect(ability).to.have.all.keys('ability', 'is_hidden', 'slot');
      expect(ability.ability).to.have.all.keys('name', 'url');
    });
  });
});

describe('PokéAPI Pokédex Entry', () => {

  it('should fetch a Pokédex entry and verify its content', async () => {
    const response = await request(API_URL).get('/pokemon-species/1');
    expect(response.status).to.equal(200);    
    // Assert that the fetched entry's name is 'bulbasaur'
    expect(response.body.name).to.equal('bulbasaur');
    // Assert that the Pokédex number is 1
    expect(response.body.id).to.equal(1);
    // Assert that the base happiness is correct.
    expect(response.body.base_happiness).to.equal(70);
  });
});
