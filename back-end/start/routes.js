'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('session', 'SessionController.store')
Route.post('forgot', 'ForgotPasswordController.store')
Route.put('password', 'ForgotPasswordController.update')

Route.post('files', 'FileController.store')
