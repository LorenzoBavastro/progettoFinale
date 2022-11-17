let User = class{
    constructor (name, surname, CF, dateOfBirth, address, email, number, occupation )
    {
        this.name = name;
        this.surname = surname;
        this.CF = CF;
        this.dateOfBirth = dateOfBirth
        this.address = address;
        this.email = email
        this.number = number;
        this.occupation = occupation
    }
    getName ()
    {
        return this.name;
    }

    getSurname()
    {
        return this.surname;
    }

    getCF()
    {
        return this.CF;
    }

    getDateOfBirth()
    {
        return this.dateOfBirth;
    }
    
    getAddress()
    {
        return this.address;
    }
    
    getEmail()
    {
        return this.email;
    }

    getNumber()
    {
        return this.number;
    }

    getOccuaption()
    {
        return this.occupation;
    }
}

export {User};