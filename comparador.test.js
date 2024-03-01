/* eslint-disable no-undef */

const compararSenhas = require('./index');

describe('Testa a comparação de senhas', () => {
  test('Verifica se as senhas são iguais', () => {
    expect(compararSenhas(1, 1)).toBe(1, 1);
  });
});
