describe('API validation', () => {
  it('should validate GET users API', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);

      expect(response.body[0]).to.have.property('id');
      expect(response.body[0]).to.have.property('name');
      expect(response.body[0]).to.have.property('email');

      cy.screenshot('api-get-users-success');
    });
  });

  it('should validate POST request', () => {
    const requestBody = {
      title: 'demo title',
      body: 'demo body',
      userId: 1
    };

    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', requestBody).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('title', requestBody.title);
      expect(response.body).to.have.property('body', requestBody.body);
      expect(response.body).to.have.property('userId', requestBody.userId);

      cy.screenshot('api-post-success');
    });
  });
});