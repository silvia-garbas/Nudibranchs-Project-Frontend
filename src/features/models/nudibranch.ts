import { User } from './user';

export type Image = {
  urlOriginal: string;
  url: string;
  mimetype: string;
  size: number;
};


export type Nudibranch = {
  id: string;
  specie: string;
  marinezone: 'Mediterranean Sea' | 'Cantabrian Sea' | 'Atlantic Ocean';
  season: string;
  depth: string;
   image: {
    urlOriginal: string;
    url: string;
    mimetype: string;
    size: number;
  };
  owner: User;
};


// export type NudibranchStructure = { id: string } & Nudibranch;

// export type NudibranchServerResponse = {
//   results: NudibranchStructure[];
// };
