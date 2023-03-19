export default defineNuxtRouteMiddleware((to)=>{
   
    const pool = to.query.pool
    const category = to.query.category
    const pwd = to.query.pwd
    console.log({pwd,category,pool})
    const userInfo = useUserInfo()
    const corrector = useCorrector()
    const {correction,correctedObj} = corrector({pool,category,pwd},['pool','category','pwd'])
    if(!correction)
        return;
    userInfo.value = {...userInfo.value,...correctedObj}
    return navigateTo({
        path:to.path,
        query:{
          ...to.query,
          ...correctedObj

        }
    })
})