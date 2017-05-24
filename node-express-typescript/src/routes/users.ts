import { Router } from 'express';

const users:Router = Router();

/* GET users listing. */
users.get('/registration', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('user/registration', { title: 'Visual Studio Code!' });
});

users.get('/registration/success', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('user/success', { title: 'User Registration Successful!' });
});

export default users;
