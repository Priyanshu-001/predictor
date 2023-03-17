export const limit =  function(obj,limit_by={}){
    for(let key in limit_by)
    {
        if(obj[key] !== limit_by[key])
            return false;
    }
    return true;
}