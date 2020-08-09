// 存命期間をoptionで表示する
function born(){
    
  const lifeBegin = document.getElementById('lifeBegin');

document.createElement('option')
for(let i = 1900; i <= 2050; i++) {
  let option = document.createElement('option');
  option.setAttribute('value',i);
  option.innerHTML = i + '年' ;
  lifeBegin.appendChild(option);
};
  
}
born();


function Die(){
  
  const lifeEnd = document.getElementById('lifeEnd');

document.createElement('option')
for(let i = 2000; i <= 2100; i++) {
  let option = document.createElement('option');
  option.setAttribute('value',i);
  option.innerHTML = i + '年' ;
  lifeEnd.appendChild(option);
};
  
}

Die();





// File APIとCanvasでローカルの画像をアップロード→加工→ダウンロードする
// <!-- File APIでアップロード -->
var file = document.getElementById('file');
// <!-- Canvas上に画像を表示する -->
var canvas = document.getElementById('canvas');
var canvasWidth = 1280;
var canvasHeight = 720;
// 
var uploadImgSrc;

// Canvasの準備
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');


function loadLocalImage(e) {
  // ファイル情報を取得
  var fileData = e.target.files[0];

  // 画像ファイル以外は処理を止める
  if(!fileData.type.match('image.*')) {
    alert('画像を選択してください');
    return;
  }

  // FileReaderオブジェクトを使ってファイルを読み込む
  var reader = new FileReader();
  // ファイルの読み込みに成功したときの処理
  reader.onload = function() {
    // Canvas上に表示する
    uploadImgSrc = reader.result;
    canvasDraw();
  }
  // ファイル読み込みを実行
  reader.readAsDataURL(fileData);
}

// ファイルが指定された時にloadLocalImage()を実行
file.addEventListener('change', loadLocalImage, false);

// Canvas上に画像を表示する
function canvasDraw(imgSrc) {
  // canvas内の要素をクリアする
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // canvas上に画像を表示
  var img = new Image();
  img.src = uploadImgSrc;
  img.onload = function() {
    ctx.drawImage(img, 0, 0, canvasWidth, this.height * (canvasWidth / this.width));

    // Canvas上にテキストを表示
    addTextName();
    addTextJob();
    addTextLife();

    // canvasを画像に変換
    var data = canvas.toDataURL('image/jpeg');

    // ダウンロードリンクを生成して出力
    var dlLink = document.createElement('a');
    dlLink.href = data;
    dlLink.download = 'sample.jpg';
    dlLink.innerText = "ダウンロード";
    document.getElementById('result').appendChild(dlLink);

    // 画像として出力
    var outputImg = document.createElement('img');
    outputImg.src = data;
    document.getElementById('result').appendChild(outputImg);

  }

}

// Canvas上にテキストを表示する
  // １．名前を表示
function addTextName() {
  var name = document.getElementById('name').value;
  var nameEng = document.getElementById('nameEng').value;

  // 名前の背景と文字を指定
  ctx.fillStyle = 'rgba(115, 78, 48, 0.3)';
  ctx.fillRect(0, 0, 400, 200);
  
  ctx.font = "bold 33px 'MS Pゴシック'";
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#FFF';
  ctx.fillText(name, 200, 60);

  ctx.font = "25px 'ＭＳ 明朝'";
  ctx.fillText(nameEng, 200, 100);
}

  // ２．職業を表示
  function addTextJob() {
    var job = document.getElementById('job').value;
    
  
    // 職業の背景と文字を指定
    ctx.fillStyle = 'rgba(115, 78, 48, 0.3)';
    ctx.fillRect(800, 0, 480, 100);
    
    ctx.font = "20px 'MS Pゴシック'";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FFF';
    ctx.fillText(job, 1040, 30);
  
    
  }  
  // ３．存命期間を表示
  function addTextLife() {
    var lifeBegin = document.getElementById('lifeBegin').value;
    
  
    // 存命期間の文字を指定
    ctx.font = "18px 'MS 明朝'";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FFF';
    ctx.fillText(lifeBegin +' ～', 1040, 60);
    
    // 「存命しない」のときだけ表示する
    var noLiving = document.form1.noLiving.checked;
    if(noLiving == true){
    var lifeEnd   = document.getElementById('lifeEnd').value;
    ctx.fillText(lifeEnd, 1100, 60);
    }

  }  
  // ４．名言を表示


