import {
  CalendarIcon,
  CogIcon,
  ComposeIcon,
  DocumentsIcon,
  FilterIcon,
  HomeIcon,
  TiersIcon,
  UsersIcon,
} from '@sanity/icons'

export const myStructure = (S) =>
  S.list()
    .title('Menu')
    .items([
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(S.document().schemaType('home').title('Home')),
      S.listItem()
        .title('Pages')
        .icon(DocumentsIcon)
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Articles')
        .icon(ComposeIcon)
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('All Articles')
                .icon(FilterIcon)
                .child(S.documentTypeList('article').title('All Articles')),
              S.listItem()
                .title('Articles By Category')
                .icon(FilterIcon)
                .child(
                  S.documentTypeList('category')
                    .title('Articles by Category')
                    .child((categoryId) =>
                      S.documentList()
                        .title('Articles')
                        .filter('_type == "article" && category._ref == $categoryId')
                        .params({categoryId})
                    )
                ),
              S.listItem()
                .title('Articles By Author')
                .icon(FilterIcon)
                .child(
                  S.documentTypeList('author')
                    .title('Articles by Author')
                    .child((authorId) =>
                      S.documentList()
                        .title('Articles')
                        .filter('_type == "article" && author._ref == $authorId')
                        .params({authorId})
                    )
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Authors')
        .icon(UsersIcon)
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem().title('Categories').child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Events')
        .icon(CalendarIcon)
        .child(
          S.documentTypeList('event')
            .title('Events')
            .defaultOrdering([{field: 'date', direction: 'asc'}])
        ),
      S.divider(),
      S.listItem()
        .title('Templates')
        .icon(TiersIcon)
        .child(S.documentTypeList('template').title('Templates')),
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').title('Settings')),
    ])
