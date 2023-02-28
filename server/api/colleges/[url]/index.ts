import { ResouceNotFoundError } from "~~/server/Error/NotFound";
import { collegeInfo } from "../../../service/info"
export default defineEventHandler(async event=>{
    const  {url } = event.context.params;
    console.log(url)
    try
    {
        const result = await collegeInfo(url)
        return result
    }
    catch(err:unknown)
    {
        if(err instanceof ResouceNotFoundError)
        {   
            sendError(event,err)
        }
    }
})