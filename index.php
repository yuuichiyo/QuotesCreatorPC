<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="common.css">
        
    <title>QuotesCreatorPC版</title>
</head>
<?php require("header.html"); ?>

<body>

    <h1>Quotes Creator PC Version</h1>
    <p>本サイトはオリジナルの名言を制作するためのWebサイトとなります。</p>
    <p>必要なものはあなたの写真（別のものでも大丈夫）とあなた自身の伝記に基づく名言（迷言でも可）です。</p>
    <p>また、入力項目を記入していくことで、自動的に画像にあなたの名言とプロフィールを付け加えます。</p>
    <p>作成されたオリジナルの名言はyoutube等で配信することで、たくさんの人と共有したいと考えています。</p>

    <p>※注意　誹謗中傷、プライバシー侵害、名誉棄損、その他の迷惑行為や公共の不利益を被る内容につきましては、ご遠慮のほどお願いいたします。</p>

<form method="post" action="sample.cgi">
<p>
    <label>お名前<br>
        <input type="text" name="name" placeholder="ニックネーム等も可" size="24" maxlength ="24">
    </label>
</p>

<p>
    <label>職業<br>
        <input type="text">
        <input type="text">
    </label>
</p>


<p>
    <label>存命期間

<!--
年代をjsで書きたい
-->
    <select name="yearBorn" id="yearBorn"></select>
    
       ～
    
    
    <select name="yearDie" id="yearDie"></select>
    </label>
</p>

<p>
    <label>名言<br>
        <textarea name="Quotation" id="" cols="40" rows="3"></textarea>
    </label>
</p>

<p>
    <label>写真(最大サイズ：、おすすめサイズ：)
        <input type="file" name="pic">
    </label>
</p>

<p>
    <label>背景色の設定
        <input type="color" >
    </label>
</p>




<input type="submit" name="botan" value="send">


</form>

 <script type="text/javascript" src="./year.js">
 <script type="text/javascript" src="./yearDie.js">
 aaa();
 born();
        </script>

<?php require("footer.html"); ?>

</body>
</html>