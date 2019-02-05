const validator = {
    firstNameValidator: function(firstname, message) {
        let regex = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/
        if (firstname === '') {
            message = 'Invalid Name: First name field cannot be empty.'
            throw message
        } else if (!regex.test(firstname)) {
            message = 'Invalid Name: Invalid input.'
            throw message
        }
        message = 'Success'
        return message
    },
    lastNameValidator: function(lastname, message) {
        let regex = /[a-zA-z]+([ '-][a-zA-Z]+)*/
        if (lastname === '') {
            message = 'Invalid Name: Last name field cannot be empty.'
            throw message
        } else if (!regex.test(lastname)) {
            message = 'Invaliid Name: Invalid input.'
            throw lastname
        }
        message = 'Success'
        return message
    },
    emailValidator: function(email, message) {
        let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        if (email === '') {
            message = 'Invalid Email: Please insert an email.'
            throw message
        } else if (!regex.test(email)) {
            message = 'Invalid Email: Invalid email address.'
            throw message
        }
        message = 'Success'
        return message
    },
    passwordValidator: function(password, username, confirm, message) {
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[&%$]).{6,}$/

        if (password === '') {
            message = 'Invalid Password: Please insert a password.'
            throw message
        } else if (!regex.test(password)) {
            message = 'Invalid Password: Passwords must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
            throw message
        } else if (password.includes(username)) {
            message = 'Invalid Password: Your password cannot include your username.'
            throw message
        } else if (password.length < 7) {
            message = 'Invalid Password: The password must be a minimum of 7 characters long.'
            throw message
        } else if (password.length > 128) {
            message = 'Invalid Password: The password cannot exceeed 128 characters long.'
            throw message
        } else if (password === confirm) {
            message = 'Invalid Confirmation: The passwords do not match.'
        }
        message = 'Success'
        return message
    },
    usernameValidator: function(username, message) {
        let regex = /^[a-zA-Z0-9-]+$/

        if (username === '') {
            message = 'Invalid Username: Please insert a username.'
            throw message
        } else if (username.length < 5) {
            message = 'Invalid Username: Username must be at least 5 characters long.'
            throw message
        } else if (username.length > 32) {
            message = 'Invalid Username: Username cannot exceed 32 characters long.'
            throw message
        } else if (!regex.test(username)) {
            message = 'Invalid Username: A username can only contain uppercase letters, lowercase letters, numbers, or dashes.'
            throw message
        }
        message = 'Success'        
        return message
    }
}

// Tests
// validator.emailValidator("michael.betances93@gmail.com")
// validator.passwordValidator("DVSLegacy289!", "michael-b")
// validator.usernameValidator("michael-b")
// validator.firstNameValidator("Michael")
// validator.lastNameValidator("Betances")

module.exports = validator
