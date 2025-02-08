import { createArray } from "../helpers/createArray"
import { predict } from "../service/ranklist"

export default defineEventHandler(async event=>{
    // const userinfo ={rank:12,'category':'SC','pwd':false,'pool':'Gender-Neutral',state:'Delhi',exam:'Main'}
    
    const userinfo = event.context.userinfo
    console.log('results for ',userinfo?.rank)
    const _degree = createArray(getQuery(event).degrees || [])
    const _courses = createArray(getQuery(event).courses || [])
    const _limit = (getQuery(event)._limit && Number(getQuery(event)._limit))  || 50
    const _offset =  (getQuery(event)._offset && Number(getQuery(event)._offset))  || 0


    const result = await predict(userinfo,{_degree,_courses,_limit,_offset})
    return {result: [...result], warn : !!event.context.tooMuchCalls && event.context.tooMuchCalls}
})
