import { FileType } from "./types";

// BlobとしてfileUrlを読み込む
export async function readFileAsBlob(fileUrl: string): Promise<Blob> {
    const response = await fetch(fileUrl);
    return await response.blob();
}

// Blobからファイルタイプを判断する
export function detectFileType(fileBlob: Blob): FileType {
    // ファイルタイプ定義
    const typeNameFileTypePairs: { fileType: FileType, typeName: string }[] = [
        { fileType: FileType.Image, typeName: "image" },
        { fileType: FileType.Video, typeName: "video" },
        { fileType: FileType.Audio, typeName: "audio" },
    ];

    // 該当するファイルタイプを見つける
    const foundPair = typeNameFileTypePairs.find((pair) => {
        return fileBlob.type.includes(pair.typeName);
    });

    // 該当するものがなければUnknownとして返す
    return foundPair ? foundPair.fileType : FileType.Unknown;
}