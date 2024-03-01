/* eslint-disable no-alert */
/* eslint-disable no-undef */

const compararSenhas = (senha1, senha2) => {
  if (senha1 === senha2) {
    console.log('Sucesso');
  } if (senha1 !== senha2) {
    console.error('Erro..:');
  }
  return (senha1, senha2);
};
module.exports = compararSenhas;
