// Import middlewares and models
const router = require('express').Router();
const { User, Country, Review } = require('../models');
const withAuth = require('../utils/auth'); // Custom middleware for authentification

// TEST
const sequelize = require('../config/connection');


// GET for homepage ('/')
router.get('/', async (req, res) => {
  try {
    const dbTopCountryData = await sequelize.query("SELECT ROW_NUMBER() OVER(ORDER BY AVG(rating) DESC) top, country_id, ROUND (AVG(rating),1) AS rating, COUNT(rating) AS count, COUNT(CASE rating WHEN 5 THEN 1 ELSE NULL END) AS fivestar, COUNT(CASE rating WHEN 4 THEN 1 ELSE NULL END) AS fourstar, COUNT(CASE rating WHEN 3 THEN 1 ELSE NULL END) AS threestar, COUNT(CASE rating WHEN 2 THEN 1 ELSE NULL END) AS twostar, COUNT(CASE rating WHEN 1 THEN 1 ELSE NULL END) AS onestar, ROUND (COUNT(CASE rating WHEN 5 THEN 1 ELSE NULL END)*100/COUNT(rating)) AS p_fivestar, ROUND (COUNT(CASE rating WHEN 4 THEN 1 ELSE NULL END)*100/COUNT(rating)) AS p_fourstar, ROUND (COUNT(CASE rating WHEN 3 THEN 1 ELSE NULL END)*100/COUNT(rating)) AS p_threestar, ROUND (COUNT(CASE rating WHEN 2 THEN 1 ELSE NULL END)*100/COUNT(rating)) AS p_twostar, ROUND (COUNT(CASE rating WHEN 1 THEN 1 ELSE NULL END)*100/COUNT(rating)) AS p_onestar FROM review GROUP BY country_id");          
    // .get METHOD IS NOT NECESSARY WHEN USING RAW QUERY
    
    const statTop1 = dbTopCountryData[0][0];
    const statTop2 = dbTopCountryData[0][1];
    const statTop3 = dbTopCountryData[0][2];

    const dbReviewTop1Data = await Review.findAll({
      include: [{
        model: Country
      }],
      where: {
        country_id: statTop1.country_id,
      }, 
    });

    const dbReviewTop2Data = await Review.findAll({
      include: [{
        model: Country
      }],
      where: {
        country_id: statTop2.country_id,
      }, 
    });

    const dbReviewTop3Data = await Review.findAll({
      include: [{
        model: Country
      }],
      where: {
        country_id: statTop3.country_id,
      }, 
    });

    const reviewsTop1 = dbReviewTop1Data.map((review) => review.get({ plain: true }));
    const reviewsTop2 = dbReviewTop2Data.map((review) => review.get({ plain: true }));
    const reviewsTop3 = dbReviewTop3Data.map((review) => review.get({ plain: true }));

    const countryTop1 = reviewsTop1[0];
    const countryTop2 = reviewsTop2[0];
    const countryTop3 = reviewsTop3[0];

    res.render('homepage', { statTop1, statTop2, statTop3, reviewsTop1, reviewsTop2, reviewsTop3, countryTop1, countryTop2, countryTop3, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for country page ('/country/:id')
router.get('/country/:id', async (req, res) => {
  try {
    const countryId = req.params.id; 
    const dbCountryData = await Country.findByPk(countryId); // get the country data

    if (!dbCountryData) {
      res.status(404).send('Country not found');
      return;
    } // if country not found error handling

    const countryName = dbCountryData.name; // get the name of the country
    const dbReviewData = await Review.findAll({
      include: [{
        model: Country
      },
    {
      model: User
    }
    ],
      where: {
        country_id: req.params.id,
      }, 
    });
    const reviews = dbReviewData.map((review) => review.get({ plain: true }));

    res.render('country', { 
      country: { id: countryId, name: countryName, description: dbCountryData.description, photo: dbCountryData.photo }, 
      reviews, 
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// FUTURE DEVERLOPMENT
// GET for Review page ('/review/:id')  
// router.get('/review/:id', async (req, res) => {
//   try {
//     const dbPostData = await Post.findByPk(req.params.id, {
//       include: [{
//         model: Comment,
//         include: [{
//           model: User,
//         }]
//       }, { model: User }],
//     });
//     const post = dbPostData.get({ plain: true });
//     res.render('post', { post, loggedIn: req.session.loggedIn, commenter: "Commenter" });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET for dashboard page ('/dashboard')
router.get('/dashboard', withAuth, async (req, res) => { // withAuth: only if user is logged in, the callback function is executed
  try {
    const dbReviewData = await Review.findAll({
      include: [{
        model: Country
      }],
      where: {
        user_id: req.session.user_id,
      },
    });
    const reviews = dbReviewData.map((review) => review.get({ plain: true }));
    res.render('dashboard', { reviews, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET for create new review page ('/dashboard/review')
router.get('/dashboard/review', withAuth, async (req, res) => { // withAuth: only if user is logged in, the callback function is executed
  try {
    const countryList = await Country.findAll();
    const countries = countryList.map((country) => country.get({ plain: true }));
    res.render('create-review', { countries, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET for edit review page ('/dashboard/review/:id')
router.get('/dashboard/review/:id', withAuth, async (req, res) => {  // withAuth: only if user is logged in, the callback function is executed
  try {
    const dbReviewData = await Review.findByPk(req.params.id, {
      include: [{
        model: Country
      }],
    });
    const countryList = await Country.findAll();
    const review = dbReviewData.get({ plain: true });
    const countries = countryList.map((country) => country.get({ plain: true }));
    res.render('edit-review', { review, countries, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET for login page ('/login')
router.get('/login', (req, res) => {
  res.render('login', { loggedIn: req.session.loggedIn });
});


// GET for signup page ('/signup')
router.get('/signup', (req, res) => {
  res.render('signup', { loggedIn: req.session.loggedIn });
});


module.exports = router;
