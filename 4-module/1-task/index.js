/**
* Генерация HTML списка друзей
* @param {Object[]} friends
* @return {HTMLUListElement}
*/
function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  document.body.append(ul);
  
  let liList = function (friends) {
    let str = "";
    for (let i = 0; i < friends.length; i++){
      str += "<li>" + friends[i].firstName + " " + friends[i].lastName + "</li>";
    }
    return str;
  };
  ul.innerHTML = liList(friends);
  return ul;
}
