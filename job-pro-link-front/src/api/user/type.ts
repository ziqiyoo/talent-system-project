
export interface LoginFormData {
    email?: string
    password?: string
}

export interface LoginResponseData {
    code: string
    data: { token: string }
    message?: string
}

export interface User {
    icon: Blob | string,
    userName: string,
    email: string,
    birthday: string,
    genderKbn: number,
    mobilePhone: string,
    countryKbn: string,
    address: string,
    educationKbn: string,
    specialty: string,
    admissionDate: string,
    graduationDate: string,
    school: string,
    skills: never[],
    languages: never[],
    description: string,
    workHistories: {
        careerName: string,
        startDate: string,
        endDate: string,
        description: string
    }[],
    projectHistories: {
        projectName: string,
        startDate: string,
        endDate: string,
        description: string,
        media: string[]
    }[],
    courses: never[]
}

export interface UserInfoResponseData {
    code: number
    message: string
    data: User
}

export interface TalentRegisterData {
    icon?: string
    userName?: string
    password?: string
    email?: string
    birthday?: string
    genderKbn?: string
    mobilePhone?: string
    countryKbn?: string
    address?: string
    educationKbn?: string
    specialty?: string
    admisissionDate?: string
    school?: string
    graduationDate?: string
}

export interface ResponseData {
    message?: string
    code: string
    data?: string
}