
export interface User {
    id: number,
    role: Role,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    filingStatus: FilingStatus,
    socialSecurity: string,
    streetAddress: string,
    city: string,
    state: string,
    zipCode: string,
    dateOfBirth: string,
    formW2: {
        id: number,
        wages: number,
        taxWithheld: number,
        employerName: string
    },
    form1099: {
        id: number,
        wages: number,
        taxWriteOffs: number
    }
}

export enum Role {
    USER = "ROLE_USER",
    ADMIN = "ROLE_ADMIN"
}

export enum FilingStatus {
    SINGLE = "SINGLE", 
    MARRIED = "MARRIED"
}
