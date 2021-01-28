/**
* @param   {{ name: string, age: number }[]} users
* @returns {string[]}  объект
*/
function namify(users) {
  let mappedNames = users.map((user) => {
    return user.name;
  });
  return mappedNames;
};
