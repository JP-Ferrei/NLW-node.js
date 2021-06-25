import {Router} from 'express'
import {CreateUserController} from '../controllers/CreateUserController'
import {CreateTagController} from '../controllers/CreateTagController'
import {ensureAdmin} from '../middlewares/ensureAdmin'
import {AuthenticateUserController} from '../controllers/AuthenticateUserController'
import {CreateComplimentController} from '../controllers/CreateComplimentController'

const router = Router()

const cuc = new CreateUserController()
const ctc = new CreateTagController()
const auc = new AuthenticateUserController()
const ccc = new CreateComplimentController()

router.post('/users', cuc.handle)
router.post('/tags', ensureAdmin, ctc.handle)
router.post('/login', auc.handle)
router.post('/compliments', ccc.handle)

export {router}
