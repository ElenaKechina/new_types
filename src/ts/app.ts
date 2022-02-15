import Cart from './cart';
import Movie from './movie';

const avengers = new Movie({
  country: 'USA',
  genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  localizedName: 'Мстители',
  name: 'The Avengers',
  time: '137 мин./02:17',
  year: 2012,
});

const cart = new Cart();

console.log(cart.items);

cart.add(avengers);

console.log(cart.items);
