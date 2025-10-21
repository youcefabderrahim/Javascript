// This is random password generator

function generatPassword(params) {
  // ! Declaring some consts
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolsChars = "!@#$%^&*()_+-=";

  // ! Declaring some vars
  let allowedChars = "";
  let password = "";

  // ! We will string concatenate our lower case chars
  allowedChars += includeLowerCase ? lowerCaseChars : "";
  allowedChars += includeCapitalCase ? uperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolsChars : "";
  // ! This is the real functionality
  // ! what if password is negative or less than ...
  if (passwordLength < 8) {
    return "Password length must be at least 8!";
  }

  // ! What if no option has been selected
  if (allowedChars.length === 0) {
    return `At least one set of characters must be selected`;
  }



  return "";
}
const passwordLength = 8;
const includeLowerCase = false;
const includeCapitalCase = false;
const includeNumbers = false;
const includeSymbols = false;

const password = generatPassword(
  passwordLength,
  includeLowerCase,
  includeCapitalCase,
  includeNumbers,
  includeSymbols
);

console.log(password);
