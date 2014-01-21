
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Eine Tasse Jäger Records' });
};

exports.about = function(req, res){
  res.render('about', { title: 'Who are you guys?'});
};

exports.contact = function(req, res){
  res.render('contact', { title: 'How can I Contact you?'});
};
