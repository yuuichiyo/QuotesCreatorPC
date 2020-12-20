

// 存命期間をoptionで表示する
function born(){
    
  const lifeBegin = document.getElementById('lifeBegin');

document.createElement('option')
for(let i = 1600; i <= 2050; i++) {
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
for(let i = 1600; i <= 2100; i++) {
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
  // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  
  // canvas上に画像を表示
  var img = new Image();
  img.src = uploadImgSrc;
  img.onload = function() {
    

    var imgWidth = document.getElementById('pw').value;
    var imgHeight = document.getElementById('ph').value;

    var	imgWidth = img.width, //画像の元の幅を取得
					imgHeight = img.height, //画像の元の高さを取得
					imgRate = imgWidth / imgHeight, //画像の比率を取得
          imgPos = 0; //Canvas上での画像の位置を初期化
          
          if(imgRate >= 1){ //画像が横長のとき
            imgPos = (120 - (120 * imgRate)) / 2; //横方向の画像位置を計算
            ctx.drawImage(img, 130 ,10 , 1000, 1000 / imgRate); //Canvasに幅を基準に画像を描画
          }else{ //画像が縦長のとき
            imgPos = (120 - (120 / imgRate)) / 2; //縦方向の画像位置を計算
            ctx.drawImage(img, 360, 10, 500, 500 / imgRate); //Canvasに高さを基準に画像を描画
          }

    // 2020/12/20 if文章で分岐させたい。そして一方の辺をautoで指定したい
    
      // ctx.drawImage(img, 0, 0, this.width, this.height, 
      //   Math.abs(canvasWidth-(this.width * (canvasHeight / this.height)/(1+0.1*portraitHeight)))/2, 
      //   Math.abs(canvasHeight-(this.height * (canvasWidth / this.width)/(1+0.1*portraitWidth)))/2, 

      //   (this.height * (canvasWidth / this.width)/(1+0.1*portraitWidth)),(this.height * (canvasWidth / this.width)/(1+0.1*portraitWidth))
  
      //    );
      
        


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
  
  // nameをサニタイジング（仮）
  name.replace(/&/g,"&amp;")
  .replace(/"/g,"&quot;")
  .replace(/</g,"&lt;")
  .replace(/>/g,"&gt;");
  

  // nameEngをサニタイジング（仮）
  nameEng.replace(/&/g,"&amp;")
  .replace(/"/g,"&quot;")
  .replace(/</g,"&lt;")
  .replace(/>/g,"&gt;");

  // 名前の背景と文字を指定
  ctx.fillStyle = 'rgba(115, 78, 48, 0.5)';
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
    
    // jobをサニタイジング（仮）
  job.replace(/&/g,"&amp;")
  .replace(/"/g,"&quot;")
  .replace(/</g,"&lt;")
  .replace(/>/g,"&gt;");
  
    // 職業の背景と文字を指定
    
    ctx.fillStyle = 'rgba(115, 78, 48, 0.5)';
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

    // quotationをサニタイジング（仮）
  quotation.replace(/&/g,"&amp;")
  .replace(/"/g,"&quot;")
  .replace(/</g,"&lt;")
  .replace(/>/g,"&gt;");

    // 名言の背景と文字を指定
    
    ctx.fillStyle = 'rgba(115, 78, 48, 0.5)';
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
  // カラーを選択するタイミングでCanvas内の履歴を削除
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
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


