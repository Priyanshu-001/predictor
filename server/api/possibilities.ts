import { possibilities } from "../service/ranklist"

export default defineEventHandler(async event=>{
    
    const userinfo = event.context.userinfo
    return await possibilities(userinfo)
})