import {Router} from 'express'
import {CreateUserController} from '../controllers/CreateUserController'
import {CreateTagController} from '../controllers/CreateTagController'
import {ensureAdmin} from '../middlewares/ensureAdmin'

const router = Router()

const cuc = new CreateUserController()
const ctc = new CreateTagController()

router.post('/users', cuc.handle)

router.post('/tags', ensureAdmin, ctc.handle)

export {router}
