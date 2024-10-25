const quotes = [
    "動かない者は、つけられた鎖にも気づかない。",
    "人生はいたって単純。競争なんて本当は存在しないし、勝たなきゃいけないレースもない。",
    "自分自身を愛していなければ、結局幸せにはなれないのよ。",
    "もし今日が人生最後の日だとしたら、今やろうとしていることは本当にやりたいことだろうか。",
    "頑張っても頑張っても直せないもの、それが個性。"
];

document.getElementById('generateButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
});

// script.js の終わりの辺りに追加
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(function() {
        console.log('Service Worker Registered');
    });
}
