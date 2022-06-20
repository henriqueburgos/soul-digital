const admin = require("firebase-admin")
const express = require("express");

const api =express();


// middleawre
api.use(express.json());
api.use(cors());

const  auth = admin.auth();
const db = admin.firestore();
db.settings( {ignoreUndefinedProperties: true});

// rotas

api.post("/admin", async (req,res)=>{
 try {
    const {email,password,displayName}=req.body;
  const user =  await auth.createUser({
        email,
        password,
        displayName
    });
    await auth.setCustomUserClaims( user.uid,{admin: true})
    db.collection("admin").doc(user.uid)
    .set({uid: user.uid, email: email, displayName:displayName})

    res.status(201).json({succes:true});
 } catch (err) {
    res.status(500).json({succes:false});
 }
});


api.get("/admin", async (req,res)=>{
 const snapshot = await db.collection("admins").get()
 const admins = snapshot.docs.map((doc)=> doc.data());
 res.json(admins)
})



module.exports={api};