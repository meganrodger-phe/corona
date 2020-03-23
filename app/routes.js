const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Branching
router.post('/tested-positive/symptoms', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names


  let statements = req.session.data['statements']

  if (statements === 'results') {
    res.redirect('/awaiting-results/symptoms-waiting')

  } else if (statements === 'contact') {
    res.redirect('/contact-of/self-isolate-q')

  } else if (statements === 'traveller')  {
    res.redirect('/returning-abroad/self-isolate')
  }
  else {
    res.redirect('/tested-positive/symptoms')
  }

})


router.post('/contact-of/self-isolate', function (req, res) {

let self_isolate = req.session.data['self_isolate']

if (self_isolate === 'no-not') {
  res.redirect('/contact-of/contact-preferences')
}
else {
  res.redirect('/contact-of/self-isolate')
}

})

router.post('/contact-of/symptoms-contact', function (req, res) {

let symptoms_q = req.session.data['symptoms_q']

if (symptoms_q === 'no_symptoms') {
  res.redirect('/contact-of/thank-you-helping')
}
else {
  res.redirect('/contact-of/symptoms-contact')
}

})

router.post('/returning-abroad/symptoms-contact', function (req, res) {

let symptoms_q = req.session.data['symptoms_q']

if (symptoms_q === 'no_symptoms') {
  res.redirect('/returning-abroad/thank-you-helping')
}
else {
  res.redirect('/returning-abroad/symptoms-contact')
}

})
