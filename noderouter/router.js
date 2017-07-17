/**
 * Created by Administrator on 2017/7/17.
 */
const express = require('express')
const router = express.Router()
const logic = require('./logic');

router.get('/life/webinfos',logic.getLifeInfo)
router.get('/life/goods',logic.getgoods)

module.exports = router