
import { ResouceNotFoundError } from "~~/server/Error/NotFound";
import { courseInfo } from "~~/server/service/ranklist";

export default defineEventHandler(async event=>{
    const  {url} = event.context.params;
    console.log(url)
    
    try
    {
        const result = await courseInfo(url,{'category':'OPEN','pwd':true,'pool':'Gender-Neutral'})
        return {result}
    }
    catch(err:unknown)
    {   console.log(err)
        
        if(err instanceof ResouceNotFoundError)
        {   
            sendError(event,err)
        }
    }
})