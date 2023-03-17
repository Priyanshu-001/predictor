export const createArray = (l:any)=>{
    if(!l)
        return []
    else if(l instanceof Array)
        return l;
    return [l]
}
