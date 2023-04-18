const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/calculate', (req, res) => {
  const birthDate = new Date(req.body.date);
  const today = new Date();
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }

  if (ageDays < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    ageDays += lastMonth.getDate();
    ageMonths--;
  }

  let ageString;
  switch (true) {
    case ageYears === 0:
      ageString = `You are ${ageMonths} months and ${ageDays} days old.`;
      break;
    case ageMonths === 0 && ageDays === 0:
      ageString = `You are ${ageYears} years old.`;
      break;
    case ageMonths === 0:
      ageString = `You are ${ageYears} years and ${ageDays} days old.`;
      break;
    case ageDays === 0:
      ageString = `You are ${ageYears} years and ${ageMonths} months old.`;
      break;
    default:
      ageString = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
      break;
  }

  const data = {
    ageString
  }

  res.render('index', {data : data});
});

app.listen(4000, () => {
  console.log('Server is running at port 4000');
});