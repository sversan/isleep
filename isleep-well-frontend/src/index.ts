import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (reg, res) => {
	res.send('I sleep well PRO Running');
});

app.listen(PORT, () => {
	console.log('Server is running on port ${PORT}');
});
