const express = require('express');
const db = require('../config/database');
const Gig = require('../models/Gig');

const router = express.Router();

// Get gig list
router.get('/', (req, res) => {
    Gig.findAll()
        .then(gigs => {
            res.json(gigs);
        })
        .catch(err => console.log(err))
});

// Add a gig
router.post('/add', (req, res) => {
    const { title, technologies, budget, description, contactEmail } = req.query;

    Gig.create({
        title,
        technologies,
        description,
        budget,
        contactEmail
    })
        .then(gig => res.sendStatus(200))
        .catch(err => console.log(err))
});

// Edit gig
router.put('/update/:id', (req, res) => {
    const { title, technologies, budget, description, contactEmail } = req.query;

    Gig.update({
        title: title,
        technologies: technologies,
        description: description,
        budget: budget,
        contactEmail: contactEmail
    },
        {
            where: {
                id: req.params.id
            }
        })
        .then(gig => res.sendStatus(200))
        .catch(err => console.log(err))
});

// Delete gig
router.delete('/remove/:id', (req, res) => {
    Gig.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(gig => res.sendStatus(200))
        .catch(err => console.log(err))
});

module.exports = router;
