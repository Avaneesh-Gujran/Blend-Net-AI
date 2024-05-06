const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

app.use(express.static('public')); // Serve static files from the 'public' directory

// Configure Google OAuth Strategy
passport.use(new GoogleStrategy({
    clientID: "YOUR_GOOGLE_CLIENT_ID",
    clientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // In a production application, you would want to save the user info to a database here
    return cb(null, profile);
  }
));



const firebaseConfig = {
    apiKey: "AIzaSyAdEU8mqsQMhM8i816F0NizCLqjuZbzvPo",
    authDomain: "blend-net-ai-quiz-app.firebaseapp.com",
    projectId: "blend-net-ai-quiz-app",
    storageBucket: "blend-net-ai-quiz-app.appspot.com",
    messagingSenderId: "1040439869248",
    appId: "1:1040439869248:web:defd45b1b24d0e62f784a5",
    measurementId: "G-7930K2WQ0R"
  };
// Initialize Passport
app.use(passport.initialize());

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
