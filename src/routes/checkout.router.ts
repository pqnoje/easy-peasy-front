import { Router, Request, Response, NextFunction } from 'express'
import { CheckoutProvider } from '../providers/checkout.provider'

class DeliveryRouter {
  public router: Router

  constructor() {
    this.router = Router()
    this.init()
  }

  private async create(req: Request, res: Response, next: NextFunction) {
    try{
      let checkouts = await CheckoutProvider.create()
      res.send(checkouts)
    }catch(error){
      res.sendStatus(404)
    }
  }
  
  init() {
    this.router.post('/', this.create)
  }
}

const deliveryRouter = new DeliveryRouter()

export default deliveryRouter.router