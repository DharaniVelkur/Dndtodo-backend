const express= require('express');
const router =new express.Router();
const { registeruser, loginuser, validuser, logoutuser, sendPasswordLink, verifyuser, changePassword, addtask, deletetask, edittask, getAllTasks, updatetask } = require('../controllers/url');
const authenticate = require('../middleware/authenticate');


router.post('/register',registeruser);
router.post('/login',loginuser);
router.get('/validuser',authenticate,validuser);
router.get('/logout',authenticate,logoutuser);
router.post('/sendpasswordlink',sendPasswordLink);
router.get("/forgotpassword/:id/:token",verifyuser)
router.post('/:id/:token',changePassword);

//add a task
router.post('/addtask',authenticate,addtask);

//update a task
router.put('/updatetask/:id',authenticate,edittask);
//update
router.put('/edittask/:id',authenticate,updatetask);


//delete a task
router.delete('/deletetask/:id',authenticate,deletetask);

//get all tasks
router.get('/tasks',authenticate,getAllTasks);

module.exports= router;