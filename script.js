// おみくじの結果を用意する
const omikuji = ["大吉", "中吉", "小吉", "吉", "末吉", "凶"];

//ボタンクリックでおみくじを引く
const button = document.getElementById("button");
button.addEventListener('click', () => {
  // おみくじ配列からランダムに取り出す
  const results = omikuji[Math.floor(Math.random() * omikuji.length)];
  document.getElementById('result').textContent = results;
});
