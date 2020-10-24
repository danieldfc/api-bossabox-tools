import app from './app';

if (process.env.NODE_ENV === 'production') {
  require('module-alias/register');
}

app.listen(process.env.PORT || 3000, () => {
  console.log('🚀 Sever started on port 3000!');
});
