// type Blueprint = (name: string,message:string,status:number,statusText:string) => void;
function ResouceNotFoundError(this: any,   message:string="")
{   
    this.name="ResouceNotFoundError";
    this.message=message
    this.status = 404
    this.statusText = this.message
}
ResouceNotFoundError.prototype = Error.prototype

export {ResouceNotFoundError}
 