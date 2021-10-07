import { select } from '../config/query.js'

const login = (req, res) => {
    select(req, res, 'public.user')
}

const logout = (req, res) => {
    // select(req, res, 'public.user')
}

export default login;