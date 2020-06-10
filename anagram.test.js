const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

// cases and special characters have been handled in the function
test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});