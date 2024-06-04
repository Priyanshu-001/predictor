/**
 * Logs all requests
 */
export default defineEventHandler((event)=>{
    const {headers, url} = event.node.req;
    const {statusCode} = event?.node.res
    console.log({headers, statusCode, url})
})