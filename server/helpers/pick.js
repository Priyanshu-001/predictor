 export const pick = (l,obj)=>
    l.filter(key => key in obj) // line can be removed to make it inclusive
    .reduce((obj2, key) => (obj2[key] = obj[key], obj2), {});