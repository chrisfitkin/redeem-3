import { Router } from 'express'
const router = new Router()

// Remove this
import fakeDB from '../fakeDB.js'

router.get('/', (req, res) => {
  setTimeout(() => {
    res.status(200).json(fakeDB)
  }, 300)
})

router.get('/:slug', (req, res) => {
  const index = fakeDB.findIndex(el => el.slug === req.params.slug)
  console.log("=========== rebates /:slug ===========")
  // console.log(req.params)
  // console.log(index)
  // console.log(fakeDB)
  if (index < 0) {
    res.status(404).json({
      error: 'Rebate does not exist in db'
    })
  }

  setTimeout(() => {
    console.log(fakeDB[index])
    res.status(200).json(fakeDB[index])
  }, 300)
})

module.exports = router
