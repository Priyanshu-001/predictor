import * as data from '../datastore/json/courses.json';
import { pick } from '../helpers/pick';;

export function allCourses(){
    const result = []

    for(let course in data){
        let current = data[course]
       
        let courseData = {link: course, ...pick(['icon','courses'],{...current[0]})}
        result.push(courseData)
    }
    return [...result]

}
export function courseExists(url_name){
    return url_name in data;
}

