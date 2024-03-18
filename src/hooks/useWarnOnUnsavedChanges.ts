import { useEffect } from 'react';

/**
 * ユーザーが未保存の変更を持つページを離れようとした時に、警告を表示するためのフックです。
 * 
 * このフックは`beforeunload`イベントを利用しており、ページがリロードされたり、
 * ブラウザが閉じられたりする前に確認ダイアログを表示します。ただし、このフックは
 * React Routerによる内部ルート変更時のナビゲーションには対応していません。
 * 
 * @param unsavedChanges - ユーザーが未保存の変更を行ったかどうかを示すブール値です。
 *                          trueの場合、ユーザーがページを離れようとした際に警告が表示されます。
 */
export const useWarnOnUnsavedChanges = (unsavedChanges: boolean) => {
    useEffect(() => {
        // ページを離れる前のイベントハンドラを定義
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (!unsavedChanges) return;
            e.preventDefault(); // 標準のイベントをキャンセル
            e.returnValue = ''; // ほとんどのブラウザでは、この設定が警告ダイアログを表示するために必要
        };

        // `beforeunload`イベントリスナーを追加
        window.addEventListener('beforeunload', handleBeforeUnload);

        // クリーンアップ関数。コンポーネントのアンマウント時やunsavedChangesが変更された時に、
        // イベントリスナーを削除する。
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [unsavedChanges]); // 依存配列。unsavedChangesが変更された場合、効果を再実行する。
};

export default useWarnOnUnsavedChanges;