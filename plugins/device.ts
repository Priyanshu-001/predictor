import MobileDetect from 'mobile-detect';
export default defineNuxtPlugin(()=>{
    let headers = useRequestHeaders()
    const md = process.server ? new MobileDetect(headers['user-agent']|| '') : new MobileDetect(navigator.userAgent)
    const isMobile = md.phone() !== null || md.mobile() === 'UnknownMobile';
    return {
        provide:{
            isMobile:()=>isMobile,
        }
    }
})