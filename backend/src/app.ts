import express, { Application, Request, Response } from 'express';
import path from 'path';

const app: Application = express();
const port: number = 3000;

app.use(express.json());

const frontendPath = path.join(__dirname, '../public');
console.log(`Serving static files from: ${frontendPath}`);

app.use(express.static(frontendPath));

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'Backend is running' });
});

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the API!' });
});

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});