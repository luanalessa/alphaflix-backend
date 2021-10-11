import { selectUser } from '../queries/select.js'

const login = (req, res) => {
    selectUser(req, res, 'public.user')
}

const logout = (req, res) => {
    // select(req, res, 'public.user')
}

export default login;