// import * as data from '../datastore/json/courses.json';
import { pick } from '../helpers/pick';
import { limit } from '../helpers/limit';
import info from '../datastore/json/info.json'; 
import { loader } from '../datastore/json/cuttoffs';
import { ResouceNotFoundError } from '../Error/NotFound';
import { courseExists } from './courses';

export async function courseInfo(course_url,userdata){
    const {category,pool, pwd } = userdata
    const curriedPick =(url_name)=> pick(['institute','state','exam'],{...info[url_name]})
    const curriedLimit = (obj)=> limit(obj, {pool,pwd})
    
    const {data} = await loader(category)
    
    if(! courseExists(course_url))
        return new ResouceNotFoundError(`${course_url} is not found`)

    let  result = data.filter(row=>row.courses.split(' ').join('_')===course_url)
                .filter(curriedLimit)
   
    result =  result.map(row=>({...row,...curriedPick(row.url_name)}))
   

    return result

}

export async function collegeCuttoffs(url_name,userdata){
    const {category,pool, pwd } = userdata
    const curriedPick =(url_name)=> pick(['institute','state'],{...info[url_name]})
    const opt = {pool,pwd}
    const {data} = await loader(category)
    const curriedLimit = (obj)=> limit(obj,opt)
    const result = data.filter(row=>row.url_name===url_name).filter(curriedLimit)
    
    // if(result.length === 0)
    // {
    //     throw new ResouceNotFoundError(`${url_name} is not found for following ${JSON.stringify({category,pool,pwd})}`)
    // }
    return result.map(row=>({...row,...curriedPick[row.url_name]  })).map(row=>({...row,institute:url_name.split('_').join(' ')}))

}


export async function predict({rank,exam,category,pool, pwd, state },options={_degree,_courses,_limit,_offset}){

    const {_degree=[],_courses=[],_limit=50,_offset=0} = options
    const allowedDegree = new Set(_degree)
    const allowedCourses = new Set(_courses)

    const opts = {exam,pool,pwd}
    const curriedLimit = (obj)=> limit(obj,opts)

    const {data} = await loader(category)

    const result = data
    .filter(el=>!!getCollegeInfo(el)) //TODO: check if can be removed
    .map(el=>({...el,...pick(['exam','state','city','institute','quota'],getCollegeInfo(el) ) }))
                    .filter(curriedLimit)
                    .filter(row=>(row.quota === 'AI' || (row.quota === 'OS' && row.state !== state)  ||(row.quota === 'HS'  && row.state.toLowerCase().split().join() === state.toLowerCase().split().join())) )
                    .filter(row=>( allowedDegree.size === 0 || allowedDegree.has(row.degree) ) && ( allowedCourses.size === 0 || allowedCourses.has(row.courses) ) )
                    .filter(row=>row.crank>rank)
                    .sort((a,b)=>a.crank-b.crank)
                   
    return result.splice(_offset,_offset+_limit)
            .map(el=>pick(['institute','state','city','courses','degree','duration','crank','url_name','quota'],el))
}

function getCollegeInfo(el) {
    if(el.url_name in info) {
        return info[el.url_name][0] ; //TODO: fix when structure fine
    }
}

export async function possibilities({rank,exam,category,pool, pwd, state }){

    const opts = {exam,pool,pwd}
    const curriedLimit = (obj)=> limit(obj,opts)

    const {data} = await loader(category)

    const result = data
    .filter(getCollegeInfo)
    .map(el=>({...el,...pick(['exam','state','city','institute'],getCollegeInfo(el) ) }))
                    .filter(curriedLimit)
                    .filter(row=>(row.quota === 'AI' || (row.quota === 'OS' && row.state !== state)  ||(row.quota === 'HS'  && row.state === state)) )
                    .filter(row=>row.crank>rank)
                    .sort((a,b)=>a.crank-b.crank)
    
    return {count: result.length, degree: [...new Set(result.map(el=>el.degree))], courses:  [...new Set(result.map(el=>el.courses))]}
}