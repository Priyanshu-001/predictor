export default defineEventHandler((event)=>{
    const query = getQuery(event)


    const { exam='Main', pool='Gender-Neutral', state="", category="OPEN"  } = query
    const rank= Number(query.rank)
    const pwd  = query.pwd === 'true'
    event.context.sendBadFormat = false
    event.context.userinfo = {rank,exam,pool,state,category,pwd}
})