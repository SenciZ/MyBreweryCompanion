import { Express } from "express"
import breweriesRouter from "./breweries"

const routers = (app: Express) => {
  breweriesRouter(app);
  return app
}

export default routers;