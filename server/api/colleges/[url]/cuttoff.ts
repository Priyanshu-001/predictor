
import { collegeCuttoffs } from "../../../service/ranklist"
export default defineEventHandler(async event=>{
    const  {url } = event.context.params;
    const {category,pwd,pool} = event.context.userinfo
   
        const result = await collegeCuttoffs(url,{category,pwd,pool})
        return result
     
})