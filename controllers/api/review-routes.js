const router = require('express').Router();
const { Review } = require('../../models');


// Create new review
router.post('/', async (req, res) => {
  try {
    const dbReviewData = await Review.create({
      country_id: req.body.country_id,
      user_id: req.session.user_id,
      content: req.body.content,
      rating: req.body.rating,
    });
    res.status(200).json(dbReviewData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Edit existing review
router.put('/:id', async (req, res) => {
  try {
    const dbReviewData = await Review.update({
      country_id: req.body.country_id,
      user_id: req.session.user_id,
      content: req.body.content,
      rating: req.body.rating,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(dbReviewData);
  } catch (err) {
      res.status(500).json(err);
    };
});


// Delete review
router.delete('/:id', async (req, res) => {
  try {
  const dbReviewData = await Review.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json(dbReviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
