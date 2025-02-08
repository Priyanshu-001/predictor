export default defineEventHandler((event)=>{
    if(!event.path.startsWith("/api/predict")) {
        return
    }
    const TRACK_COOKIE_NAME = "invocationCount";
    const ONE_HOUR = 60 * 60 * 1000
    const hoursToExpiry = 4
    const now = Date.now();

    let count = parseInt(getCookie(event, TRACK_COOKIE_NAME) || "0") + 1;
    let expiryTime =  now + hoursToExpiry * ONE_HOUR;

    const id = getUserId();

    if (count === 1) {
        console.log(`Hello New user = ${id}`)
        
    } else {
        console.log(`hello old freind = ${id} for time = ${count} in ${hoursToExpiry} hrs` )
    }

    
    setCookie(event, TRACK_COOKIE_NAME, count.toString(), { 
        expires: new Date(expiryTime), 
        httpOnly: true 
    });

    if(count > 8) {
        console.error("Inovked too much")
        event.context.tooMuchCalls = true;
    }


    function getUserId() {
        const { headers } = event.node.req;
        const id = headers['x-nf-geo'];
        return id;
    }
})