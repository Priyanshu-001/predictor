import data from '../datastore/json/courses.json';
import { pick } from '../helpers/pick';;

export function allCourses(){
    const result = []
    for(let [course,current] of Object.entries(data)){
        let courseData = {link: course, courses: course.split("_").join(" ") ,...pick(['icon','courses','colorIcon'],{...current[0]})}
        result.push(courseData)

    }
    return [...result]
}

export function courseExists(url_name){
    return url_name in data;
}

