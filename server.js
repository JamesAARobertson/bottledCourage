import app from './app.js';
import cors from 'cors';
const PORT = process.env.PORT ?? 3000;
app.use(
  cors({
    origin: `*`,
  })
);
app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
