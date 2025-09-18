import request from 'supertest';
import { expect } from 'chai';

const API_URL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder Posts - GET Requests', () => {

    it('should fetch all posts and return an array of 100 items', async () => {
        const response = await request(API_URL).get('/posts');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array').with.lengthOf(100);
    });

    it('should fetch a single post by ID and verify its structure', async () => {
        const response = await request(API_URL).get('/posts/1');
        expect(response.status).to.equal(200);
        expect(response.body).to.have.all.keys('userId', 'id', 'title', 'body');
        expect(response.body.id).to.equal(1);
    });

    it('should fetch a 404 for a post that does not exist', async () => {
        const response = await request(API_URL).get('/posts/9999');
        expect(response.status).to.equal(404);
        expect(response.body).to.be.an('object').that.is.empty;
    });

});


describe('JSONPlaceholder Posts - CRUD Operations', () => {

    it('should create a new post with POST request', async () => {
        const newPost = {
            title: 'My First Post',
            body: 'Hello, World!',
            userId: 1,
        };
        const response = await request(API_URL)
            .post('/posts')
            .send(newPost)
            .set('Content-Type', 'application/json');

        expect(response.status).to.equal(201); // 201 Created
        expect(response.body).to.include(newPost);
        expect(response.body).to.have.property('id').that.is.a('number');
    });

    it('should update an existing post with PUT request', async () => {
        const updatedPost = {
            id: 1,
            title: 'Updated Title',
            body: 'Updated Body',
            userId: 1,
        };
        const response = await request(API_URL)
            .put('/posts/1')
            .send(updatedPost)
            .set('Content-Type', 'application/json');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(updatedPost);
    });

    it('should delete a post with DELETE request', async () => {
        const response = await request(API_URL).delete('/posts/1');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object').that.is.empty;
    });

});


describe('JSONPlaceholder Related Resources', () => {

    it('should fetch comments for a specific post', async () => {
        const response = await request(API_URL).get('/posts/1/comments');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        response.body.forEach(comment => {
            expect(comment).to.have.property('postId').that.equals(1);
        });
    });

    it('should fetch comments using a query parameter', async () => {
        const response = await request(API_URL).get('/comments?postId=1');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        response.body.forEach(comment => {
            expect(comment).to.have.property('postId').that.equals(1);
        });
    });

});

