import { getTodos, getTodoAddButton } from '../support/app.po';

describe('ng-blog', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    getTodos().should((t) => expect(t.length).equal(2));
    getTodoAddButton().click();
    getTodos().should((t) => expect(t.length).equal(3));
  });
});
