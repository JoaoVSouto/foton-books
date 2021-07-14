type VolumeInfo = {
  title: string;
  subtitle: string;
  authors: string[];
  description: string;
  imageLinks: {
    thumbnail: string;
  };
};

export type Book = {
  id: string;
  volumeInfo: VolumeInfo;
};
