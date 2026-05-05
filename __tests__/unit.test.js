// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber returns true if formatted with dashes', () =>{
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber returns true if formatted with parentheses', () =>{
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber returns false if formatted too short', () =>{
  expect(isPhoneNumber('12345')).toBe(false);
});
test('isPhoneNumber returns false if formatted with letters', () =>{
  expect(isPhoneNumber('123-456-ABCD')).toBe(false);
});

//email
test('isEmail returns true if formatted regularly', () =>{
  expect(isEmail('user@example.com')).toBe(true);
});
test('isEmail returns true if formatted with numbers', () =>{
  expect(isEmail('user123@domain.com')).toBe(true);
});
test('isEmail returns false if formatted with no @ symbol', () =>{
  expect(isEmail('userdomain.com')).toBe(false);
});
test('isEmail returns false if formatted extra letters after domain', () =>{
  expect(isEmail('user@domain.comm')).toBe(false);
});

//password
test('isStrongPassword returns true if formatted with in char limit', () =>{
  expect(isStrongPassword('Password123')).toBe(true);
});
test('isStrongPassword returns true if formatted with underscores', () =>{
  expect(isStrongPassword('Password_123')).toBe(true);
});
test('isStrongPassword returns false if formatted too short', () =>{
  expect(isStrongPassword('pw1')).toBe(false);
});
test('isStrongPassword returns false if format starts with a number', () =>{
  expect(isStrongPassword('1password')).toBe(false);
});

//date
test('isDate returns true if formatted XX/XX/XXXX', () =>{
  expect(isDate('05/04/2026')).toBe(true);
});
test('isDate returns true if formatted X/X/XXXX', () =>{
  expect(isDate('5/4/2026')).toBe(true);
});
test('isDate returns false if formatted with periods', () =>{
  expect(isDate('05.04.2026')).toBe(false);
});
test('isDate returns false if formatted with dashes', () =>{
  expect(isDate('05-04-2026')).toBe(false);
});

//hex
test('isHexColor returns true if formatted with # and six characters', () =>{
  expect(isHexColor('#FFFFFF')).toBe(true);
});
test('isHexColor returns true if formatted with # and three characters', () =>{
  expect(isHexColor('#FFF')).toBe(true);
});
test('isHexColor returns false if formatted with 4 characters', () =>{
  expect(isHexColor('#FFFF')).toBe(false);
});
test('isHexColor returns false if formatted with invalid characters', () =>{
  expect(isHexColor('#FGFFFF')).toBe(false);
});