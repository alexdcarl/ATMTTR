var promptSchemas, colors;
colors = require('colors');
//PROMPT_SCHEMAS.JS//
//MODULE FOR ORGANZING NPM PROMPT SCHEMAS//

promptSchemas = {

  defaultSchema: {
    properties: {
      "default screen": {
        description: "Welcome to  Alex's terminal ATM!\n\nThis virutual ATM gives any and\nall users access to their very psuedo\nmoney and allows it's manipulation through\nthe terminal. Please make your\nselection from the following menu\n\n\nPress 1 for transactions\n\nPress 2 to open a new account..".green,
        pattern: /^[12]$/,
        message: "Please choose 1 for transaction or 2 for new account",
        required: true
      }
    }
  },

  loginSchema: {
    properties: {
      "Account number": {
        description: "May I have your account number".green,
        pattern: /^[0-9]+$/,
        message: "Does not compute! BZZ! Please use your number keys for this quesion..".red,
        required: true
      },
      "pin": {
        description: "Pin".green,
        pattern: /^[0-9][0-9][0-9][0-9]$/,
        message: "Pin must be exactly 4 digits long".red,
        required: true,
        hidden: true
      }
    }
  },

  userRegistration: {
    properties: {
      "initial deposit": {
        description: "Initial deposit: format: 00.00:".green,
        pattern: /^[0-9]+\.[0-9][0-9]$/,
        message: "format two decimals: 1500.00".red,
        required: true
      },
      "secure pin": {
        description: "Secure pin: 4 digit number:".green,
        pattern: /^[0-9][0-9][0-9][0-9]$/,
        message: "must be a 4 digit number..".red,
        required: true,
        hidden: true
      },
      "verify pin": {
        description: "verify pin:".green,
        pattern: /^[0-9][0-9][0-9][0-9]$/,
        message: "...Your entry must has to have exactly 4 numbers..".red,
        required: true,
        hidden: true
      }
    }
  },

  anotherTransaction: {
    properties: {
      "another transaction?": {
        description: "Can we interest you in any futher banking queries or transascions?".green,
        pattern: /y(es)?|n[o]?/i,
        message: "The answer may only by yes or no..".red,
        required: true
      }
    }
  },

  transactionMenu: {
    properties: {
      "transaction menu": {
        menu: "Transaction Menu:\n".blue +
              "Press 1 for balance inquery\n".blue +
              "Press 2 to print account ledger\n".green +
              "Press 3 to change pin number\n".blue +
              "Press 4 to withdraw funds\n".green +
              "Press 5 to deposit funds\n".blue,
        description: "enter choice 1-5".green,
        pattern: /^[1-5]$/,
        required: true
      }
    }
  },

  newPin: {
    properties: {
      "new pin": {
        description: "New pin".green,
        pattern: /^[0-9][0-9][0-9][0-9]$/,
        message: "You must enter a 4 digits.".red,
        required: true,
        hidden: true
      }
    }
  },

  withdrawFunds: {
    properties: {
      "withdraw funds": {
        menu: "How much would you like to withdraw?\n".blue +
              "  amount must be despensable in $20 bills..".yellow,
        description: "withdraw:".green,
        pattern: /^[0-9]*[02468]0(\.00)?$/,
        message: "The total must be divisible by 20..".red,
        required: true
      }
    }
  },

  depositFunds: {
    properties: {
      "deposit funds": {
        menu: "How much would you like to deposit today?\n".blue +
              "  I accept $20 bills and personal checks of all amounts..".blue,
        description: "deposit funds: format 00.00:".green,
        pattern: /^[0-9]+\.[0-9][0-9]$/,
        message: "include to two decimal places".red,
        required: true
      }
    }
  }
};

module.exports = promptSchemas;
