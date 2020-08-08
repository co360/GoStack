import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export function user(request: Request, response: Response) {
  const user = createUser({
    email: 'leonardo@teste.com',
    password: 'typescript',
    name: 'Leonardo',
    techs: [
      'React', 
      'Node.js',
      { title: 'Javascript', experience: 100}
    ]
  })

  return response.json({ message: 'Hello World'})
}