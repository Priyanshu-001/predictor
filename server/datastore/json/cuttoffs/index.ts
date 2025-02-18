const loadEWS = () => import("./EWS");
const loadOBC = () => import("./OBC");
const loadOPEN = () => import("./OPEN");
const loadSC = () => import("./SC");
const loadST = () => import("./ST");

export const catergories = ['EWS','OBC-NCL','OPEN','SC','ST']
export const loader = async function(catergory:string){
    const mappings: {[key: string]: any} = {'EWS':loadEWS,'OBC-NCL':loadOBC,'OPEN':loadOPEN,'SC':loadSC,'ST':loadST}
    // const mappings = {"cat": ()=>{}}
    const selected = await mappings[catergory]()
    return selected

}