export class ServiceRequest {

  constructor(
    public serviceRequestId: string,
    public street: string,
    public city: string,
    public state: string,
    public zipcode: string,
    public dateCreated: string,
    public description?: string,
    public threeDModelCreated?:boolean
   

  ) {  }

}