// import * as data from '../datastore/json/courses.json';
import { pick } from '../helpers/pick';
import { limit } from '../helpers/limit';
import * as info from '../datastore/json/info.json'; 
import { loader } from '../datastore/json/cuttoffs';
import { ResouceNotFoundError } from '../Error/NotFound';

export async function courseInfo(course_url,userdata){
    const {category,pool, pwd } = userdata
    const curriedPick =(url_name)=> pick(['institute','state','exam'],{...info[url_name]})
    const curriedLimit = (obj)=> limit(obj, {pool,pwd})
    
    const {data} = await loader(category)
    
    let  result = data.filter(row=>row.courses.split(' ').join('_')===course_url)
                .filter(curriedLimit)
   
    if(result.length === 0)
    {
        throw new ResouceNotFoundError(`${course_url} is not found`)
    }
    result =  result.map(row=>({...row,...curriedPick(row.url_name)}))
   

    return result

}

export async function collegeCuttoffs(url_name,userdata){
    const {category,pool, pwd } = userdata
    const curriedPick =(url_name)=> pick(['institute','state'],{...info[url_name]})
    const opt = {pool,pwd}
    const {data} = await loader(category)
    const curriedLimit = (obj)=> limit(obj,opt)
    console.log(curriedPick("Indian_Institute_of_Technology_Bombay"))
    const result = data.filter(row=>row.url_name===url_name).filter(curriedLimit)

    if(result.length === 0)
    {
        throw new ResouceNotFoundError(`${url_name} is not found for following ${JSON.stringify({category,pool,pwd})}`)
    }
    return result.map(row=>({...row,...curriedPick[row.url_name]  }))

}

export async function predict({rank,exam,category,pool, pwd, state },options={offset:0,pageLimit:15}){

    const {offset,pageLimit} = options
    const opts = {exam,pool,pwd}
    const curriedLimit = (obj)=> limit(obj,opts)

    const {data} = await loader(category)

    const result = data
    .map(el=>({...el,...pick(['exam','state','city','institute'],{...info[el.url_name]} ) }))
                    .filter(curriedLimit)
                    .filter(row=>(row.quota === 'AI' || (row.quota === 'OS' && row.state !== state)  ||(row.quota === 'HS'  && row.state === state)) )
                    .filter(row=>row.crank>rank)
                    .sort((a,b)=>a.crank-b.crank)
                   
    return result.splice(offset,offset+pageLimit) 
            .map(el=>pick(['institute','state','city','courses','degree','duration','crank'],el))
}

export async function possibilities({rank,exam,category,pool, pwd, state }){

    const opts = {exam,pool,pwd}
    console.log(opts)
    const curriedLimit = (obj)=> limit(obj,opts)

    const {data} = await loader(category)

    const result = data
    .map(el=>({...el,...pick(['exam','state','city','institute'],{...info[el.url_name]} ) }))
                    .filter(curriedLimit)
                    .filter(row=>(row.quota === 'AI' || (row.quota === 'OS' && row.state !== state)  ||(row.quota === 'HS'  && row.state === state)) )
                    .filter(row=>row.crank>rank)
                    .sort((a,b)=>a.crank-b.crank)
    
    return {count: result.length, degree: [...new Set(result.map(el=>el.degree))], courses:  [...new Set(result.map(el=>el.courses))]}
}