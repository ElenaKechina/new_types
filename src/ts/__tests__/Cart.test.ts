import Cart from '../cart';
import Movie from '../movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('card should return items', () => {
  const cart = new Cart();

  const avengers = new Movie({
    country: 'USA',
    genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    localizedName: 'Мстители',
    name: 'The Avengers',
    time: '137 мин./02:17',
    year: 2012,
  });

  cart.add(avengers);

  expect(cart.items).toEqual([avengers]);
});
