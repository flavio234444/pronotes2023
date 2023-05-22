// Actions methods
// GET "/"
// GET "/index"
const home = (req, res) => {
    const iconSet = ['⭐', '🤖', '🍉', '🛺', '🚝', '🧭', '🌸'];
    const icon = iconSet[Math.floor(Math.random() * iconSet.length)];
    res.render('home/homeview', {icon});
  };

  // GET "/index"
const about = (req, res) => {
  res.render('home/about');
};
  
  // Controlador Home
  export default {
    home,
    about,
  };