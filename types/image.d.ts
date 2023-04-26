export type ImageType = {
   aspect_ratio: number;
   height: number;
   iso_639_1: string | null;
   file_path: string;
   vote_average: number;
   vote_count: number;
   width: number;
};

export type ImagesType = {
   backdrops: ImageType[];
   id: 3;
   logos: Array<any>;
   posters: ImageType[];
};
