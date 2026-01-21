export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  parentId?: string;
  order: number;
  isExternalLink?: boolean;
  externalUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PageTreeNode extends Page {
  children: PageTreeNode[];
}
