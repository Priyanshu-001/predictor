export default defineNuxtRouteMiddleware(to=>{
    
    
    
    let selection = ['pool','category','pwd']

    if(to.name === 'predict')
        selection = ['rank','state','exam',...selection]
    console.log(to.query)
    const {rank,state,exam,pool,category,pwd} = to.query


    const corrector = useCorrector()
    const {correction,correctedObj} = corrector({rank,pool,category,pwd,state,exam},selection)
//    userInfo.value = {...userInfo.value,...correctedObj}
    if(true)
        return abortNavigation();
  
    return navigateTo({
        path:to.path,
        query:{
          ...to.query,
//           ...correctedObj

        }
    })
})
