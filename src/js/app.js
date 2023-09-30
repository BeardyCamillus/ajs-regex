export default class Validator {
  validateUsername(name) {
    this.name = name;

    if (/^[a-zA-Z0-9_-]+$/.test(name) === false) {
      throw new Error('В Вашем имени допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)!');
    } else if (/[0-9]{3,}/.test(name) === true) {
      throw new Error('В Вашем имени не может быть трёх цифр подряд!');
    } else if (/^[\d_-]/.test(name) === true) {
      throw new Error('Ваше имя не может начинаться с цифр, тире или подчеркивания!');
    } else if (/[\d_-]$/.test(name) === true) {
      throw new Error('Ваше имя не может заканчиваться цифрами, тире или подчеркиванием!');
    } else {
      return 'Ваше имя соответствует правилам!';
    }
  }
}