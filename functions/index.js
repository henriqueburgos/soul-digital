const functions = require("firebase-functions");
const {api} = require("./api")
const admin = require("firebase-admin")

admin.initializeApp();
exports.api = functions.https.onRequest(api)