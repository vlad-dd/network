import * as axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": '23baa0fe-72e8-4f20-92dc-8ac5de01b874'
    }

});

export const userAPI = {
    getPages (currentPage, pageSize) {
        return (
            instanse.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => { return response.data})
        )
    },

    getUsers(userId) {
        return(
            instanse.get(`profile/${userId}`).then(response => {return response.data})
        )
    },

    getAuthMe(){
        return (
            instanse.get('auth/me').then(response => {return response.data})
        )
    },

    unfollowMethod(userId) {
        return (
            instanse.delete(`follow/${userId}`).then((response) => {return response.data})
        )
    },

    followMethod(userId) {
        return (
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
            {
                withCredentials: true,
                headers: {"API-KEY": '23baa0fe-72e8-4f20-92dc-8ac5de01b874'}
            }).then((response) => {return response.data })
        )
    },

    getStatus(userId) {
        return (instanse.get(`profile/status/${userId}`))
    },

    updateStatus(newStatus) {
        return (
            instanse.put('profile/status', {
                status: newStatus
            })
        )
    },


    login(eml, pas, rem = false) {
        return (
            instanse.post('auth/login', {
            email: eml,
            password: pas,
            rememberMe: rem
        })
        )},

    logout() {
        return (instanse.delete('auth/login'));
    }
}
 
export default userAPI;