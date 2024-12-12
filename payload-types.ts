/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    pages: Page;
    blogs: Blog;
    tags: Tag;
    media: Media;
    users: User;
    contacts: Contact;
    forms: Form;
    'form-submissions': FormSubmission;
    search: Search;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    pages: PagesSelect<false> | PagesSelect<true>;
    blogs: BlogsSelect<false> | BlogsSelect<true>;
    tags: TagsSelect<false> | TagsSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    contacts: ContactsSelect<false> | ContactsSelect<true>;
    forms: FormsSelect<false> | FormsSelect<true>;
    'form-submissions': FormSubmissionsSelect<false> | FormSubmissionsSelect<true>;
    search: SearchSelect<false> | SearchSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    'site-settings': SiteSetting;
  };
  globalsSelect: {
    'site-settings': SiteSettingsSelect<false> | SiteSettingsSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  layout?:
    | (
        | DetailsType
        | ListType
        | HeroType
        | FeaturedPostType
        | LatestPostsType
        | ContactType
        | FAQType
        | PricingType
        | RecommendationsListType
        | FeaturesType
        | SubscribeType
        | FormType
        | DisqusCommentsType
      )[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: (number | null) | Media;
  };
  isHome?: boolean | null;
  isDynamic?: boolean | null;
  slugMode?: ('generate' | 'custom') | null;
  slug?: string | null;
  pathMode?: ('generate' | 'custom') | null;
  path?: string | null;
  parent?: (number | null) | Page;
  breadcrumbs?:
    | {
        doc?: (number | null) | Page;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "DetailsType".
 */
export interface DetailsType {
  collectionSlug?: ('blogs' | 'tags' | 'users') | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Details';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ListType".
 */
export interface ListType {
  title?: string | null;
  collectionSlug?: ('tags' | 'users') | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'List';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroType".
 */
export interface HeroType {
  image?: (number | null) | Media;
  title?: string | null;
  description?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Hero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    blogImageSize2?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    blogImageSize3?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FeaturedPostType".
 */
export interface FeaturedPostType {
  title?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'FeaturedPost';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LatestPostsType".
 */
export interface LatestPostsType {
  titleOne?: string | null;
  titleTwo?: string | null;
  titleThree?: string | null;
  buttonName: string;
  buttonPath: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'LatestPosts';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContactType".
 */
export interface ContactType {
  title?: string | null;
  description?: string | null;
  image?: (number | null) | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Contact';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FAQType".
 */
export interface FAQType {
  title: string;
  description?: string | null;
  questions?:
    | {
        question?: string | null;
        answer?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'FAQ';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "PricingType".
 */
export interface PricingType {
  pricingPlan?:
    | {
        planIcon: 'free' | 'gold' | 'goldPlus';
        planTitle: string;
        freeDuration?: string | null;
        planDescription: string;
        monthlyPlanPrice: number;
        yearlyPlanPrice: number;
        planBtnText: string;
        planBenefits?:
          | {
              benefit: string;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Pricing';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RecommendationsListType".
 */
export interface RecommendationsListType {
  recommendations?:
    | {
        image: number | Media;
        title: string;
        description: string;
        recommendationUrl: string;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'RecommendationsList';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FeaturesType".
 */
export interface FeaturesType {
  features?:
    | {
        title?: string | null;
        points?:
          | {
              point?: string | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Features';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SubscribeType".
 */
export interface SubscribeType {
  title?: string | null;
  image?: (number | null) | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Subscribe';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FormType".
 */
export interface FormType {
  title: string;
  form: {
    relationTo: 'forms';
    value: number | Form;
  };
  id?: string | null;
  blockName?: string | null;
  blockType: 'FormBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms".
 */
export interface Form {
  id: number;
  title: string;
  fields?:
    | (
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            defaultValue?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'checkbox';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'country';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'email';
          }
        | {
            message?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'message';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'number';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            options?:
              | {
                  label: string;
                  value: string;
                  id?: string | null;
                }[]
              | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'select';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'text';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'textarea';
          }
      )[]
    | null;
  submitButtonLabel?: string | null;
  confirmationType?: ('message' | 'redirect') | null;
  confirmationMessage?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  redirect?: {
    url: string;
  };
  emails?:
    | {
        emailTo?: string | null;
        cc?: string | null;
        bcc?: string | null;
        replyTo?: string | null;
        emailFrom?: string | null;
        subject: string;
        message?:
          | {
              [k: string]: unknown;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "DisqusCommentsType".
 */
export interface DisqusCommentsType {
  title?: string | null;
  shortName: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'DisqusComments';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blogs".
 */
export interface Blog {
  id: number;
  blogImage: number | Media;
  title: string;
  description: string;
  tags?:
    | {
        relationTo: 'tags';
        value: number | Tag;
      }[]
    | null;
  author?:
    | {
        relationTo: 'users';
        value: number | User;
      }[]
    | null;
  content: {
    [k: string]: unknown;
  }[];
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: (number | null) | Media;
  };
  slug?: string | null;
  publishOn?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags".
 */
export interface Tag {
  id: number;
  tagImage: number | Media;
  title: string;
  description: string;
  color?: ('blue' | 'gray' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink') | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: (number | null) | Media;
  };
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  displayName?: string | null;
  username: string;
  imageUrl?: (number | null) | Media;
  role: ('admin' | 'author' | 'user')[];
  emailVerified?: string | null;
  socialLinks?:
    | {
        platform:
          | 'website'
          | 'facebook'
          | 'instagram'
          | 'twitter'
          | 'linkedin'
          | 'youtube'
          | 'tiktok'
          | 'pinterest'
          | 'snapchat'
          | 'reddit'
          | 'tumblr'
          | 'whatsapp'
          | 'telegram'
          | 'github'
          | 'medium'
          | 'quora'
          | 'discord';
        value: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  _verified?: boolean | null;
  _verificationToken?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contacts".
 */
export interface Contact {
  id: number;
  name: string;
  email?: string | null;
  message: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions".
 */
export interface FormSubmission {
  id: number;
  form: number | Form;
  submissionData?:
    | {
        field: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "search".
 */
export interface Search {
  id: number;
  title?: string | null;
  priority?: number | null;
  doc:
    | {
        relationTo: 'blogs';
        value: number | Blog;
      }
    | {
        relationTo: 'tags';
        value: number | Tag;
      }
    | {
        relationTo: 'users';
        value: number | User;
      };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null)
    | ({
        relationTo: 'blogs';
        value: number | Blog;
      } | null)
    | ({
        relationTo: 'tags';
        value: number | Tag;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'contacts';
        value: number | Contact;
      } | null)
    | ({
        relationTo: 'forms';
        value: number | Form;
      } | null)
    | ({
        relationTo: 'form-submissions';
        value: number | FormSubmission;
      } | null)
    | ({
        relationTo: 'search';
        value: number | Search;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  layout?:
    | T
    | {
        Details?:
          | T
          | {
              collectionSlug?: T;
              id?: T;
              blockName?: T;
            };
        List?:
          | T
          | {
              title?: T;
              collectionSlug?: T;
              id?: T;
              blockName?: T;
            };
        Hero?:
          | T
          | {
              image?: T;
              title?: T;
              description?: T;
              id?: T;
              blockName?: T;
            };
        FeaturedPost?:
          | T
          | {
              title?: T;
              id?: T;
              blockName?: T;
            };
        LatestPosts?:
          | T
          | {
              titleOne?: T;
              titleTwo?: T;
              titleThree?: T;
              buttonName?: T;
              buttonPath?: T;
              id?: T;
              blockName?: T;
            };
        Contact?:
          | T
          | {
              title?: T;
              description?: T;
              image?: T;
              id?: T;
              blockName?: T;
            };
        FAQ?:
          | T
          | {
              title?: T;
              description?: T;
              questions?:
                | T
                | {
                    question?: T;
                    answer?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        Pricing?:
          | T
          | {
              pricingPlan?:
                | T
                | {
                    planIcon?: T;
                    planTitle?: T;
                    freeDuration?: T;
                    planDescription?: T;
                    monthlyPlanPrice?: T;
                    yearlyPlanPrice?: T;
                    planBtnText?: T;
                    planBenefits?:
                      | T
                      | {
                          benefit?: T;
                          id?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        RecommendationsList?:
          | T
          | {
              recommendations?:
                | T
                | {
                    image?: T;
                    title?: T;
                    description?: T;
                    recommendationUrl?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        Features?:
          | T
          | {
              features?:
                | T
                | {
                    title?: T;
                    points?:
                      | T
                      | {
                          point?: T;
                          id?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        Subscribe?:
          | T
          | {
              title?: T;
              image?: T;
              id?: T;
              blockName?: T;
            };
        FormBlock?:
          | T
          | {
              title?: T;
              form?: T;
              id?: T;
              blockName?: T;
            };
        DisqusComments?:
          | T
          | {
              title?: T;
              shortName?: T;
              id?: T;
              blockName?: T;
            };
      };
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  isHome?: T;
  isDynamic?: T;
  slugMode?: T;
  slug?: T;
  pathMode?: T;
  path?: T;
  parent?: T;
  breadcrumbs?:
    | T
    | {
        doc?: T;
        url?: T;
        label?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blogs_select".
 */
export interface BlogsSelect<T extends boolean = true> {
  blogImage?: T;
  title?: T;
  description?: T;
  tags?: T;
  author?: T;
  content?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  slug?: T;
  publishOn?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags_select".
 */
export interface TagsSelect<T extends boolean = true> {
  tagImage?: T;
  title?: T;
  description?: T;
  color?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        blogImageSize2?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        blogImageSize3?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  displayName?: T;
  username?: T;
  imageUrl?: T;
  role?: T;
  emailVerified?: T;
  socialLinks?:
    | T
    | {
        platform?: T;
        value?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  _verified?: T;
  _verificationToken?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contacts_select".
 */
export interface ContactsSelect<T extends boolean = true> {
  name?: T;
  email?: T;
  message?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms_select".
 */
export interface FormsSelect<T extends boolean = true> {
  title?: T;
  fields?:
    | T
    | {
        checkbox?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              defaultValue?: T;
              id?: T;
              blockName?: T;
            };
        country?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        email?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        message?:
          | T
          | {
              message?: T;
              id?: T;
              blockName?: T;
            };
        number?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        select?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              options?:
                | T
                | {
                    label?: T;
                    value?: T;
                    id?: T;
                  };
              required?: T;
              id?: T;
              blockName?: T;
            };
        text?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        textarea?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
      };
  submitButtonLabel?: T;
  confirmationType?: T;
  confirmationMessage?: T;
  redirect?:
    | T
    | {
        url?: T;
      };
  emails?:
    | T
    | {
        emailTo?: T;
        cc?: T;
        bcc?: T;
        replyTo?: T;
        emailFrom?: T;
        subject?: T;
        message?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions_select".
 */
export interface FormSubmissionsSelect<T extends boolean = true> {
  form?: T;
  submissionData?:
    | T
    | {
        field?: T;
        value?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "search_select".
 */
export interface SearchSelect<T extends boolean = true> {
  title?: T;
  priority?: T;
  doc?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "site-settings".
 */
export interface SiteSetting {
  id: number;
  general: {
    title: string;
    description: string;
    faviconUrl: number | Media;
    ogImageUrl: number | Media;
    keywords?: string[] | null;
  };
  navbar: {
    logo: BrandLogo;
    menuLinks?:
      | {
          group?: boolean | null;
          menuLink?: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            label: string;
            page?: {
              relationTo: 'pages';
              value: number | Page;
            } | null;
            url?: string | null;
            id?: string | null;
          };
          menuLinkGroup?: {
            groupTitle: string;
            groupLinks?:
              | {
                  type?: ('reference' | 'custom') | null;
                  newTab?: boolean | null;
                  label: string;
                  page?: {
                    relationTo: 'pages';
                    value: number | Page;
                  } | null;
                  url?: string | null;
                  id?: string | null;
                }[]
              | null;
          };
          id?: string | null;
        }[]
      | null;
  };
  footer: {
    logo: BrandLogo;
    footerLinks?:
      | {
          group?: boolean | null;
          menuLink?: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            label: string;
            page?: {
              relationTo: 'pages';
              value: number | Page;
            } | null;
            url?: string | null;
            id?: string | null;
          };
          menuLinkGroup?: {
            groupTitle: string;
            groupLinks?:
              | {
                  type?: ('reference' | 'custom') | null;
                  newTab?: boolean | null;
                  label: string;
                  page?: {
                    relationTo: 'pages';
                    value: number | Page;
                  } | null;
                  url?: string | null;
                  id?: string | null;
                }[]
              | null;
          };
          id?: string | null;
        }[]
      | null;
    socialLinks?:
      | {
          platform:
            | 'website'
            | 'facebook'
            | 'instagram'
            | 'twitter'
            | 'linkedin'
            | 'youtube'
            | 'tiktok'
            | 'pinterest'
            | 'snapchat'
            | 'reddit'
            | 'tumblr'
            | 'whatsapp'
            | 'telegram'
            | 'github'
            | 'medium'
            | 'quora'
            | 'discord';
          value: string;
          id?: string | null;
        }[]
      | null;
    copyright?: string | null;
  };
  redirectionLinks?: {
    blogLink?: {
      relationTo: 'pages';
      value: number | Page;
    } | null;
    authorLink?: {
      relationTo: 'pages';
      value: number | Page;
    } | null;
    tagLink?: {
      relationTo: 'pages';
      value: number | Page;
    } | null;
  };
  monetization?: {
    adSenseId?: string | null;
    measurementId?: string | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BrandLogo".
 */
export interface BrandLogo {
  imageUrl: number | Media;
  height?: number | null;
  width?: number | null;
  description?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "site-settings_select".
 */
export interface SiteSettingsSelect<T extends boolean = true> {
  general?:
    | T
    | {
        title?: T;
        description?: T;
        faviconUrl?: T;
        ogImageUrl?: T;
        keywords?: T;
      };
  navbar?:
    | T
    | {
        logo?:
          | T
          | {
              imageUrl?: T;
              height?: T;
              width?: T;
            };
        menuLinks?:
          | T
          | {
              group?: T;
              menuLink?:
                | T
                | {
                    type?: T;
                    newTab?: T;
                    label?: T;
                    page?: T;
                    url?: T;
                    id?: T;
                  };
              menuLinkGroup?:
                | T
                | {
                    groupTitle?: T;
                    groupLinks?:
                      | T
                      | {
                          type?: T;
                          newTab?: T;
                          label?: T;
                          page?: T;
                          url?: T;
                          id?: T;
                        };
                  };
              id?: T;
            };
      };
  footer?:
    | T
    | {
        logo?:
          | T
          | {
              imageUrl?: T;
              height?: T;
              width?: T;
              description?: T;
            };
        footerLinks?:
          | T
          | {
              group?: T;
              menuLink?:
                | T
                | {
                    type?: T;
                    newTab?: T;
                    label?: T;
                    page?: T;
                    url?: T;
                    id?: T;
                  };
              menuLinkGroup?:
                | T
                | {
                    groupTitle?: T;
                    groupLinks?:
                      | T
                      | {
                          type?: T;
                          newTab?: T;
                          label?: T;
                          page?: T;
                          url?: T;
                          id?: T;
                        };
                  };
              id?: T;
            };
        socialLinks?:
          | T
          | {
              platform?: T;
              value?: T;
              id?: T;
            };
        copyright?: T;
      };
  redirectionLinks?:
    | T
    | {
        blogLink?: T;
        authorLink?: T;
        tagLink?: T;
      };
  monetization?:
    | T
    | {
        adSenseId?: T;
        measurementId?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}