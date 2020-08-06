# dokodakke

## アプリ概要
- 自宅などで、「何を」「どこに」置いたかをメモする
- evernoteにわざわざ記すまでも無いモノが対象
- ToDoアプリに近い仕様で、以下シンプルな処理を想定
  - 何を：「モノ」「場所」
  - どうする：「新規追加」、「更新」、「削除」
- Phase1では上記まで実装し、Phase2で入力候補やグループ機能などを拡張する

## 製作全体ロードマップ
Phase1
- まずは最小限の機能でデプロイするところまでを実装
  - 「モノ」「場所」を「新規追加」「更新」「削除」する
  - 認証機能あり

Phase2 
- デプロイが完了したら、以下の機能を追加予定
  - 入力候補を履歴から推測
  - モノや場所のグループ機能
  - UI上でドラッグアンドドロップでモノの場所を移動、など

Phase3
- 未定

## 環境(想定）
フロントエンド
- Vue.js
  - Nuxt.js
  - Vuetify
  - Vuex(規模的に不要だが、学習を兼ねて敢えて使用してみる）

バックエンド
- Python
  - pipenv(dev)
  - responder or flask or Django
    - (Djangoの場合) Django Rest Framework

DBサーバ
- MySQL or PostgreSQL or FireBase

Webサーバ
- Nginx

インフラ
- AWS or GCP

その他
 - Docker
 - Kubernetes ?
 - Circle CI

## 機能一覧

## 設計書

テーブル
- item_table
  - ID as UUID
  - item as string
  - place as string
  - comment as string
  - regist_date as date

## ページ遷移図
- pages
  - index.vue
  - aboutme.vue
- component
  - 

## クラウドアーキテクチャ

## その他メモ
- FrontendはNuxt.jsで完結させて、バックエンドはAPI機能のみを保持する想定
