import type {StructureResolver} from 'sanity/structure'
import TechStackPreview from '@/components/TechStackPreview'
import ContactPreview from '@/components/ContactPreview'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Pages Group
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Landing Page')
                .child(
                  S.document()
                    .schemaType('page')
                    .documentId('home') // Fixed ID for landing page
                ),
              S.listItem()
                .title('About Me Page')
                .child(
                  S.document()
                    .schemaType('aboutMe')
                    .documentId('about-me') // Fixed ID for about me page
                )
            ])
        ),

      S.divider(),

      // Components Group
      S.listItem()
        .title('Components')
        .child(
          S.list()
            .title('Components')
            .items([
              S.documentTypeListItem('navigation')
                .title('Navigation'),
              S.documentTypeListItem('carousel')
                .title('Carousel'),
              S.documentTypeListItem('textComponent')
                .title('Text Components'),
              S.documentTypeListItem('imageComponent')
                .title('Image Components'),
              S.documentTypeListItem('imageTextComponent')
                .title('Image & Text Components'),
              S.documentTypeListItem('footer')
                .title('Footer')
            ])
        ),

      S.divider(),

      // Profile & Settings Group
      S.listItem()
        .title('Profile & Settings')
        .child(
          S.list()
            .title('Profile & Settings')
            .items([
              S.listItem()
                .title('About Me Profile')
                .child(
                  S.document()
                    .schemaType('aboutMe')
                    .documentId('about-me')
                )
                .icon(() => '👤'),
              
              // Tech Stack Management
              S.listItem()
                .title('Tech Stack Categories')
                .child(
                  S.list()
                    .title('Tech Stack by Category')
                    .items([
                      S.listItem()
                        .title('Frontend Technologies')
                        .child(
                          S.documentList()
                            .title('Frontend Tech')
                            .filter('_type == "aboutMe" && defined(techStack)')
                            .child((documentId) =>
                              S.document()
                                .documentId(documentId)
                                .schemaType('aboutMe')
                                .views([
                                  S.view.form()
                                    .title('Edit')
                                    .icon(() => '✏️'),
                                  S.view.component(TechStackPreview)
                                    .title('Preview')
                                    .icon(() => '👁️')
                                ])
                            )
                        )
                        .icon(() => '⚛️'),
                      
                      S.listItem()
                        .title('Backend Technologies')
                        .child(
                          S.documentList()
                            .title('Backend Tech')
                            .filter('_type == "aboutMe" && defined(techStack)')
                        )
                        .icon(() => '🔧'),
                      
                      S.listItem()
                        .title('Cloud & DevOps')
                        .child(
                          S.documentList()
                            .title('Cloud Tech')
                            .filter('_type == "aboutMe" && defined(techStack)')
                        )
                        .icon(() => '☁️')
                    ])
                ),

              // Contact Information
              S.listItem()
                .title('Contact Information')
                .child(
                  S.document()
                    .schemaType('aboutMe')
                    .documentId('about-me')
                    .views([
                      S.view.form()
                        .title('Edit Contact')
                        .icon(() => '📝'),
                      S.view.component(ContactPreview)
                        .title('Contact Card Preview')
                        .icon(() => '📇')
                    ])
                )
                .icon(() => '📞')
            ])
        )
        .icon(() => '⚙️'),
    ])
