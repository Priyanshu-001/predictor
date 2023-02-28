import { predict } from "../service/ranklist"

export default defineEventHandler(async event=>{
    // const userinfo ={rank:12,'category':'SC','pwd':false,'pool':'Gender-Neutral',state:'Delhi',exam:'Main'}
    
    const userinfo = event.context.userinfo

    const result = await predict(userinfo)
    return {result}
})