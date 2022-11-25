// object 혹은 map 을 이용한 구현 문제라고 생각햇음
function solution(fees, records) {
  var answer = [];
  const car = {};
  const not_clear = {};
  for (let i = 0; i < records.length; i++) {
    let r = records[i].split(' ');
    let t = r[0].split(':');
    //현재 시각 분으로 나타내기
    let m = parseInt(t[0]) * 60 + parseInt(t[1]);
    //In 인지
    if (r[2] === 'IN') {
      not_clear[r[1]] = m;
    } else {
      let in_time = not_clear[r[1]];
      let during = m - in_time;
      delete not_clear[r[1]];

      //이미 등록 번호가 있는 차량인지
      if (Object.hasOwn(car, r[1])) {
        car[r[1]] = car[r[1]] + during;
      } else {
        car[r[1]] = during;
      }
    }
  }

  const not_clear_keys = Object.keys(not_clear);
  for (let i = 0; i < not_clear_keys.length; i++) {
    const final = 60 * 23 + 59;
    let min = not_clear[not_clear_keys[i]];
    let during = final - min;
    //이미 등록 번호가 있는 차량인지
    if (Object.hasOwn(car, not_clear_keys[i])) {
      car[not_clear_keys[i]] = car[not_clear_keys[i]] + during;
    } else {
      car[not_clear_keys[i]] = during;
    }
  }

  const sorted = Object.keys(car).sort();

  //정렬된 차번호로 주차요금 정산하기
  for (let i = 0; i < sorted.length; i++) {
    if (car[sorted[i]] <= fees[0]) answer.push(fees[1]);
    else {
      let add = car[sorted[i]] - fees[0];
      let unit = Math.ceil(add / fees[2]) * fees[3];
      answer.push(unit + fees[1]);
    }
  }
  return answer;
}

solution(
  [120, 0, 60, 591],
  [
    '16:00 3961 IN',
    '16:00 0202 IN',
    '18:00 3961 OUT',
    '18:00 0202 OUT',
    '23:58 3961 IN',
  ]
);
