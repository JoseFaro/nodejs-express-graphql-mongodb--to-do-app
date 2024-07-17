import { Request, Response } from 'express'

export interface IApolloContext {
  req: Request,
  res: Response,
}