const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// Get all and POST
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// Get on, PUT, DELETE
router
    .route('/:id')
    .get(getThoughtById)
    .post(updateThought)
    .delete(deleteThought);

// POST
router
    .route('/:thoughtId//reacitons')
    .post(createReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;