const fs = require('fs');

const jsonFile = fs.readFileSync('./dong_coord.json', 'utf8');
const parse = JSON.parse(jsonFile);
console.log(parse.filter((row) => row['si_do'] === '서울특별시' && row['si_gun_gu'] === '동작구'));
