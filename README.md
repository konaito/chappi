# ChatGPT Opener

ChatGPT Openerは、特定のキーショートカットを使用して[ChatGPT](https://chat.openai.com/)のタブを瞬時に開いたり、テキストエリアにフォーカスを当てることができるChrome拡張機能です。

## インストール

以下の手順でこの拡張機能をインストールしてください。

1. このレポジトリをクローンします。

    ```bash
    git clone https://github.com/sanji0219/chappi.git
    ```

2. Chromeで`chrome://extensions/`に移動し、「デベロッパーモード」を有効にします。

3. 「パッケージ化されていない拡張機能を読み込む」をクリックし、先ほどクローンしたレポジトリのディレクトリを選択します。

## 使い方

- ChatGPTタブを開く: `Command+Shift+Y`
- ChatGPTのテキストエリアにフォーカス: `Command+Shift+U`

以上のキーショートカットは、`manifest.json`でカスタマイズすることができます。

## パーミッション

この拡張機能は以下のパーミッションを使用します。

- `tabs`
- `activeTab`
- `scripting`

## ライセンス

MIT License
