import { createArray } from "../helpers/createArray"
import { predict } from "../service/ranklist"

export default defineEventHandler(async event=>{
    // const userinfo ={rank:12,'category':'SC','pwd':false,'pool':'Gender-Neutral',state:'Delhi',exam:'Main'}
    
    const userinfo = event.context.userinfo
    const _degree = createArray(getQuery(event)._degree || [])
    const _courses = createArray(getQuery(event)._courses || [])
    const _limit = (getQuery(event)._limit && Number(getQuery(event)._limit))  || 50
    const _offset =  (getQuery(event)._offset && Number(getQuery(event)._offset))  || 0


    const result = await predict(userinfo,{_degree,_courses,_limit,_offset})
    return [...result]
})