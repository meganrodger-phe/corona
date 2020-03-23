const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Branching
router.post('/v1/tested-positive/symptoms', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names


  let statements = req.session.data['statements']

  if (statements === 'results') {
    res.redirect('/v1/awaiting-results/symptoms-waiting')

  } else if (statements === 'contact') {
    res.redirect('/v1/contact-of/self-isolate-q')

  } else if (statements === 'traveller')  {
    res.redirect('/v1/returning-abroad/self-isolate')
  }
  else {
    res.redirect('/v1/tested-positive/symptoms')
  }

})


router.post('/v1/contact-of/self-isolate', function (req, res) {

let self_isolate = req.session.data['self_isolate']

if (self_isolate === 'no-not') {
  res.redirect('/v1/contact-of/contact-preferences')
}
else {
  res.redirect('/v1/contact-of/self-isolate')
}

})

router.post('/v1/contact-of/symptoms-contact', function (req, res) {

let symptoms_q = req.session.data['symptoms_q']

if (symptoms_q === 'no_symptoms') {
  res.redirect('/v1/contact-of/thank-you-helping')
}
else {
  res.redirect('/v1/contact-of/symptoms-contact')
}

})

router.post('/v1/returning-abroad/symptoms-contact', function (req, res) {

let symptoms_q = req.session.data['symptoms_q']

if (symptoms_q === 'no_symptoms') {
  res.redirect('/v1/returning-abroad/thank-you-helping')
}
else {
  res.redirect('/v1/returning-abroad/symptoms-contact')
}

})
