type VolumeInfo = {
  title: string;
  authors: string[];
  description: string;
};

export type Book = {
  id: string;
  volumeInfo: VolumeInfo;
};
