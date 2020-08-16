

  "use strict"

  $(function() {

// 文字が入力されたらイベント発火

    $("#quotation").change(function() {

// 認証トークンを取得するための関数 [getToken] を定義
// http://docs.microsofttranslator.com/oauth-token.html

      const getToken = function() {
        const defer = $.Deferred();
        $.ajax({
          url: 'https://eastasia.api.cognitive.microsoft.com/sts/v1.0/issueToken',
          type: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/jwt',
            'Ocp-Apim-Subscription-Key': '715e78ec298644caacb0b19630f4eef5',
          },
        }).done(function(data) {

            const token = data;
            defer.resolve(token);

        });
            return defer.promise();
      };

// 関数 [getToken] 実行後、取得したトークンを 引き渡す
// フォームから入力したデータとともに、 Microsoft Translator テキストAPIへ送信

      $.when(getToken()).done(function(token) {
        const key = 'Bearer ' + token;
        const text = $("#quotation").val();
        const response = $.ajax({
          url: 'https://api.microsofttranslator.com/v2/http.svc/Translate',
          type: 'GET',
          data: {
            'appid': key,
            'Accept': 'application/xml',
            'text': text,
            'to': 'en',
          },
        async: false,
        })

// Translator テキスト APIを通じて取得したデータから、翻訳語が含まれるプロパティを取得
// replace関数でタグを除去し、翻訳データのみを抽出して表示する

        const data = response.responseText;

        const translation = data.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');

        $("#quotationEng").text(translation);
      })
    })
  })

