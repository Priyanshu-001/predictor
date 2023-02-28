import * as data from '../datastore/json/courses.json';
import { pick } from '../helpers/pick';
import { limit } from '../helpers/limit';
import * as info from '../datastore/json/info.json'; 
import { loader } from '../datastore/json/cuttoffs';
import { ResouceNotFoundError } from '../Error/NotFound';

export function allCourses(){
    const result = []

    for(let course in data){
        let current = data[course]
       
        let courseData = {link: course, ...pick(['icon','courses'],{...current[0]})}
        result.push(courseData)
    }
    return {result}

}

