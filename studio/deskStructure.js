import S from '@sanity/desk-tool/structure-builder';

import {
  HiOutlineHome,
  HiOutlineFingerPrint,
  HiOutlineDocument,
  HiOutlineCog,
  HiMenuAlt1,
  HiOutlineBeaker,
  HiOutlineColorSwatch,
} from 'react-icons/hi';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .icon(HiOutlineDocument)
        .child(
          S.list()
            .title('Pages Documents')
            .items([
              S.listItem()
                .title('Home Page')
                .icon(HiOutlineHome)
                .child(
                  S.document().schemaType('homePage').documentId('homePage')
                ),
              S.listItem()
                .title('About Page')
                .icon(HiOutlineFingerPrint)
                .child(
                  S.document().schemaType('aboutPage').documentId('aboutPage')
                ),
            ])
        ),
      S.listItem()
        .title('Settings')
        .icon(HiOutlineCog)
        .child(
          S.list()
            .title('Settings Documents')
            .items([
              S.listItem()
                .title('Metadata')
                .icon(HiOutlineBeaker)
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
              S.listItem()
                .title('Site Colors')
                .icon(HiOutlineColorSwatch)
                .child(S.document().schemaType('colors').documentId('colors')),
              S.listItem()
                .title('Main Navigation')
                .icon(HiMenuAlt1)
                .child(
                  S.document().schemaType('navigation').documentId('navigation')
                ),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'homePage',
            'aboutPage',
            'siteSettings',
            'colors',
            'navigation',
          ].includes(listItem.getId())
      ),
    ]);
