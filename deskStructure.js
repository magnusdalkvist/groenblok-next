import {
  CalendarIcon,
  CogIcon,
  ComposeIcon,
  DocumentsIcon,
  FilterIcon,
  HomeIcon,
  TiersIcon,
  UsersIcon,
  BookIcon,
  DocumentTextIcon,
  DocumentVideoIcon,
} from "@sanity/icons";

export const myStructure = (S) =>
  S.list()
    .title("Menu")
    .items([
      S.listItem()
        .title("Home")
        .icon(HomeIcon)
        .child(S.document().schemaType("home").title("Home")),
      S.listItem()
        .title("Pages")
        .icon(DocumentsIcon)
        .child(S.documentTypeList("page").title("Pages")),
      S.listItem()
        .title("Grøn Blok Magazine")
        .icon(BookIcon)
        .child(
          S.list()
            .title("Menus")
            .items([
              S.listItem()
                .title("Articles")
                .icon(DocumentTextIcon)
                .child(S.documentTypeList("article").title("Articles")),
              S.listItem()
                .title("Videos")
                .icon(DocumentVideoIcon)
                .child(S.documentTypeList("video").title("Videos")),
              S.listItem()
                .title("Podcast")
                .icon(DocumentVideoIcon)
                .child(S.documentTypeList("podcast").title("Podcast")),
              S.listItem()
                .title("Green advice")
                .icon(DocumentTextIcon)
                .child(S.documentTypeList("advice").title("Green advice")),
              S.listItem()
                .title("Reports")
                .icon(DocumentTextIcon)
                .child(S.documentTypeList("report").title("Reports")),
            ])
        ),
      S.listItem()
        .title("Articles")
        .icon(ComposeIcon)
        .child(
          S.list()
            .title("Filters")
            .items([
              S.listItem()
                .title("All Articles")
                .icon(FilterIcon)
                .child(S.documentTypeList("article").title("All Articles")),
              S.listItem()
                .title("Articles By Category")
                .icon(FilterIcon)
                .child(
                  S.documentTypeList("category")
                    .title("Articles by Category")
                    .child((categoryId) =>
                      S.documentList()
                        .title("Articles")
                        .filter('_type == "article" && category._ref == $categoryId')
                        .params({ categoryId })
                    )
                ),
              S.listItem()
                .title("Articles By Author")
                .icon(FilterIcon)
                .child(
                  S.documentTypeList("author")
                    .title("Articles by Author")
                    .child((authorId) =>
                      S.documentList()
                        .title("Articles")
                        .filter('_type == "article" && author._ref == $authorId')
                        .params({ authorId })
                    )
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Authors")
        .icon(UsersIcon)
        .child(S.documentTypeList("author").title("Authors")),
      S.listItem().title("Categories").child(S.documentTypeList("category").title("Categories")),
      S.listItem()
        .title("Events")
        .icon(CalendarIcon)
        .child(
          S.documentTypeList("event")
            .title("Events")
            .defaultOrdering([{ field: "date", direction: "asc" }])
        ),
      S.divider(),
      S.listItem()
        .title("Templates")
        .icon(TiersIcon)
        .child(S.documentTypeList("template").title("Templates")),
      S.listItem()
        .title("Settings")
        .icon(CogIcon)
        .child(S.document().schemaType("settings").title("Settings")),
    ]);
