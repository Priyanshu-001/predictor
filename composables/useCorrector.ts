import { catList, examsList, poolList, stateList } from "~~/constants"

function rankCorrector(rank: string):string {
    try {
        const r = Number(rank)
        if (1 <= r && r <= 16e5)
            return rank
        return '1'
    }
    catch (e) {
        return '1' //Not a number
    }
}

const catCorrector = (cat:string):string=>catList.includes(cat) ? cat: catList[0]
const stateCorrector = (state: string):string=>stateList.includes(state) ? state : stateList[0]
const pwdCorrector = (pwd:string):string=>pwd === 'true' ? 'true' : 'false'
const poolCorrector = (pool:string):string=>poolList.includes(pool) ? pool: poolList[0]
const examCorrector = (exam:string):string=>examsList.includes(exam) ? exam: examsList[0]  
const correctors = {rank:rankCorrector,
    pool:poolCorrector,
    category:catCorrector,
    state:stateCorrector,
    exam:examCorrector,
    pwd:pwdCorrector,}
/**
 * 
 * @param userInfo - user object 
 * @param {string[]} properties  - otpions need to be validated
 * @returns 
 */
 const corrector = (userInfo:any,properties:string[])=>{
    

    let correction:boolean = false
    let correctedObj = {}
    for(let prop of properties){
        if(!(prop in correctors))
            continue;
        const fn:Function = correctors[prop as keyof typeof correctedObj]
        const newValue = fn(userInfo[prop])
        correctedObj = {...correctedObj,[prop]:newValue}
//         correction = (userInfo[prop] !== newValue) || correction
        if(userInfo[prop] != newValue)
            correction = true
    }

    return {correctedObj,correction }
}
export const useCorrector = ()=>corrector

