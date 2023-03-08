import express from 'express';
const { Router } = express;

const router = Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  let iconSet=["🍷","🎡","🍕",];
  let icon = iconSet[Math.floor(Math.random()*3)];
  res.render('index', { title: 'DWPII-2023A', icon });
});

router.get('/author', (req, res)=>{
  //Creating a View-Model

  const author = {
    "name": "Jose Ezequiel",
    "lastname": "Hernandez ",
    "age": "22 years"
  };
// Sending yhe view-model to be renderd by a View

res.render('Author',author);

})

export default router;
