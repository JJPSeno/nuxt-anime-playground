export type DevArticle = {
  slug: string
  media: string[]
  url?: string
  title: string
  description: string
  notes?: string
  techUsed: string[]
}

export type WebDevSection = {
  media: sting[]
  public: DevArticle[]
  internalWork: DevArticle[]
}

export type GameDevSection = {
  media: string[]
  games: DevArticle[]
}