# 🔐 Random Password Generator (JavaScript)

This project is a **simple random password generator** built using plain JavaScript.  
It lets you customize your password by choosing:
- Lowercase letters  
- Uppercase letters  
- Numbers  
- Symbols  

and by setting your desired password length.

---

## ⚙️ How It Works

### 1. Character Sets

```js
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=";
```

These strings represent all possible characters that can appear in your password.

### 2. Allowed Characters

```js
allowedChars += includeLowerCase ? lowerCaseChars : "";
allowedChars += includeUpperCase ? upperCaseChars : "";
allowedChars += includeNumbers ? numberChars : "";
allowedChars += includeSymbols ? symbolChars : "";
```

Based on user choices (true/false), we build one string (`allowedChars`) that includes only the selected character types.

### 3. Validation Checks

```js
if (passwordLength < 8) {
  return "Password length must be at least 8!";
}
if (allowedChars.length === 0) {
  return "At least one set of characters must be selected";
}
```

We ensure the password is not too short and that at least one character set is selected.

### 4. Random Generation

```js
for (let i = 0; i < passwordLength; i++) {
  const random = Math.floor(Math.random() * allowedChars.length);
  password += allowedChars[random];
}
```

- `Math.random()` gives a random decimal between 0 and 1.
- Multiplying it by `allowedChars.length` gives a random position in the string.
- `Math.floor()` removes the decimal part, turning it into a valid index.
- We use that index to pick a random character and add it to the password.

### 5. Return the Password

```js
return password;
```

After the loop ends, we return the final generated password.

---

## 🧩 Example Usage

```js
const password = generatePassword(
  12,    // password length
  true,  // include lowercase
  true,  // include uppercase
  true,  // include numbers
  false  // include symbols
);

console.log(password); // Example: "aK3mTfP9xGzQ"
```

---

## 💡 Why This Structure?

This structure breaks the problem into logical steps:

1. Prepare all possible characters.
2. Filter based on user choices.
3. Validate input.
4. Randomly pick characters until the password is complete.

It's clean, modular, and easy to extend — for example, you can later add options like excluding similar characters or ensuring at least one symbol.

---

## 🧠 Author's Note

This project was created as part of a JavaScript learning journey. It's a small but powerful exercise in understanding:

- Conditional logic
- Loops
- Random number generation
- String manipulation

Learning how this code is structured helps you think like a programmer — breaking a big problem into smaller, logical steps.
```

---

**Key improvements made:**

✨ **Consistent numbering** in the "How It Works" section  
✨ **Proper code block formatting** with closing backticks  
✨ **Better visual hierarchy** with clear section breaks  
✨ **Consistent bullet point style** throughout  
✨ **Removed duplicate/extra closing code blocks**  
✨ **Improved spacing** for better readability