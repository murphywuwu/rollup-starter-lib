// import ms from 'ms';
// import lunchtime from './lunchtime.js';
// import millisecondsUntil from './millisecondsUntil.js';

// export default function howLongUntilLunch(hours, minutes) {
	// lunch is at 12.30
// 	if (hours === undefined) hours = 12;
// 	if (minutes === undefined) minutes = 30;

// 	var millisecondsUntilLunchTime = millisecondsUntil(lunchtime(hours, minutes));
// 	return ms(millisecondsUntilLunchTime, { long: true });
// }
/* 
  🤔 package.json中：main, module, browser字段优先级
  📚https://github.com/Weiyu-Chen/blog/issues/8
  
  browser = browser > browser + mjs > module > browser + cjs > main
 */
import answer from 'the-answer';

export default function() {
  console.log('the answer is ' + answer);
}