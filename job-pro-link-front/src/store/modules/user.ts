import { defineStore } from 'pinia'
import { reqLogin, reqTalentRegister, reqNameRule, reqPasswordRule, reqDesignatedUserInfo, reqDeletedUser } from '@/api/user'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
import type { LoginFormData, LoginResponseData, TalentRegisterData, ResponseData, UserInfoResponseData } from '@/api/user/type.ts'
import { UserState } from './types/type'


const useUserStore = defineStore('User', {
    state: (): UserState => {
        return {
            token: GET_TOKEN(),
        }
    },

    actions: {
        //ログイン
        async userLogin(data: LoginFormData) {
            const result: LoginResponseData = await reqLogin(data)
            if (result.code == "TAL200") {
                this.token = result.data.token
                SET_TOKEN(result.data.token)
                return Promise.resolve('ok')
            } else {
                return Promise.reject(result.data)
            }
        },
        //登録
        async talentLogin(data: TalentRegisterData) {
            const result: ResponseData = await reqTalentRegister(data)
            if (result.code = "TAL200") {
                return result
            }
            return Promise.reject(result.message)
        },

        async nameRule(data: string) {
            const result: ResponseData = await reqNameRule(data)
            return result;
        },

        async passwordRule(data: string) {
            const result: ResponseData = await reqPasswordRule(data)
            return result;
        },

        async getDesignatedUserInfo(userId: any) {
            const result: UserInfoResponseData = await reqDesignatedUserInfo(userId)
            return result;
        },
        async deletedUser(userId: any) {
            const result: ResponseData = await reqDeletedUser(userId)
            return result;
        },
    },

    getters: {}
});

export default useUserStore
