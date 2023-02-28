import { allCourses } from "../../service/courses"

export default eventHandler(async ()=>{
    return allCourses()
})