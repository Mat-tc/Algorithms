function solution(m, musicinfos) {
  let answer = -1;
  const N = musicinfos.length;
  const musics = [];
  for (let i = 0; i < N; i++) {
    musics.push(musicinfos[i].split(','));
  }

  // * A# -> 1
  // * C# -> 2
  // * D# -> 3
  // * F# -> 4
  // * G# -> 5

  const melody = [];
  const changeMelody = (str) => {
    if (str == 'A') return '1';
    else if (str == 'C') return '2';
    else if (str == 'D') return '3';
    else if (str == 'F') return '4';
    else if (str == 'G') return '5';
    else if (str == 'E') return '6';
  };
  for (let i = 0; i < N; i++) {
    //1. 시간 구하기
    let [start_hour, start_min] = musics[i][0].split(':');
    let [end_hour, end_min] = musics[i][1].split(':');
    let duration =
      Number(end_hour) * 60 +
      Number(end_min) -
      Number(start_hour) * 60 +
      Number(start_min);

    //2. 원곡 시간 구하기
    let time = 0;
    let music = musics[i][3].split('');
    for (let j = 0; j < music.length; j++) {
      if (music[j] == '#') {
        music[j - 1] = changeMelody(music[j - 1]);
        music[j] = '';
        continue;
      }
      ++time;
    }

    musics[i][3] = music.join('');

    musics[i].push(duration);

    //3. 반복 횟수 구하기
    melody.push(
      musics[i][3].repeat(Math.ceil(duration / time)).slice(0, duration)
    );
  }

  //비교해야 하는 음 # 제거
  let my_melody = m.split('');
  for (let i = 0; i < my_melody.length; i++) {
    if (my_melody[i] == '#') {
      my_melody[i - 1] = changeMelody(my_melody[i - 1]);
      my_melody[i] = '';
    }
  }
  m = my_melody.join('');

  let max_duration = 0;
  for (let i = 0; i < N; i++) {
    if (melody[i].includes(m) && musics[i][4] > max_duration) {
      max_duration = musics[4];
      answer = i;
    }
  }

  return answer > -1 ? musics[answer][2] : '(None)';
}

console.log(
  solution('CC#BCC#BCC#BCC#B', [
    '03:00,03:30,FOO,CC#B',
    '04:00,04:08,BAR,CC#BCC#BCC#B',
  ])
);
