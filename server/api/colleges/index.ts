import { allColleges } from "../../service/info"
export default defineEventHandler(async ()=>{
    return allColleges()
})