
import { ResouceNotFoundError } from "~~/server/Error/NotFound";
import { courseInfo } from "~~/server/service/ranklist";

export default defineEventHandler(async event=>{
    const  {url} = event.context.params;
  
    const {category,pwd,pool} = event.context.userinfo
    try
    {
        const result = await courseInfo(url,{category,pwd,pool})
        return [...result]
    }
    catch(err:unknown)
    {   
        
        if(err instanceof ResouceNotFoundError)
        {   
            sendError(event,err)
        }
    }
})