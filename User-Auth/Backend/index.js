import Express from 'express'
import userRoutes from './Routes/userRoutes.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import cors from 'cors'

dotenv.config()
connectDB()
const app = Express()
const PORT = process.env.PORT || 3000;

// Middleware to parse json
app.use(Express.json());
app.use(cors())


// Route setup
app.use(userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})