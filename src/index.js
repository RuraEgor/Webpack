import Post from '@/js/Post.js';
import { num, fun } from '@/js/typeFile.ts';
// import json from '@/assets/json';

import './styles/styles.css';
import './styles/scss.scss';
import Img from './assets/img/1';

const post = new Post('some');
post.mes();

console.log('Img', Img);

const el = document.querySelector('h2');
el.classList.add('ffffffffffff');

// console.log('json', json);

console.log('num', num);
fun(3434);

// import('jquery').then(jquery => {
//   let $ = jquery.default;
//   $('h2').addClass('zzzzzzzzzzzzzzzz');
// });

// if (module && module.hot) module.hot.accept();
