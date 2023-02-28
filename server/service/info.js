import * as data from '../datastore/json/info.json';
import { pick } from '../helpers/pick';
import { ResouceNotFoundError } from '../Error/NotFound';
export function allColleges(){
    const result = []
    for(let college in data){
        let current = data[college]
       
        let collegeData = {url_name: college, ...pick(['city','exam','institute','state'],current)}
        result.push(collegeData)
    }
    return {result}
}

export async function collegeInfo(url_name){
    if(!data[url_name])
        throw new ResouceNotFoundError(`${url_name} is not present in the DB`)

    const info = { url_name,...pick(['institute','city','state','type','exam','nick','link','r1','r2','nirf_engg','nirf_overall'],data[url_name]) }
    return info
    
}