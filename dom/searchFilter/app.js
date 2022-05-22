const users = [
  'Goku',
  'Naruto',
  'Ichigo',
  'Flash',
  'Batman',
  'Sherlock Holmes',
  'Khaleesi',
  'Steve Fox'
];

ul = document.getElementById("users-list");

const render_lists = lists => {
  var li = "";
  for(index in lists){
    li += "<li>" + lists[index] + "</li>";
  }
  ul.innerHTML = li;
}

render_lists(users);

// lets filters it
input = document.getElementById('filter_users');

const filterUsers = event => {
  keyword = input.value.toLowerCase();
  filtered_users = users.filter((user) => {
        user = user.toLowerCase();
       return user.indexOf(keyword) > -1; 
  });
  
  render_lists(filtered_users);
}

input.addEventListener('keyup', filterUsers);

