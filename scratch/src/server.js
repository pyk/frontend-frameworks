import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

// Cannot call `app.get` because:
// Either no more than 1 argument is expected by function type [1].
// Or could not decide which case to select.
// Since case 1 [2] may work but if it doesn't case 2
// [3] looks promising too.
// To fix add a type annotation to `res` [4]. (References: [1] [2] [3] [4])

console.log('Listen on port 3000');
app.listen(3000);
