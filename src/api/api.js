import * as axios from "axios/index";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "5c28caf3-9dc2-4aad-aef9-b58d7b70fecb"

    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    getUserProfile(userId) {
        console.warn('obsolete method. please use profilApi object')
        return profileAPI.getUserProfile(userId)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
    },
    userAuth()   {
         return instance.get(`auth/me`)
    }
}
export const profileAPI = {

    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
},
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status})

    }


}
