export const useUserInfo = () => useState<any>('userInfo', () => {
        const init = { rank:130, pwd:'false', pool:'Gender-Neutral',state:'Delhi',exam:'Main',category:'OPEN' } 
        //TODO: read from cookie
        return init      
})
