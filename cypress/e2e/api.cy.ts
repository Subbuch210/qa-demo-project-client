describe('API validation', () => {
  it('should validate GET users API', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length.greaterThan(0);
      expect(response.body[0]).to.have.property('name');
    });
  });

  it('should validate POST request', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
      title: 'demo title',
      body: 'demo body',
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('title', 'demo title');
      expect(response.body).to.have.property('body', 'demo body');
      expect(response.body).to.have.property('userId', 1);
    });
  });
});