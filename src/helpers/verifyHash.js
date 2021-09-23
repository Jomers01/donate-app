// const argon2 = require('argon2');

function verifyHash(hash, password) {
  // argon2.verify(hash, password)
  //   .then(verified => verified)
  //   .catch(err => console.log(`Error en la verificación: (${err})`));
  return hash;
}

export default verifyHash;