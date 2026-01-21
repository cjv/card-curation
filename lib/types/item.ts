export type CreatorStatus =
  | 'Verified'
  | 'Community'
  | 'Official'
  | 'Third Party'
  | 'Unknown';

export type Category =
  | 'Category 1'
  | 'Category 2'
  | 'Category 3'
  | 'Category 4'
  | 'Category 5'
  | 'Category 6';

export interface Item {
  id: string;
  slug: string;
  title: string;
  creator: string;
  year: number;
  creatorStatus: CreatorStatus;
  sku?: string;
  description: string;
  categories: Category[];
  tags: string[];
  available: boolean;
  imageUrl?: string;
  links: {
    link1?: string;
    link2?: string;
    link3?: string;
    link4?: string;
    link5?: string;
    link6?: string;
    link7?: string;
    link8?: string;
  };
}
