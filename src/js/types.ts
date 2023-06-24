export const FileType = {
    NotSet: 0,
    Unknown: -1,
    Image: 100,
    Video: 200,
    Audio: 300,
};
export type FileType = typeof FileType[keyof typeof FileType];
