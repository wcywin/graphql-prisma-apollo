// Demo user data
const users = [{
  id: '1',
  name: 'Wojciech',
  email: 'wojciech@example.pl',
  age: 32
}, {
  id: '2',
  name: 'Marta',
  email: 'marta@example.pl',
  age: 31
}, {
  id: '3',
  name: 'Kasia',
  email: 'kasia@example.pl',
  age: 30
}]

// Demo posts data
const posts = [{
  id: '1',
  title: 'Andalusia',
  body: 'GraphQl post 1 best',
  published: true,
  author: '1'
}, {
  id: '2',
  title: 'Post 2',
  body: 'Second ever happy dev!',
  published: false,
  author: '2'
}, {
  id: '3',
  title: 'Programming Frontend',
  body: 'Great bacon poster!',
  published: false,
  author: '2'
}]

// Demo comments data
const comments = [{
  id: '102',
  text: 'What a great place!',
  author: '2',
  post: '1'
}, {
  id: '103',
  text: 'I would love to go there!',
  author: '3',
  post: '1'
}, {
  id: '104',
  text: 'Keep travelling and discovering the world!',
  author: '2',
  post: '2'
}, {
  id: '105',
  text: 'I am going to TomorrowLand this year! Belgium!',
  author: '1',
  post: '3'
}]

const db = {
  users,
  posts,
  comments
}

export { db as default }