# IDEっぽいエディタVisualStudioCode
## 必要な物
- node.js


## VisualStudioとは？
VisualStudio・・・統合開発環境。  
【VSのエディション一覧】
- Visual Studio Express 2015（無償・以下の種類にさらに分かれている）
  - Visual Studio Express 2013 for Web：Webアプリ開発用
  - Visual Studio Express 2013 for Windows 10：UWPアプリ開発用
  - Visual Studio Express 2013 for Windows Desktop：デスクトップアプリ開発用
- Visual Studio Community 2015（個人・オープンソースプロジェクトは無償）
- Visual Studio Professional 2015（有料）
- Visual Studio Enterprise 2015（有料）
- Visual Studio Test Professional 2015（有料）  
- VisualStudioCode・・・コードエディタが主要機能。      
  
  
### 【VS Community とVS Express】  
VS Community とはVS Expressを置き換える新しい開発環境。つまりVS Expressがさらにパワーアップしたもの。
上記のエディション一覧から分かるようにVS Expressはそれぞれの開発に合わせて環境ツールが分かれていた。  
VS Communityはそれらを一つにしてさらに機能が多くなったもの。
   
  
# macで使えるもの  
VS系列は基本windowsで使用する用。macでも使えるのはVSCodeのみ。  
  

# デフォルトでついてる機能してるもの
- emmet
- markdownpreview
- git
- typescriptのコンパイル
- gruntなどのタスクランナーのタスク実行  
- デバッグ機能を内蔵
- 日本語の折り返し
- 画面分割（横のみ）
- diff


# 拡張機能入れれば使える
- EditorConfig（村上くんよかったね！）


# 使いこなせると便利な気配のするもの  
- コマンドパレット 
→ここで、タスクの実行や検索など機能を実行できる。  
terminalのようにコマンド入力でいろいろできて慣れると便利そう。  


# 参考になるURL
[公式拡張機能ストア](https://marketplace.visualstudio.com/vscode)  
[便利なショートカットfor mac](http://qiita.com/TakahiRoyte/items/cdab6fca64da386a690b)
[vscodeの基本](http://www.atmarkit.co.jp/ait/articles/1507/10/news028.html)


# 他のエディタるツールとの比較（思いっきり主観）  
- ショートカットがsublimeやatomとは結構違うので、カスタムするか慣れるかの2択
- gitが連携してるので、gitのクライアントツールなどを開かなくてもいい。コミットするときに差分も確認できる。  
- gitはpullやpushもできる。ブランチ切り替えなど。
- テキスト検索結構いいです。該当箇所もわかるしクリックしたらその部分開ける。


# typescriptあれこれ
- VS Codeではtypescriptのコンパイル環境がデフォルトでそなつけられている。  
コマンドパレットからtypescriptのタスクファイルを生成してくれる（gulpでいうとgulpfile.js的なものを作ってくれる）  
- gulpとtypescriptを並行して使う場合は、gulpのtypescriptのコンパイルでしないとだめかも？（タスクコマンドを複数設定出来ない模様）
