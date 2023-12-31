import request from '@/utils/request'
import type {
    LoginFormData,
    LoginResponseData,
    UserInfoResponseData,
    TalentRegisterData,
    ResponseData,
} from './type'

// インターフェイスの統合管理
enum API {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info',
    TALENTREGISTER_URL = '/register/talent',
    NAMEVALIDATION_URL = '/register/talent/name/validation',
    PASSWORDVALIDATION_URL = '/register/talent/password/validation',
    DESIGNATEDUSERINFO_URL = '/user/info/designated',
    DELETEDUSER_URL = '/user/deleted/'
}

export const reqLogin = (data: LoginFormData) =>
    request.post<any, LoginResponseData>(API.LOGIN_URL, data)
export const reqUserInfo = () =>
    request.get<any, UserInfoResponseData>(API.USERINFO_URL)
//人材登録
export const reqTalentRegister = (data: TalentRegisterData) =>
    request.post<any, ResponseData>(API.TALENTREGISTER_URL, data)


export const reqNameRule = (userName: string) =>
    request.post<any, ResponseData>(API.NAMEVALIDATION_URL, userName, {
        headers: { 'Content-type': 'text/plain' }
    })

export const reqPasswordRule = (password: string) =>
    request.post<any, ResponseData>(API.PASSWORDVALIDATION_URL, password, {
        headers: { 'Content-type': 'text/plain' }
    })

export const reqDesignatedUserInfo = (userId: any) =>
    request.get<any, UserInfoResponseData>(API.DESIGNATEDUSERINFO_URL, {
        params: { userId: userId },
    })

export const reqDeletedUser = (userId: any) =>
    request.delete<any, ResponseData>(API.DELETEDUSER_URL + userId)
