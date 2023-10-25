import app from './app.js';
import cors from 'cors';
const PORT = process.env.PORT ?? 3000;

const corsOptions = {
        origin: "http://127.0.0.1:5501",
      };

      app.use(cors(corsOptions));
app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
