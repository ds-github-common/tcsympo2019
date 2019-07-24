let _functions
if (typeof window !== "undefined") {
  const firebase = require("firebase")

  const config = {
		apiKey: "AIzaSyC7UxRzXq8K0eYl7A3mDmRUtPjkAaUeNdk",
		authDomain: "tcsympo2019-test.firebaseapp.com",
		databaseURL: "https://tcsympo2019-test.firebaseio.com",
		projectId: "tcsympo2019-test",
		storageBucket: "tcsympo2019-test.appspot.com",
		messagingSenderId: "519430869609",
		appId: "1:519430869609:web:2ad3a630ca55531b"
  }

  firebase.initializeApp(config)
  _functions = firebase.functions()
}

export const functions = _functions
