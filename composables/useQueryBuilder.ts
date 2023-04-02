

const queryBuilder = (base:string,query:{courses:string[],degrees:string[]})=>{
    const courses = unref(query.courses)
    const degrees = unref(query.degrees)

    const searchParams = new URLSearchParams()
    courses.forEach(course=>searchParams.append('courses',course))
    degrees.forEach(degree=>searchParams.append('degrees',degree))
    return `${base}?${searchParams.toString()}`
}
export const useQueryBuilder = ()=>queryBuilder