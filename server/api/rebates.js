import { Router } from 'express'
const router = new Router()

// Remove this
import rebates from '../fakeDB/rebates.js'

router.get('/', (req, res) => {
  setTimeout(() => {
    res.status(200).json(rebates)
  }, 300)
})

router.get('/:slug', (req, res) => {
  const index = rebates.findIndex(el => el.slug === req.params.slug)
  console.log("=========== rebates /:slug ===========")
  // console.log(req.params)
  // console.log(index)
  // console.log(rebates)
  if (index < 0) {
    res.status(404).json({
      error: 'Rebate does not exist in db'
    })
  }

  setTimeout(() => {
    console.log(rebates[index])
    res.status(200).json(rebates[index])
  }, 300)
})

module.exports = router
