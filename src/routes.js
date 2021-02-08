const express = require('express')
const jwt = require('jsonwebtoken')

const authMiddleware = require('./auth')

const routes = express.Router()

routes.post('/authentication', (req, res) => {
  const user = {
    id: 1,
    name: 'Gustavo Santos',
    company: 'Uncontrol',
    website: 'https://github.com/gustavojuneo'
  }

  return res.json({
    user,
    token: jwt.sign(user, 'PRIVATEKEY')
  })
})

routes.use(authMiddleware)

routes.get('/repos', async (req, res) => {
  return res.json([
    {
      id: 1,
      name: 'Morket',
      owner: 'Gustavo Santos',
      url: 'https://github.com/gustavojuneo/morket-web'
    },
    {
      id: 2,
      name: 'Portal Acessos',
      owner: 'Aleixo Junior',
      url: 'https://github.com/gustavojuneo/portal-acessos'
    },
    {
      id: 3,
      name: 'dev.finances',
      owner: 'Gustavo Santos',
      url: 'https://github.com/gustavojuneo/dev-finances'
    }
  ])
})

module.exports = routes
