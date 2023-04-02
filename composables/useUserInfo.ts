export const useUserInfo = () => useState<any>('userInfo', () => {
        const init = { rank:32000, pwd:'false', pool:'Gender-Neutral',state:'Delhi',exam:'Main',category:'OPEN' } 
        //TODO: read from cookie
        return init      
})
