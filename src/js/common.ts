import { FileType } from "./types";

// DataURLとしてFileを読み込みDataURLにする
export async function readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        // 読み込み成功イベント
        fileReader.onload = () => {
            if (!fileReader.result || typeof (fileReader.result) !== "string") {
                reject();
                return;
            }

            resolve(fileReader.result);
        };

        // 読み込み失敗イベント
        fileReader.onerror = () => {
            reject();
        };

        fileReader.readAsDataURL(file);
    });
}

// ファイルタイプを判断する
export function detectFileType(file: File): FileType {
    // ファイルタイプ定義
    const typeNameFileTypePairs: { fileType: FileType, typeName: string }[] = [
        { fileType: FileType.Image, typeName: "image" },
        { fileType: FileType.Video, typeName: "video" },
        { fileType: FileType.Audio, typeName: "audio" },
    ];

    // 該当するファイルタイプを見つける
    const foundPair = typeNameFileTypePairs.find((pair) => {
        return file.type.includes(pair.typeName);
    });

    // 該当するものがなければUnknownとして返す
    return foundPair ? foundPair.fileType : FileType.Unknown;
}