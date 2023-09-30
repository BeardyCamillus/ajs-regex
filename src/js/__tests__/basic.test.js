import Validator from '../app';

test('Валидное имя', () => {
  expect(new Validator().validateUsername('ka1a')).toEqual('Ваше имя соответствует правилам!');
});

test('Невалидные символы в имени', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('kaйja');
  }).toThrow(new Error('В Вашем имени допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)!'));
});

test('Когда в имени больше трех цифр подряд', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('ka111ja');
  }).toThrow(new Error('В Вашем имени не может быть трёх цифр подряд!'));
});

test('Невалидное значение в начале', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('1kaja');
  }).toThrow(new Error('Ваше имя не может начинаться с цифр, тире или подчеркивания!'));
});

test('Невалидное значение в конце', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('kaja2');
  }).toThrow(new Error('Ваше имя не может заканчиваться цифрами, тире или подчеркиванием!'));
});