import Team from '../index';

test('Test Iterator', () => {
  const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  
  const daem = {
    name: 'Демон',
    type: 'Daemon',
    health: 40,
    level: 1,
    attack: 10,
    defence: 40,
  };
  
  const end = { done: true, value: undefined };
  const team = new Team(char, daem).iterator();
  expect(team.next().value).toEqual(char);
  expect(team.next().value).toEqual(daem);
  expect(team.next()).toEqual(end);
});
