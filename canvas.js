

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

// アップロードした画像の拡大縮小位置調整
// 上まで持ってきたら、動いた
function pW(){
  const pw = document.getElementById('pw');
document.createElement('option')
for(let i = 1; i <= 20; i++) {
  let option = document.createElement('option');
  option.setAttribute('value',i);
  option.innerHTML = i  ;
  pw.appendChild(option);
};
}
pW();

function pH(){

  const ph = document.getElementById('ph');

document.createElement('option')
for(let i = 1; i <= 20; i++) {
  let option = document.createElement('option');
  option.setAttribute('value',i);
  option.innerHTML = i ;
  ph.appendChild(option);
};
}
pH();





// File APIとCanvasでローカルの画像をアップロード→加工→ダウンロードする
// <!-- File APIでアップロード -->
var file = document.getElementById('file');
// <!-- Canvas上に画像を表示する -->
var canvas = document.getElementById('canvas');
var canvasWidth = 1240;
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
    
    // drawImageと格闘の記録
    // ctx.drawImage(img,(0, 0, this.width * (canvasHeight / this.height), this.height * (canvasWidth / this.width));
    // ctx.drawImage(img, 0, 0, this.width, this.height, 140, 60, 1000, 600);

    // drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)横長の写真のみ対応
    // ctx.drawImage(img, 0, 0, this.width, this.height, 
    //   (canvasWidth-(this.width * (canvasHeight / this.height)/1.25))/2, 
    //   (canvasHeight-(this.height * (canvasWidth / this.width)/1.25))/2, 
    //   this.width * (canvasHeight / this.height)/1.25, 
    //   this.height * (canvasWidth / this.width)/1.25 );

// 正方形対応？
      // ctx.drawImage(img, 0, 0, this.width, this.height, 
      //   (canvasWidth-(this.width * (canvasHeight / this.height)/1.25))/2, 
      //   (canvasHeight-(this.height * (canvasWidth / this.width)/2))/2, 
      //   this.width * (canvasHeight / this.height)/1.25, 
      //   this.height * (canvasWidth / this.width)/2 );
    
        
    
  // 縦長対応予定? サイズの違いで不具合発生する
    // ctx.drawImage(img, 0, 0, this.width, this.height, 
    //   (canvasWidth-(this.width * (canvasHeight / this.height)/1))/2, 
    //   (canvasHeight-(this.height * (canvasWidth / this.width)/2.5))/2, 
    //   this.width * (canvasHeight / this.height)/1, 
    //   this.height * (canvasWidth / this.width)/2.5 );
  
    // 一応x,yで拡大縮小可能、ただし面倒  横長はx<y, 縦長はx<y, 拡大は両方の数字を小さく、縮小は大きくする
    // 442*600 →3,15 600*400 →6,4 1300*1300 →5,15 300*167→3.0,1.6 400*600→4,24 225*225→2.2,2.2*5 183*275→1.83,2.75
    // 横長の画像はpWとpH÷100すればよい模様
    // 正方形はどうやらpWとpHを100割った後、pwに×5すればよいっぽい、なんでか知らんけど
    // 縦長185*272→1.85*10,2.72 194*259→1.94*10,2.59 1417*1919→1.417*10,1.919 3024*4032→3.024*8,4.032
    // portraitWidth= 4.032/1.25;  
    // portraitHeight= 3.024 /1.25;
    
    // ctx.drawImage(img, 0, 0, this.width, this.height, 
    //   (canvasWidth-(this.width * (canvasHeight / this.height)/(1+0.1*portraitHeight)))/2, 
    //   (canvasHeight-(this.height * (canvasWidth / this.width)/(1+0.1*portraitWidth)))/2, 
    //   (this.width * (canvasHeight / this.height)/(1+0.1*portraitHeight)),(this.height * (canvasWidth / this.width)/(1+0.1*portraitWidth))
    //    );

    // portraitWidth= 806;  
    // portraitHeight= 625;
    
    // ctx.drawImage(img, 0, 0, this.width, this.height, 
    // Math.abs((canvasWidth-this.width)/2), 
    //   Math.abs((canvasHeight-this.height)/2), 
    //   this.width * (canvasHeight / this.height),
    //   this.height * (canvasWidth / this.width)
    //   );

    var portraitWidth = document.getElementById('pw').value;
    var portraitHeight = document.getElementById('ph').value;
    
ctx.drawImage(img, 0, 0, this.width, this.height, 
      Math.abs(canvasWidth-(this.width * (canvasHeight / this.height)/(1+0.1*portraitHeight)))/2, 
      Math.abs(canvasHeight-(this.height * (canvasWidth / this.width)/(1+0.1*portraitWidth)))/2, 
      (this.width * (canvasHeight / this.height)/(1+0.1*portraitHeight)),(this.height * (canvasWidth / this.width)/(1+0.1*portraitWidth))
       );

      // 二日間に渡る 画像中央表示の挙動の調査結論
// ↑横長なら一桁と小数点で縦横比を打ち込む
// ↑正方形は一桁と小数点でpWに*5前後、ただし画像サイズに左右される
// ↑縦長なら一桁小数点でpWに*15前後、ただし画像サイズに左右される


    // Canvas上にテキストを表示
    
    
    
    addTextName();
    addTextJob();
    addTextLife();
    addTextQuotation();
    addTextQuotationEng();
    
    // canvasを画像に変換
    var data = canvas.toDataURL('image/jpeg');

    
    

    
    
    
    // 画像として出力
    var outputImg = document.createElement('img');
    outputImg.src = data;
    document.getElementById('result').appendChild(outputImg);
      
    
    
    // ダウンロードリンクを生成して出力
      // リンクを画像の真下に表示させたいが上手くいかない
    var dlLink = document.createElement('a');
    dlLink.href = data;
    dlLink.download = 'originalQuotation.jpg';
    dlLink.innerText = "ダウンロード";
    document.getElementById('result').appendChild(dlLink);
    
    
  }

}

// Canvas上にテキストを表示する
  // １．名前を表示
function addTextName() {
  var name = document.getElementById('name').value;
  var nameEng = document.getElementById('nameEng').value;
  
  // 名前の背景と文字を指定
  ctx.fillStyle = 'rgba(115, 78, 48, 0.3)';
  ctx.fillRect(0, 0, 420, 180);
  
  ctx.font = "bold 33px 'MS Pゴシック'";
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#FFF';
  ctx.fillText(name, 220, 60);

  ctx.font = "25px 'ＭＳ 明朝'";
  ctx.fillText(nameEng, 220, 120);

  
}

  // ２．職業を表示
  function addTextJob() {
    var job = document.getElementById('job').value;
    
  
    // 職業の背景と文字を指定
    
    ctx.fillStyle = 'rgba(115, 78, 48, 0.3)';
    ctx.fillRect(800, 0, 480, 100);
    
    ctx.font = "24px 'MS Pゴシック'";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FFF';
    ctx.fillText(job, 1040, 40);
  
    
  }  
  // ３．存命期間を表示
  function addTextLife() {
    var lifeBegin = document.getElementById('lifeBegin').value;
    
  
    // 存命期間の文字を指定
    ctx.font = "20px 'MS 明朝'";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FFF';

    // 「存命しない」のときだけ表示する
    var noLiving = document.form1.noLiving.checked;
    if(noLiving == true){
      var lifeEnd   = document.getElementById('lifeEnd').value;
      ctx.fillText(lifeBegin + ' ～ '+ lifeEnd, 1040, 80);
      }else{
    ctx.fillText(lifeBegin +' ～ ', 1040, 80);
    }
    
    
    

  }  
  // ４．名言を表示
  function addTextQuotation() {
    var quotation = document.getElementById('quotation').value;

    // 名言の背景と文字を指定
    
    ctx.fillStyle = 'rgba(115, 78, 48, 0.3)';
    ctx.fillRect(0, 520, 1280, 720);
    
    ctx.font = "bold 36px sans-serif, '游ゴシック体', 'Hiragino Kaku Gothic ProN'";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FFF';
    

    // 文字数が30文字を超えたら、二行で表示する
    if(quotation.length > 33){

    const strEarly = quotation.substr(0, 33);
    ctx.fillText(strEarly, 640, 555);

    const strLate = quotation.substr(33, quotation.length);
    ctx.fillText(strLate, 640, 600);

    }else{
      ctx.font = "bold 40px 'cursive'";
      ctx.fillText(quotation, 640, 580);
    }
    
  }

  // ５．名言の文字英語版
  function addTextQuotationEng() {
    
    var quotationEng = document.getElementById('quotationEng').innerText;

    ctx.font = "25px 'cursive'";   
    ctx.fillStyle = '#0FF';
    

    // 文字数が60文字を超えたら、二行で表示する
    const quotationCut = quotationEng.split(" ").length;
    if( quotationCut>16){

      const strEarly = quotationEng.substr(0, 90);
      ctx.fillText(strEarly, 640, 650);
  
      const strLate = quotationEng.substr(91, quotationEng.length);
      ctx.fillText(strLate, 640, 680);

    }else{
      ctx.fillText(quotationEng, 640, 660);  
  }
    
    
  }


  
  // ６．背景色を決める（pをcanvasへ）
var colorWell;
var defaultColor = "#000000";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("input", updateAll, false);
  colorWell.select();
}

function updateFirst(event) {
  var canvasBg = document.querySelector("canvas");
  

  
// 手を加えた箇所は
  if (canvasBg) {
    canvasBg.style.color = event.target.value;
var bgcolorModify = canvasBg.style.color;
    
    ctx.fillStyle = bgcolorModify;
    ctx.fillRect(0, 0, 1280, 720);
  }
}

function updateAll(event) {
  document.querySelectorAll("canvas").forEach(function(canvasBg) {
    canvasBg.style.color = event.target.value;
  });
}

  // ７．手入力された文字をカウントする
  function countLength(text, field) {
    document.getElementById(field).innerHTML = text.length + "文字";

  }


