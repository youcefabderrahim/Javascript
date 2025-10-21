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

  console.log(allowedChars);
}
const passwordLength = 12;
const includeLowerCase = true;
const includeCapitalCase = false;
const includeNumbers = false;
const includeSymbols = false;

const password = generatPassword(passwordLength,
                                includeLowerCase,
                                includeCapitalCase,
                                includeNumbers,
                                includeSymbols
);
