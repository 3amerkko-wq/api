const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const app = express();
app.use(express.json());

// اتصال MongoDB
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("✅ MongoDB Connected"))
.catch(err=>console.log("❌ Mongo Error:", err));

// اتصال Redis
const redisClient = redis.createClient({url: process.env.REDIS_URL});
redisClient.connect().then(()=>console.log("✅ Redis Connected"));

// صفحة تجربة
app.get('/', (req,res)=> {
  res.send('Meram Backend Running ✅');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`🚀 Server Started on port ${PORT}`));