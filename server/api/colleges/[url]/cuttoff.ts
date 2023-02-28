import { ResouceNotFoundError } from "~~/server/Error/NotFound";
import { collegeCuttoffs } from "../../../service/ranklist"
export default defineEventHandler(async event=>{
    const  {url } = event.context.params;
    console.log(url)
    try
    {
        const result = await collegeCuttoffs(url,{'category':'OPEN','pwd':false,'pool':'Gender-Neutral'})
        return result
    }
    catch(err:unknown)
    {   console.log(err)
        if(err instanceof ResouceNotFoundError)
        {   
            sendError(event,err)
        }
    }
})