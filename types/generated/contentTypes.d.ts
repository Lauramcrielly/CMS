import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutUsPageAboutUsPage extends Struct.SingleTypeSchema {
  collectionName: 'about_us_pages';
  info: {
    description: '';
    displayName: 'About Us Page';
    pluralName: 'about-us-pages';
    singularName: 'about-us-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'home.our-story',
        'home.testimonials',
        'home.2cards-sections',
        'home.get-involved-section',
        'home.cta-section',
        'home.donate-section',
        'home.get-in-touch-cards',
        'home.how-to-list-section',
        'home.image-section-links',
        'home.more-info',
        'home.team-section',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageForMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-us-page.about-us-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    showSearchBar: Schema.Attribute.Enumeration<['yes', 'no']>;
    subtitle: Schema.Attribute.Text;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogAuthorBlogAuthor extends Struct.CollectionTypeSchema {
  collectionName: 'blog_authors';
  info: {
    description: '';
    displayName: 'Blog Authors';
    pluralName: 'blog-authors';
    singularName: 'blog-author';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fullName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-author.blog-author'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'fullName'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogPostBlogPost extends Struct.CollectionTypeSchema {
  collectionName: 'blog_posts';
  info: {
    description: '';
    displayName: 'Blog Posts';
    pluralName: 'blog-posts';
    singularName: 'blog-post';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blog_author: Schema.Attribute.Relation<
      'oneToOne',
      'api::blog-author.blog-author'
    >;
    blog_image_with_alt: Schema.Attribute.Component<
      'news.blog-image-with-alt',
      false
    > &
      Schema.Attribute.Required;
    blog_tags: Schema.Attribute.Relation<'oneToMany', 'api::blog-tag.blog-tag'>;
    campaigns_tags: Schema.Attribute.Relation<
      'oneToMany',
      'api::campaigns-tag.campaigns-tag'
    >;
    content: Schema.Attribute.Blocks;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    dynamic_content: Schema.Attribute.DynamicZone<
      ['shared.video-media', 'shared.audio-media', 'news.news-content']
    >;
    legacy_content: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-post.blog-post'
    > &
      Schema.Attribute.Private;
    publish_at: Schema.Attribute.DateTime & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    shouldDisplaySurvey: Schema.Attribute.Boolean;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogTagBlogTag extends Struct.CollectionTypeSchema {
  collectionName: 'blog_tags';
  info: {
    description: '';
    displayName: 'Blog Tags';
    pluralName: 'blog-tags';
    singularName: 'blog-tag';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-tag.blog-tag'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    shouldShowInNewsPageAsTopTagFilter: Schema.Attribute.Boolean;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBreadcrumbItemBreadcrumbItem
  extends Struct.CollectionTypeSchema {
  collectionName: 'breadcrumb_items';
  info: {
    description: '';
    displayName: 'Breadcrumb Item';
    pluralName: 'breadcrumb-items';
    singularName: 'breadcrumb-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    link: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::breadcrumb-item.breadcrumb-item'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCampaignsImageLinksListCampaignsImageLinksList
  extends Struct.CollectionTypeSchema {
  collectionName: 'campaigns_image_links_lists';
  info: {
    description: '';
    displayName: 'Campaigns Image Links List';
    pluralName: 'campaigns-image-links-lists';
    singularName: 'campaigns-image-links-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    imageTitle: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::campaigns-image-links-list.campaigns-image-links-list'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCampaignsPageCampaignsPage extends Struct.SingleTypeSchema {
  collectionName: 'campaigns_pages';
  info: {
    description: '';
    displayName: 'Campaigns Page';
    pluralName: 'campaigns-pages';
    singularName: 'campaigns-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    firstLineTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::campaigns-page.campaigns-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    secondLineTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCampaignsPostCampaignsPost
  extends Struct.CollectionTypeSchema {
  collectionName: 'campaigns_posts';
  info: {
    description: '';
    displayName: 'Campaigns Posts';
    pluralName: 'campaigns-posts';
    singularName: 'campaigns-post';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    campaign_image_with_alt: Schema.Attribute.Component<
      'campaigns.campaign-image-with-alt',
      false
    > &
      Schema.Attribute.Required;
    campaigns_tags: Schema.Attribute.Relation<
      'oneToMany',
      'api::campaigns-tag.campaigns-tag'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    dynamic_content: Schema.Attribute.DynamicZone<
      [
        'campaigns.campaigns-article',
        'campaigns.campaigns-links-list',
        'campaigns.campaigns-image-links-list',
        'shared.video-media',
        'shared.audio-media',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::campaigns-post.campaigns-post'
    > &
      Schema.Attribute.Private;
    publish_at: Schema.Attribute.DateTime & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    right_side_dynamic_content: Schema.Attribute.DynamicZone<
      ['campaigns.campaigns-image-links-list']
    >;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCampaignsTagCampaignsTag
  extends Struct.CollectionTypeSchema {
  collectionName: 'campaigns_tags';
  info: {
    description: '';
    displayName: 'Campaigns Tags';
    pluralName: 'campaigns-tags';
    singularName: 'campaigns-tag';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::campaigns-tag.campaigns-tag'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    publishedAt: Schema.Attribute.DateTime;
    shouldShowInCampaignsPageAsTopTagFilter: Schema.Attribute.Boolean;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiClaimListingPageClaimListingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'claim_listing_pages';
  info: {
    description: '';
    displayName: 'Claim listing page';
    pluralName: 'claim-listing-pages';
    singularName: 'claim-listing-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    firstNameLabel: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    jobRoleLabel: Schema.Attribute.String & Schema.Attribute.Required;
    lastNameLabel: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::claim-listing-page.claim-listing-page'
    > &
      Schema.Attribute.Private;
    proofOfOwnershipDescription: Schema.Attribute.Text;
    proofOfOwnershipLabel: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.Text;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    websiteLabel: Schema.Attribute.String;
  };
}

export interface ApiCommunityQuestionPageCommunityQuestionPage
  extends Struct.SingleTypeSchema {
  collectionName: 'community_question_pages';
  info: {
    description: '';
    displayName: 'Community Questions Page';
    pluralName: 'community-question-pages';
    singularName: 'community-question-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      ['home.more-info', 'home.faq-section', 'home.image-section-links']
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageForMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::community-question-page.community-question-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactUsPageContactUsPage extends Struct.SingleTypeSchema {
  collectionName: 'contact_us_pages';
  info: {
    description: '';
    displayName: 'Contact us Page';
    pluralName: 'contact-us-pages';
    singularName: 'contact-us-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'home.more-info',
        'home.location-info',
        'home.postal-address',
        'home.get-in-touch-cards',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText;
    formId: Schema.Attribute.BigInteger;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageForMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-us-page.contact-us-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    showSearchBar: Schema.Attribute.Enumeration<['yes', 'no']>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDonateCardDonateCard extends Struct.CollectionTypeSchema {
  collectionName: 'donate_cards';
  info: {
    description: '';
    displayName: 'Donate card';
    pluralName: 'donate-cards';
    singularName: 'donate-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description1: Schema.Attribute.RichText;
    description2: Schema.Attribute.RichText;
    linkText1: Schema.Attribute.String;
    linkText2: Schema.Attribute.Text;
    linkUrl1: Schema.Attribute.Text;
    linkUrl2: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::donate-card.donate-card'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDonatePageDonatePage extends Struct.SingleTypeSchema {
  collectionName: 'donate_pages';
  info: {
    description: '';
    displayName: 'Donate Page';
    pluralName: 'donate-pages';
    singularName: 'donate-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    buttonLink: Schema.Attribute.Text;
    buttonText: Schema.Attribute.Text;
    content: Schema.Attribute.DynamicZone<
      ['home.our-story', 'home.donate-section', 'home.donate-button-section']
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageForMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    infoText1: Schema.Attribute.Text;
    infoText2: Schema.Attribute.Text;
    infoText3: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::donate-page.donate-page'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedAt: Schema.Attribute.DateTime;
    showSearchBar: Schema.Attribute.Enumeration<['yes', 'no']>;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEditProfileBusinessEditProfileBusiness
  extends Struct.SingleTypeSchema {
  collectionName: 'edit_profile_businesses';
  info: {
    description: '';
    displayName: 'Edit Profile Business';
    pluralName: 'edit-profile-businesses';
    singularName: 'edit-profile-business';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'profile.bussiness-account-details',
        'profile.business-profile-details-section',
        'profile.business-contact-details',
        'profile.close-or-delete-your-account',
        'profile.preferences-section',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::edit-profile-business.edit-profile-business'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEditProfileUserEditProfileUser
  extends Struct.SingleTypeSchema {
  collectionName: 'edit_profile_users';
  info: {
    description: '';
    displayName: 'Edit Profile User';
    pluralName: 'edit-profile-users';
    singularName: 'edit-profile-user';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'profile.account-details-section',
        'profile.profile-details-section',
        'profile.access-preferences-section',
        'profile.preferences-section',
        'profile.close-or-delete-your-account',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::edit-profile-user.edit-profile-user'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    saveButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFaqFaq extends Struct.CollectionTypeSchema {
  collectionName: 'faqs';
  info: {
    description: '';
    displayName: 'FAQ';
    pluralName: 'faqs';
    singularName: 'faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGetInTouchCardGetInTouchCard
  extends Struct.CollectionTypeSchema {
  collectionName: 'get_in_touch_cards';
  info: {
    displayName: 'Get in touch card';
    pluralName: 'get-in-touch-cards';
    singularName: 'get-in-touch-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::get-in-touch-card.get-in-touch-card'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.String;
    phone: Schema.Attribute.BigInteger;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGetInvolvedCardGetInvolvedCard
  extends Struct.CollectionTypeSchema {
  collectionName: 'get_involved_cards';
  info: {
    displayName: 'Get involved card';
    pluralName: 'get-involved-cards';
    singularName: 'get-involved-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::get-involved-card.get-involved-card'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGetInvolvedPageGetInvolvedPage
  extends Struct.SingleTypeSchema {
  collectionName: 'get_involved_pages';
  info: {
    description: '';
    displayName: 'Get Involved Page';
    pluralName: 'get-involved-pages';
    singularName: 'get-involved-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'home.our-story',
        'home.2cards-sections',
        'home.get-involved-section',
        'home.testimonials',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageForMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::get-involved-page.get-involved-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    showSearchBar: Schema.Attribute.Enumeration<['yes', 'no']>;
    subtitle: Schema.Attribute.Text;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHeaderHeader extends Struct.SingleTypeSchema {
  collectionName: 'headers';
  info: {
    displayName: 'Header';
    pluralName: 'headers';
    singularName: 'header';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    buttonDonateLink: Schema.Attribute.Text;
    buttonDonateText: Schema.Attribute.Text;
    buttonWriteReviewLink: Schema.Attribute.Text;
    buttonWriteReviewText: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    link: Schema.Attribute.Component<'shared.link', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::header.header'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomepageHomepage extends Struct.SingleTypeSchema {
  collectionName: 'homepages';
  info: {
    description: '';
    displayName: 'Homepage';
    pluralName: 'homepages';
    singularName: 'homepage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'home.filters',
        'home.testimonials',
        'home.cta-section',
        'home.reviews',
        'home.get-involved-section',
        'home.2cards-sections',
        'home.our-story',
        'home.news',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageForMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homepage.homepage'
    > &
      Schema.Attribute.Private;
    metaTags: Schema.Attribute.Component<'shared.meta-tags', false>;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLinkLink extends Struct.CollectionTypeSchema {
  collectionName: 'links';
  info: {
    description: '';
    displayName: 'Link';
    pluralName: 'links';
    singularName: 'link';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    href: Schema.Attribute.Text;
    imageLink: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::link.link'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiListVenuePageListVenuePage extends Struct.SingleTypeSchema {
  collectionName: 'list_venue_pages';
  info: {
    description: '';
    displayName: 'Venue Form - Main';
    pluralName: 'list-venue-pages';
    singularName: 'list-venue-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-venue-page.list-venue-page'
    > &
      Schema.Attribute.Private;
    progressBar: Schema.Attribute.Component<
      'list-venue.list-venue-progress-bar',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMeetTheTeamMeetTheTeam extends Struct.SingleTypeSchema {
  collectionName: 'meet_the_teams';
  info: {
    description: '';
    displayName: 'Meet the Team Page';
    pluralName: 'meet-the-teams';
    singularName: 'meet-the-team';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'home.our-story',
        'home.cta-section',
        'home.team-section',
        'home.trustees-section',
        'home.founders-section',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageForMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::meet-the-team.meet-the-team'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    showSearchBar: Schema.Attribute.Enumeration<['yes', 'no']>;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNewsPageNewsPage extends Struct.SingleTypeSchema {
  collectionName: 'news_pages';
  info: {
    description: '';
    displayName: 'News Page';
    pluralName: 'news-pages';
    singularName: 'news-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    firstLineTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-page.news-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    secondLineTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPageContentPageContent extends Struct.CollectionTypeSchema {
  collectionName: 'page_contents';
  info: {
    description: '';
    displayName: '[Page] Content';
    pluralName: 'page-contents';
    singularName: 'page-content';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    breadcrumb_items: Schema.Attribute.Relation<
      'oneToMany',
      'api::breadcrumb-item.breadcrumb-item'
    >;
    content: Schema.Attribute.DynamicZone<
      [
        'home.2cards-sections',
        'home.cta-section',
        'home.get-involved-section',
        'home.more-info',
        'home.our-story',
        'home.testimonials',
        'home.image-section-links',
        'shared.audio-media',
        'shared.video-media',
        'shared.rich-text-blocks',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    imageForMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-content.page-content'
    > &
      Schema.Attribute.Private;
    metaTags: Schema.Attribute.Component<'shared.meta-tags', false>;
    publishedAt: Schema.Attribute.DateTime;
    showSearchBar: Schema.Attribute.Enumeration<['yes', 'no']>;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPageFooterPageFooter extends Struct.SingleTypeSchema {
  collectionName: 'page_footers';
  info: {
    description: '';
    displayName: 'Footer';
    pluralName: 'page-footers';
    singularName: 'page-footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bottomLink: Schema.Attribute.Component<'shared.link', true>;
    bottomText: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Component<'shared.icon', true>;
    linkSection: Schema.Attribute.Component<'shared.link-section', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-footer.page-footer'
    > &
      Schema.Attribute.Private;
    newsletterText: Schema.Attribute.String;
    newsletterTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPersonPerson extends Struct.CollectionTypeSchema {
  collectionName: 'people';
  info: {
    description: '';
    displayName: 'Person';
    pluralName: 'people';
    singularName: 'person';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::person.person'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProfileBusinessProfileBusiness
  extends Struct.SingleTypeSchema {
  collectionName: 'profile_businesses';
  info: {
    description: '';
    displayName: 'Profile Business';
    pluralName: 'profile-businesses';
    singularName: 'profile-business';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    editProfileButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::profile-business.profile-business'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    reviewsText: Schema.Attribute.Text & Schema.Attribute.Required;
    reviewsTitle: Schema.Attribute.String & Schema.Attribute.Required;
    statisticsText: Schema.Attribute.String & Schema.Attribute.Required;
    statisticsTitle: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    venuesText: Schema.Attribute.Text & Schema.Attribute.Required;
    venuesTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiProfileUserProfileUser extends Struct.SingleTypeSchema {
  collectionName: 'profile_users';
  info: {
    description: '';
    displayName: 'Profile User';
    pluralName: 'profile-users';
    singularName: 'profile-user';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutMeSectionText: Schema.Attribute.Text & Schema.Attribute.Required;
    aboutMeSectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    editProfileButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    experiencesSectionText: Schema.Attribute.Text & Schema.Attribute.Required;
    experiencesSectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::profile-user.profile-user'
    > &
      Schema.Attribute.Private;
    photosSectionText: Schema.Attribute.Text & Schema.Attribute.Required;
    photosSectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    publicInfoText: Schema.Attribute.Text & Schema.Attribute.Required;
    publicInfoTitle: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    reviewsSectionText: Schema.Attribute.Text & Schema.Attribute.Required;
    reviewsSectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    supportSectionText: Schema.Attribute.Text & Schema.Attribute.Required;
    supportSectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    welcomeText: Schema.Attribute.Text & Schema.Attribute.Required;
    welcomeTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiReviewFormMainReviewFormMain
  extends Struct.SingleTypeSchema {
  collectionName: 'review_form_mains';
  info: {
    description: '';
    displayName: 'Review Form - Main';
    pluralName: 'review-form-mains';
    singularName: 'review-form-main';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::review-form-main.review-form-main'
    > &
      Schema.Attribute.Private;
    progressBar: Schema.Attribute.Component<
      'write-a-review.progress-bar',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    ReviewGuide: Schema.Attribute.Component<
      'write-a-review.review-guide',
      false
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiReviewFormStep1ReviewFormStep1
  extends Struct.SingleTypeSchema {
  collectionName: 'review_form_step_1s';
  info: {
    description: '';
    displayName: 'Review Form - Step 1';
    pluralName: 'review-form-step-1s';
    singularName: 'review-form-step-1';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    addExtraDetailsButtonText: Schema.Attribute.String;
    content: Schema.Attribute.DynamicZone<
      [
        'write-a-review.where-did-you-go-section',
        'write-a-review.photo-video-audio-section',
        'write-a-review.how-was-your-experience-section',
        'write-a-review.access-requirements-during-this-visit-section',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::review-form-step-1.review-form-step-1'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    submitDescription: Schema.Attribute.Text;
    submitQuickReviewButtonText: Schema.Attribute.Text;
    submitTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiReviewFormStep2ReviewFormStep2
  extends Struct.SingleTypeSchema {
  collectionName: 'review_form_step_2s';
  info: {
    displayName: 'Review Form - Step 2';
    pluralName: 'review-form-step-2s';
    singularName: 'review-form-step-2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'write-a-review.parking-and-transport',
        'write-a-review.disabled-access-in-and-around-section',
        'write-a-review.accessible-toilets-section',
        'write-a-review.staff-section',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::review-form-step-2.review-form-step-2'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSupportCardSupportCard extends Struct.CollectionTypeSchema {
  collectionName: 'support_cards';
  info: {
    displayName: 'Support card';
    pluralName: 'support-cards';
    singularName: 'support-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::support-card.support-card'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSupportUsPageSupportUsPage extends Struct.SingleTypeSchema {
  collectionName: 'support_us_pages';
  info: {
    description: '';
    displayName: 'Support us Page';
    pluralName: 'support-us-pages';
    singularName: 'support-us-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'home.get-in-touch-cards',
        'home.donate-section',
        'home.more-info',
        'home.support-section',
        'home.2cards-sections',
        'home.donate-button-section',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageForMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::support-us-page.support-us-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    showSearchBar: Schema.Attribute.Enumeration<['yes', 'no']>;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSupportersPageSupportersPage
  extends Struct.SingleTypeSchema {
  collectionName: 'supporters_pages';
  info: {
    description: '';
    displayName: 'Supporters Page';
    pluralName: 'supporters-pages';
    singularName: 'supporters-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<['home.image-section-links']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageForMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::supporters-page.supporters-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    showSearchBar: Schema.Attribute.Enumeration<['yes', 'no']>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSurveySurvey extends Struct.SingleTypeSchema {
  collectionName: 'surveys';
  info: {
    description: '';
    displayName: 'Survey';
    pluralName: 'surveys';
    singularName: 'survey';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imageLinks: Schema.Attribute.Component<'shared.link', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::survey.survey'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTestimonialTestimonial extends Struct.CollectionTypeSchema {
  collectionName: 'testimonials';
  info: {
    description: '';
    displayName: 'Testimonial';
    pluralName: 'testimonials';
    singularName: 'testimonial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authorImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    authorName: Schema.Attribute.String;
    authorTitle: Schema.Attribute.String;
    backgroundColor: Schema.Attribute.Enumeration<['gray', 'white']>;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    theme: Schema.Attribute.Enumeration<
      ['Green', 'Sunset', 'Aqua', 'Rose', 'Sunny']
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiUserAccessRequirementUserAccessRequirement
  extends Struct.CollectionTypeSchema {
  collectionName: 'user_access_requirements';
  info: {
    description: '';
    displayName: 'User Access Requirements';
    pluralName: 'user-access-requirements';
    singularName: 'user-access-requirement';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        'moving',
        'seeing',
        'hearing',
        'understanding',
        'communicating',
        'dexterityAndCoordination',
        'accessingToilets',
        'anImpairmentYouCannotSee',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    isVisible: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::user-access-requirement.user-access-requirement'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<
      ['AccessPreferences', 'PhysicalDevices', 'SoftwareHardwareAdaptations']
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVenueAccessibilityFeatureVenueAccessibilityFeature
  extends Struct.SingleTypeSchema {
  collectionName: 'venue_accessibility_features';
  info: {
    description: '';
    displayName: 'Venue Form - Step 2';
    pluralName: 'venue-accessibility-features';
    singularName: 'venue-accessibility-feature';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'list-venue.disabled-features',
        'list-venue.parking-features',
        'list-venue.transport-features',
        'list-venue.toilet-features',
        'list-venue.overnight-accommodation',
        'list-venue.accessible-formats',
        'list-venue.accessible-services',
        'list-venue.other-services',
        'list-venue.additional-info',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::venue-accessibility-feature.venue-accessibility-feature'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVenueCategoryVenueCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'venue_categories';
  info: {
    displayName: 'Venue Category';
    pluralName: 'venue-categories';
    singularName: 'venue-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::venue-category.venue-category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVenueContactInformationFormVenueContactInformationForm
  extends Struct.SingleTypeSchema {
  collectionName: 'venue_contact_information_forms';
  info: {
    description: '';
    displayName: 'Venue Form - Step 3';
    pluralName: 'venue-contact-information-forms';
    singularName: 'venue-contact-information-form';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'list-venue.main-contact',
        'list-venue.venue-address',
        'list-venue.venue-website',
        'list-venue.venue-phone',
        'list-venue.venue-email',
        'list-venue.venue-social-handles',
        'list-venue.venue-awards',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::venue-contact-information-form.venue-contact-information-form'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVenueFacilityVenueFacility
  extends Struct.CollectionTypeSchema {
  collectionName: 'venue_facilities';
  info: {
    description: '';
    displayName: 'Venue Facility';
    pluralName: 'venue-facilities';
    singularName: 'venue-facility';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    frontendForm: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::venue-facility.venue-facility'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<
      [
        'DisabledFeatures',
        'ParkingFeatures',
        'TransportFeatures',
        'ToiletsFeatures',
        'OvernightAccommodationFeatures',
        'AccessibleFormatsFeatures',
        'AccessibilityFeatures',
        'OtherFeatures',
      ]
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVenueInfoVenueInfo extends Struct.CollectionTypeSchema {
  collectionName: 'venue_infos';
  info: {
    description: '';
    displayName: 'Venue Info';
    pluralName: 'venue-infos';
    singularName: 'venue-info';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::venue-info.venue-info'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVenueInformationAndPhotosFormVenueInformationAndPhotosForm
  extends Struct.SingleTypeSchema {
  collectionName: 'venue_information_and_photos_forms';
  info: {
    description: '';
    displayName: 'Venue Form - Step 1';
    pluralName: 'venue-information-and-photos-forms';
    singularName: 'venue-information-and-photos-form';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'list-venue.venue-title',
        'list-venue.main-category',
        'list-venue.subcategories',
        'list-venue.venue-description',
        'list-venue.main-photo',
        'list-venue.photo-video-audio',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::venue-information-and-photos-form.venue-information-and-photos-form'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVenueSearchVenueSearch extends Struct.SingleTypeSchema {
  collectionName: 'venue_searches';
  info: {
    description: '';
    displayName: 'Venue Search';
    pluralName: 'venue-searches';
    singularName: 'venue-search';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<['shared.venues-filters']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::venue-search.venue-search'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVenuesPageVenuesPage extends Struct.SingleTypeSchema {
  collectionName: 'venues_pages';
  info: {
    description: '';
    displayName: 'Venues Page';
    pluralName: 'venues-pages';
    singularName: 'venues-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'home.our-story',
        'home.get-involved-section',
        'home.testimonials',
        'home.how-to-list-section',
        'home.venue-info-section',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageForMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::venues-page.venues-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    showSearchBar: Schema.Attribute.Enumeration<['yes', 'no']>;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVolunteerPageVolunteerPage extends Struct.SingleTypeSchema {
  collectionName: 'volunteer_pages';
  info: {
    description: '';
    displayName: 'Volunteer Page';
    pluralName: 'volunteer-pages';
    singularName: 'volunteer-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'home.image-section-links',
        'home.2cards-sections',
        'home.testimonials',
        'home.more-info',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageForMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::volunteer-page.volunteer-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    showSearchBar: Schema.Attribute.Enumeration<['yes', 'no']>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-us-page.about-us-page': ApiAboutUsPageAboutUsPage;
      'api::blog-author.blog-author': ApiBlogAuthorBlogAuthor;
      'api::blog-post.blog-post': ApiBlogPostBlogPost;
      'api::blog-tag.blog-tag': ApiBlogTagBlogTag;
      'api::breadcrumb-item.breadcrumb-item': ApiBreadcrumbItemBreadcrumbItem;
      'api::campaigns-image-links-list.campaigns-image-links-list': ApiCampaignsImageLinksListCampaignsImageLinksList;
      'api::campaigns-page.campaigns-page': ApiCampaignsPageCampaignsPage;
      'api::campaigns-post.campaigns-post': ApiCampaignsPostCampaignsPost;
      'api::campaigns-tag.campaigns-tag': ApiCampaignsTagCampaignsTag;
      'api::claim-listing-page.claim-listing-page': ApiClaimListingPageClaimListingPage;
      'api::community-question-page.community-question-page': ApiCommunityQuestionPageCommunityQuestionPage;
      'api::contact-us-page.contact-us-page': ApiContactUsPageContactUsPage;
      'api::donate-card.donate-card': ApiDonateCardDonateCard;
      'api::donate-page.donate-page': ApiDonatePageDonatePage;
      'api::edit-profile-business.edit-profile-business': ApiEditProfileBusinessEditProfileBusiness;
      'api::edit-profile-user.edit-profile-user': ApiEditProfileUserEditProfileUser;
      'api::faq.faq': ApiFaqFaq;
      'api::get-in-touch-card.get-in-touch-card': ApiGetInTouchCardGetInTouchCard;
      'api::get-involved-card.get-involved-card': ApiGetInvolvedCardGetInvolvedCard;
      'api::get-involved-page.get-involved-page': ApiGetInvolvedPageGetInvolvedPage;
      'api::header.header': ApiHeaderHeader;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::link.link': ApiLinkLink;
      'api::list-venue-page.list-venue-page': ApiListVenuePageListVenuePage;
      'api::meet-the-team.meet-the-team': ApiMeetTheTeamMeetTheTeam;
      'api::news-page.news-page': ApiNewsPageNewsPage;
      'api::page-content.page-content': ApiPageContentPageContent;
      'api::page-footer.page-footer': ApiPageFooterPageFooter;
      'api::person.person': ApiPersonPerson;
      'api::profile-business.profile-business': ApiProfileBusinessProfileBusiness;
      'api::profile-user.profile-user': ApiProfileUserProfileUser;
      'api::review-form-main.review-form-main': ApiReviewFormMainReviewFormMain;
      'api::review-form-step-1.review-form-step-1': ApiReviewFormStep1ReviewFormStep1;
      'api::review-form-step-2.review-form-step-2': ApiReviewFormStep2ReviewFormStep2;
      'api::support-card.support-card': ApiSupportCardSupportCard;
      'api::support-us-page.support-us-page': ApiSupportUsPageSupportUsPage;
      'api::supporters-page.supporters-page': ApiSupportersPageSupportersPage;
      'api::survey.survey': ApiSurveySurvey;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::user-access-requirement.user-access-requirement': ApiUserAccessRequirementUserAccessRequirement;
      'api::venue-accessibility-feature.venue-accessibility-feature': ApiVenueAccessibilityFeatureVenueAccessibilityFeature;
      'api::venue-category.venue-category': ApiVenueCategoryVenueCategory;
      'api::venue-contact-information-form.venue-contact-information-form': ApiVenueContactInformationFormVenueContactInformationForm;
      'api::venue-facility.venue-facility': ApiVenueFacilityVenueFacility;
      'api::venue-info.venue-info': ApiVenueInfoVenueInfo;
      'api::venue-information-and-photos-form.venue-information-and-photos-form': ApiVenueInformationAndPhotosFormVenueInformationAndPhotosForm;
      'api::venue-search.venue-search': ApiVenueSearchVenueSearch;
      'api::venues-page.venues-page': ApiVenuesPageVenuesPage;
      'api::volunteer-page.volunteer-page': ApiVolunteerPageVolunteerPage;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
