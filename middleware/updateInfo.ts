export default defineNuxtRouteMiddleware(to=>{
   
    let selection = ['pool','category','pwd']

    if(to.name === 'predict')
        selection = ['rank','state','exam',...selection]

    const {rank,state,exam,pool,category,pwd} = to.query

    const corrector = useCorrector()
    const {correction,correctedObj} = corrector({rank,pool,category,pwd,state,exam},selection)
    console.log({correction, correctedObj})

    const implicitlyAssumedInfo = {pool:'Gender-Neutral',category:'OPEN',pwd:'false', rank:1, state:'Delhi', exam:'Main'}
    const isDifferentFromImplicit = Object.keys(correctedObj).some(key=>correctedObj[key] !== implicitlyAssumedInfo[key])
    const userInfo = useUserInfo()
    userInfo.value = {...userInfo.value,...correctedObj}
    console.log({ "Redirected":  correction && isDifferentFromImplicit} )
    if(correction && isDifferentFromImplicit)
        return navigateTo({
        path:to.path,
        query:{
          ...to.query,
          ...correctedObj
        }
    })
})
