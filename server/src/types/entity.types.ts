export interface Gender {
    MALE: string,
    FEMALE: string
}

export interface IUser {
    _id?: string,
    first_name: string,
    middle_name?: string,
    last_name: string,
    phone_number: string,
    email: string,
    gender: string,
    dob: string,
    password: string
}