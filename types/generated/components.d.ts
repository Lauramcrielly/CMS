import type { Schema, Struct } from '@strapi/strapi';

export interface CampaignsCampaignImageWithAlt extends Struct.ComponentSchema {
  collectionName: 'components_campaigns_campaign_image_with_alts';
  info: {
    displayName: 'campaign_image_with_alt';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface CampaignsCampaignsArticle extends Struct.ComponentSchema {
  collectionName: 'components_campaigns_campaigns_articles';
  info: {
    description: '';
    displayName: 'Campaigns Article';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface CampaignsCampaignsImageLinksList
  extends Struct.ComponentSchema {
  collectionName: 'components_campaigns_campaigns_image_links_lists';
  info: {
    description: '';
    displayName: 'Campaigns Image Links List';
  };
  attributes: {
    campaigns_image_links_lists: Schema.Attribute.Relation<
      'oneToMany',
      'api::campaigns-image-links-list.campaigns-image-links-list'
    >;
    shouldOpenLinkInANewTab: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface CampaignsCampaignsLinksList extends Struct.ComponentSchema {
  collectionName: 'components_campaigns_campaigns_links_lists';
  info: {
    description: '';
    displayName: 'Campaigns Links List';
  };
  attributes: {
    campaigns_tag: Schema.Attribute.Relation<
      'oneToOne',
      'api::campaigns-tag.campaigns-tag'
    >;
    collectionType: Schema.Attribute.Enumeration<
      ['venue', 'review', 'blogpost']
    >;
    heading: Schema.Attribute.String;
  };
}

export interface Home2CardsSections extends Struct.ComponentSchema {
  collectionName: 'components_home_2cards_sections';
  info: {
    description: '';
    displayName: '2cards-sections';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['gray', 'white']>;
    buttonLinkCard1: Schema.Attribute.Text;
    buttonLinkCard2: Schema.Attribute.String;
    buttonTextCard1: Schema.Attribute.String;
    buttonTextCard2: Schema.Attribute.String;
    cardColor: Schema.Attribute.Enumeration<['blue', 'yellow']>;
    contentCard1: Schema.Attribute.RichText;
    contentCard2: Schema.Attribute.RichText;
    imageCard1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imageCard2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    titleCard1: Schema.Attribute.String;
    titleCard2: Schema.Attribute.String;
  };
}

export interface HomeCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_home_cta_sections';
  info: {
    description: '';
    displayName: 'cta-section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['gray', 'white']>;
    buttonLink: Schema.Attribute.Text;
    buttonText: Schema.Attribute.Text;
    seeMoreButtonLink: Schema.Attribute.Text;
    seeMoreButtonText: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeDonateButtonSection extends Struct.ComponentSchema {
  collectionName: 'components_home_donate_button_sections';
  info: {
    description: '';
    displayName: 'DonateButtonSection';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['gray', 'white']>;
    buttonLink: Schema.Attribute.Text;
    buttonText: Schema.Attribute.String;
    infoText1: Schema.Attribute.String;
    infoText2: Schema.Attribute.String;
    infoText3: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
  };
}

export interface HomeDonateSection extends Struct.ComponentSchema {
  collectionName: 'components_home_donate_sections';
  info: {
    description: '';
    displayName: 'Donate section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['gray', 'white']>;
    content: Schema.Attribute.RichText;
    donate_cards: Schema.Attribute.Relation<
      'oneToMany',
      'api::donate-card.donate-card'
    >;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_home_faq_sections';
  info: {
    displayName: 'FAQ-section';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeFilters extends Struct.ComponentSchema {
  collectionName: 'components_home_filters';
  info: {
    description: '';
    displayName: 'Filters';
  };
  attributes: {
    filters: Schema.Attribute.Component<'shared.filter', true>;
  };
}

export interface HomeFoundersSection extends Struct.ComponentSchema {
  collectionName: 'components_home_founders_sections';
  info: {
    displayName: 'Founders-section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['gray', 'white']>;
    people: Schema.Attribute.Relation<'oneToMany', 'api::person.person'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeGetInTouchCards extends Struct.ComponentSchema {
  collectionName: 'components_home_get_in_touch_cards';
  info: {
    description: '';
    displayName: 'Get in touch cards';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['gray', 'white']>;
    get_in_touch_cards: Schema.Attribute.Relation<
      'oneToMany',
      'api::get-in-touch-card.get-in-touch-card'
    >;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeGetInvolvedSection extends Struct.ComponentSchema {
  collectionName: 'components_home_get_involved_sections';
  info: {
    description: '';
    displayName: 'get-involved-section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['gray', 'white']>;
    bubbleColor: Schema.Attribute.Enumeration<['blue', 'rose', 'yellow']>;
    description: Schema.Attribute.Text;
    get_involved_cards: Schema.Attribute.Relation<
      'oneToMany',
      'api::get-involved-card.get-involved-card'
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomeHowToListSection extends Struct.ComponentSchema {
  collectionName: 'components_home_how_to_list_sections';
  info: {
    description: '';
    displayName: 'how-to-list-section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['gray', 'white']>;
    buttonLink1: Schema.Attribute.Text;
    buttonLink2: Schema.Attribute.Text;
    buttonLink3: Schema.Attribute.String;
    buttonText1: Schema.Attribute.String;
    buttonText2: Schema.Attribute.String;
    buttonText3: Schema.Attribute.String;
    description1: Schema.Attribute.Text;
    description2: Schema.Attribute.Text;
    description3: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    title1: Schema.Attribute.String;
    title2: Schema.Attribute.String;
    title3: Schema.Attribute.String;
  };
}

export interface HomeImageSectionLinks extends Struct.ComponentSchema {
  collectionName: 'components_home_image_section_links';
  info: {
    description: '';
    displayName: 'Image-section-links';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    links: Schema.Attribute.Relation<'oneToMany', 'api::link.link'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeLocationInfo extends Struct.ComponentSchema {
  collectionName: 'components_home_location_infos';
  info: {
    displayName: 'Location Info';
  };
  attributes: {
    address: Schema.Attribute.RichText;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeMoreInfo extends Struct.ComponentSchema {
  collectionName: 'components_home_more_infos';
  info: {
    displayName: 'MoreInfo';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface HomeNews extends Struct.ComponentSchema {
  collectionName: 'components_home_news';
  info: {
    description: '';
    displayName: 'News';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['white', 'gray']>;
    blog_posts: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-post.blog-post'
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeOurStory extends Struct.ComponentSchema {
  collectionName: 'components_home_our_stories';
  info: {
    description: '';
    displayName: 'Our Story';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['gray', 'white']>;
    buttonLink: Schema.Attribute.Text;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomePostalAddress extends Struct.ComponentSchema {
  collectionName: 'components_home_postal_addresses';
  info: {
    displayName: 'Postal address';
  };
  attributes: {
    address: Schema.Attribute.RichText;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeReviews extends Struct.ComponentSchema {
  collectionName: 'components_home_reviews';
  info: {
    description: '';
    displayName: 'Reviews';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['gray', 'white']>;
    description: Schema.Attribute.String;
    SortBy: Schema.Attribute.Enumeration<['Top rated', 'Recently added']>;
    title: Schema.Attribute.Text;
  };
}

export interface HomeRitchTextComponent extends Struct.ComponentSchema {
  collectionName: 'components_home_ritch_text_components';
  info: {
    displayName: 'RitchTextComponent';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface HomeSignupToNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_home_signup_to_newsletters';
  info: {
    description: '';
    displayName: 'signup-to-newsletter';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeSupportSection extends Struct.ComponentSchema {
  collectionName: 'components_home_support_sections';
  info: {
    displayName: 'Support-section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['gray', 'white']>;
    support_cards: Schema.Attribute.Relation<
      'oneToMany',
      'api::support-card.support-card'
    >;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_home_team_sections';
  info: {
    displayName: 'Team-section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['gray', 'white']>;
    people: Schema.Attribute.Relation<'oneToMany', 'api::person.person'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
  };
  attributes: {
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface HomeTrusteesSection extends Struct.ComponentSchema {
  collectionName: 'components_home_trustees_sections';
  info: {
    displayName: 'Trustees-section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['gray', 'white']>;
    people: Schema.Attribute.Relation<'oneToMany', 'api::person.person'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeVenueInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_home_venue_info_sections';
  info: {
    description: '';
    displayName: 'venue-info-section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['white', 'gray']>;
    venue_infos: Schema.Attribute.Relation<
      'oneToMany',
      'api::venue-info.venue-info'
    >;
  };
}

export interface ListVenueAccessStatementLink extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_access_statement_links';
  info: {
    description: '';
    displayName: 'Access Statement Link';
  };
  attributes: {
    input: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    question: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
  };
}

export interface ListVenueAccessStatementUpload extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_access_statement_uploads';
  info: {
    description: '';
    displayName: 'Access Statement Upload';
  };
  attributes: {
    input: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    question: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
  };
}

export interface ListVenueAccessibleFormats extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_accessible_formats';
  info: {
    description: '';
    displayName: 'Accessible formats';
  };
  attributes: {
    description: Schema.Attribute.Text;
    details: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    options: Schema.Attribute.Component<
      'list-venue.disabled-access-facilities',
      false
    > &
      Schema.Attribute.Required;
    question: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueAccessibleServices extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_accessible_services';
  info: {
    description: '';
    displayName: 'Accessible Services';
  };
  attributes: {
    description: Schema.Attribute.Text;
    details: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    options: Schema.Attribute.Component<
      'list-venue.disabled-access-facilities',
      false
    > &
      Schema.Attribute.Required;
    question: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueAdditionalInfo extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_additional_infos';
  info: {
    description: '';
    displayName: 'Additional info';
  };
  attributes: {
    accessStatementLink: Schema.Attribute.Component<
      'list-venue.access-statement-link',
      false
    > &
      Schema.Attribute.Required;
    accessStatementUpload: Schema.Attribute.Component<
      'list-venue.access-statement-upload',
      false
    > &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueDisabledAccessFacilities
  extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_disabled_access_facilities';
  info: {
    description: '';
    displayName: 'Venue Feature Options';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueDisabledFeatures extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_disabled_features';
  info: {
    description: '';
    displayName: 'Disabled Access';
  };
  attributes: {
    description: Schema.Attribute.Text;
    details: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    options: Schema.Attribute.Component<
      'list-venue.disabled-access-facilities',
      false
    > &
      Schema.Attribute.Required;
    question: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueListVenueProgressBar extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_list_venue_progress_bars';
  info: {
    description: '';
    displayName: 'List Venue Progress Bar';
  };
  attributes: {
    accessibilityFeatures: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    contactDetails: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    venueInformationAndPhotos: Schema.Attribute.Component<
      'shared.label',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface ListVenueMainCategory extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_main_categories';
  info: {
    description: '';
    displayName: 'Main Category';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueMainContact extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_main_contacts';
  info: {
    description: '';
    displayName: 'Main Contact';
  };
  attributes: {
    description: Schema.Attribute.Text;
    labels: Schema.Attribute.Component<'shared.contact', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueMainPhoto extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_main_photos';
  info: {
    description: '';
    displayName: 'Main photo';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueOtherServices extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_other_services';
  info: {
    description: '';
    displayName: 'Other Services';
  };
  attributes: {
    description: Schema.Attribute.Text;
    details: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    options: Schema.Attribute.Component<
      'list-venue.disabled-access-facilities',
      false
    > &
      Schema.Attribute.Required;
    question: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueOvernightAccommodation
  extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_overnight_accommodations';
  info: {
    description: '';
    displayName: 'Overnight accommodation';
  };
  attributes: {
    description: Schema.Attribute.Text;
    details: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    options: Schema.Attribute.Component<
      'list-venue.disabled-access-facilities',
      false
    > &
      Schema.Attribute.Required;
    question: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueParkingFeatures extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_parking_features';
  info: {
    description: '';
    displayName: 'Parking Features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    details: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    options: Schema.Attribute.Component<
      'list-venue.disabled-access-facilities',
      false
    > &
      Schema.Attribute.Required;
    question: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenuePhotoVideoAudio extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_photo_video_audios';
  info: {
    description: '';
    displayName: 'Photo-Video-Audio';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueSubcategories extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_subcategories';
  info: {
    description: '';
    displayName: 'subcategories';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueToiletFeatures extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_toilet_features';
  info: {
    description: '';
    displayName: 'Toilet Features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    details: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    options: Schema.Attribute.Component<
      'list-venue.disabled-access-facilities',
      false
    > &
      Schema.Attribute.Required;
    question: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueTransportFeatures extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_transport_features';
  info: {
    description: '';
    displayName: 'Transport Features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    details: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    options: Schema.Attribute.Component<
      'list-venue.disabled-access-facilities',
      false
    > &
      Schema.Attribute.Required;
    question: Schema.Attribute.Component<'shared.label', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueVenueAddress extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_venue_addresses';
  info: {
    displayName: 'Venue Address';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueVenueAwards extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_venue_awards';
  info: {
    description: '';
    displayName: 'Venue Awards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueVenueDescription extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_venue_descriptions';
  info: {
    description: '';
    displayName: 'Venue description';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueVenueEmail extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_venue_emails';
  info: {
    displayName: 'Venue Email';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueVenuePhone extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_venue_phones';
  info: {
    description: '';
    displayName: 'Venue Phone';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueVenueSocialHandles extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_venue_social_handles';
  info: {
    displayName: 'Venue social handles';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueVenueTitle extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_venue_titles';
  info: {
    description: '';
    displayName: 'Venue Title';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListVenueVenueWebsite extends Struct.ComponentSchema {
  collectionName: 'components_list_venue_venue_websites';
  info: {
    displayName: 'Venue Website';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NewsBlogImageWithAlt extends Struct.ComponentSchema {
  collectionName: 'components_news_blog_image_with_alts';
  info: {
    description: '';
    displayName: 'blog_image_with_alt';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface NewsImageV2 extends Struct.ComponentSchema {
  collectionName: 'components_news_image_v2s';
  info: {
    description: '';
    displayName: 'image_v2';
  };
  attributes: {
    alt: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface NewsNews extends Struct.ComponentSchema {
  collectionName: 'components_news_news';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'apps';
  };
  attributes: {
    firstLineTitle: Schema.Attribute.String;
    secondLineTitle: Schema.Attribute.String;
  };
}

export interface NewsNewsContent extends Struct.ComponentSchema {
  collectionName: 'components_news_news_contents';
  info: {
    displayName: 'News Content';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ProfileAccessPreferencesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_profile_access_preferences_sections';
  info: {
    description: '';
    displayName: 'Access preferences Section';
  };
  attributes: {
    adaptationsSectionText: Schema.Attribute.String;
    adaptationsSectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required;
    challengesSectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    physicalDevicesSectionText: Schema.Attribute.Text;
    physicalDevicesSectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required;
    shareSectionText: Schema.Attribute.Text;
    statusSectionText: Schema.Attribute.Text;
    statusSectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProfileAccountDetailsSection extends Struct.ComponentSchema {
  collectionName: 'components_profile_account_details_sections';
  info: {
    description: '';
    displayName: 'Account details Section';
  };
  attributes: {
    changePasswordButtonText: Schema.Attribute.String &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    emailLabel: Schema.Attribute.String & Schema.Attribute.Required;
    passwordDescription: Schema.Attribute.Text;
    passwordLabel: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    usernameDescription: Schema.Attribute.Text;
    usernameLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProfileBusinessContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_profile_business_contact_details';
  info: {
    description: '';
    displayName: 'Business Contact Details';
  };
  attributes: {
    emailLabel: Schema.Attribute.String & Schema.Attribute.Required;
    firstNameLabel: Schema.Attribute.String & Schema.Attribute.Required;
    lastNameLabel: Schema.Attribute.String & Schema.Attribute.Required;
    phoneLabel: Schema.Attribute.String & Schema.Attribute.Required;
    primaryContactDetailsDescription: Schema.Attribute.Text;
    primaryContactDetailsTitle: Schema.Attribute.String &
      Schema.Attribute.Required;
    roleLabel: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryContactDetailsDescription: Schema.Attribute.Text;
    secondaryContactDetailsTitle: Schema.Attribute.String &
      Schema.Attribute.Required;
  };
}

export interface ProfileBusinessProfileDetailsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_profile_business_profile_details_sections';
  info: {
    description: '';
    displayName: 'Business Profile Details Section';
  };
  attributes: {
    bannerPhotoDescription: Schema.Attribute.Text;
    bannerPhotoLabel: Schema.Attribute.String & Schema.Attribute.Required;
    businessNameDescription: Schema.Attribute.Text;
    businessNameLabel: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    profilePhotoDescription: Schema.Attribute.Text;
    profilePhotoLabel: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProfileBussinessAccountDetails extends Struct.ComponentSchema {
  collectionName: 'components_profile_bussiness_account_details';
  info: {
    description: '';
    displayName: 'Bussiness Account details';
  };
  attributes: {
    description: Schema.Attribute.Text;
    emailLabel: Schema.Attribute.String & Schema.Attribute.Required;
    passwordDescription: Schema.Attribute.Text;
    passwordLabel: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProfileCloseOrDeleteYourAccount
  extends Struct.ComponentSchema {
  collectionName: 'components_profile_close_or_delete_your_accounts';
  info: {
    description: '';
    displayName: 'Delete your account Section';
  };
  attributes: {
    deleteButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    deleteSectionText: Schema.Attribute.RichText & Schema.Attribute.Required;
    deleteSectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProfilePreferencesSection extends Struct.ComponentSchema {
  collectionName: 'components_profile_preferences_sections';
  info: {
    description: '';
    displayName: 'Preferences Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    emailNotificationSectionText: Schema.Attribute.String;
    emailNotificationSectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required;
    newsletterSectionText: Schema.Attribute.Text;
    newsletterSectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProfileProfileDetailsSection extends Struct.ComponentSchema {
  collectionName: 'components_profile_profile_details_sections';
  info: {
    description: '';
    displayName: 'Profile details Section';
  };
  attributes: {
    bannerPhotoDescription: Schema.Attribute.Text;
    bannerPhotoLabel: Schema.Attribute.String & Schema.Attribute.Required;
    bioDescription: Schema.Attribute.Text;
    bioLabel: Schema.Attribute.String & Schema.Attribute.Required;
    charitiesDescription: Schema.Attribute.RichText;
    charitiesLabel: Schema.Attribute.String & Schema.Attribute.Required;
    dateOfBirthLabel: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.RichText;
    firstNameLabel: Schema.Attribute.String & Schema.Attribute.Required;
    lastNameLabel: Schema.Attribute.String & Schema.Attribute.Required;
    locationLabel: Schema.Attribute.String & Schema.Attribute.Required;
    photosDescription: Schema.Attribute.RichText;
    photosLabel: Schema.Attribute.String & Schema.Attribute.Required;
    profilePhotoDescription: Schema.Attribute.Text;
    profilePhotoLabel: Schema.Attribute.String & Schema.Attribute.Required;
    showAgeText: Schema.Attribute.Text;
    showFirstNameText: Schema.Attribute.Text;
    showLastNameText: Schema.Attribute.Text;
    showLocationText: Schema.Attribute.String;
    socialMediaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedArticle extends Struct.ComponentSchema {
  collectionName: 'components_shared_articles';
  info: {
    description: '';
    displayName: 'Blog Article ';
    icon: 'brush';
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
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    publish_at: Schema.Attribute.DateTime;
    shouldDisplaySurvey: Schema.Attribute.Boolean;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedAudioMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_audio_medias';
  info: {
    displayName: 'Audio Media';
  };
  attributes: {
    audio: Schema.Attribute.Media<'files' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    description: '';
    displayName: 'Contact';
  };
  attributes: {
    email: Schema.Attribute.String;
    firstName: Schema.Attribute.String;
    jobTitle: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface SharedContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    seeMoreButtonLink: Schema.Attribute.String;
    seeMoreButtonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_sections';
  info: {
    description: '';
    displayName: 'cta-section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.cta', true>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedFilter extends Struct.ComponentSchema {
  collectionName: 'components_shared_filters';
  info: {
    description: '';
    displayName: 'filter';
  };
  attributes: {
    access_requirements: Schema.Attribute.Relation<
      'oneToMany',
      'api::user-access-requirement.user-access-requirement'
    >;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::venue-category.venue-category'
    >;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    venue_facilities: Schema.Attribute.Relation<
      'oneToMany',
      'api::venue-facility.venue-facility'
    >;
  };
}

export interface SharedFilterTags extends Struct.ComponentSchema {
  collectionName: 'components_shared_filter_tags';
  info: {
    description: '';
    displayName: 'filter tags';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    description: '';
    displayName: 'page-footer';
  };
  attributes: {
    bottomLink: Schema.Attribute.Component<'shared.link', true>;
    bottomText: Schema.Attribute.Text;
    icon: Schema.Attribute.Component<'shared.icon', true>;
    linkSection: Schema.Attribute.Component<'shared.link-section', true>;
  };
}

export interface SharedIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    href: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    description: '';
    displayName: 'Image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedLabel extends Struct.ComponentSchema {
  collectionName: 'components_shared_labels';
  info: {
    description: '';
    displayName: 'Label';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

export interface SharedLinkSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_sections';
  info: {
    description: '';
    displayName: 'link-section';
  };
  attributes: {
    href: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMetaTags extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_tags';
  info: {
    description: '';
    displayName: 'MetaTags';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface SharedQuickSearch extends Struct.ComponentSchema {
  collectionName: 'components_shared_quick_searches';
  info: {
    description: '';
    displayName: 'quick-search';
  };
  attributes: {
    description: Schema.Attribute.Text;
    filters: Schema.Attribute.Component<'shared.filter', true>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.Text;
  };
}

export interface SharedRichTextBlocks extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_text_blocks';
  info: {
    displayName: 'Rich Text Blocks';
  };
  attributes: {
    rich_text_blocks: Schema.Attribute.Blocks;
  };
}

export interface SharedVenueSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_venue_sections';
  info: {
    description: '';
    displayName: 'Venue Section';
  };
  attributes: {
    name: Schema.Attribute.Text;
    subgroup: Schema.Attribute.Component<'shared.venues-subsection', true>;
  };
}

export interface SharedVenuesFilters extends Struct.ComponentSchema {
  collectionName: 'components_shared_venues_filters';
  info: {
    description: '';
    displayName: 'Venues Filters';
  };
  attributes: {
    group: Schema.Attribute.Component<'shared.venue-section', true>;
    quickSearch: Schema.Attribute.Component<'shared.quick-search', false>;
  };
}

export interface SharedVenuesSubsection extends Struct.ComponentSchema {
  collectionName: 'components_shared_venues_subsections';
  info: {
    description: '';
    displayName: 'Venue Subsection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    filter: Schema.Attribute.Component<'shared.filter', true>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface SharedVideoMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_medias';
  info: {
    displayName: 'Video Media';
  };
  attributes: {
    video: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface WriteAReviewAccessRequirementsDuringThisVisitSection
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_access_requirements_during_this_visit_sections';
  info: {
    description: '';
    displayName: 'Access requirements during this visit - section';
  };
  attributes: {
    boldText: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    infoText: Schema.Attribute.Text;
    optionsLabel: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface WriteAReviewAccessibilityOfToiletsRating
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_accessibility_of_toilets_ratings';
  info: {
    description: '';
    displayName: 'Accessibility of toilets rating';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface WriteAReviewAccessibleFacilities
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_accessible_facilities';
  info: {
    displayName: 'Accessible facilities';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface WriteAReviewAccessibleFacilitiesDisabledAccess
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_accessible_facilities_disabled_accesses';
  info: {
    displayName: 'Accessible facilities - disabled access';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface WriteAReviewAccessibleToiletsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_accessible_toilets_sections';
  info: {
    description: '';
    displayName: 'Accessible toilets - section';
  };
  attributes: {
    accessibilityOfToiletsRating: Schema.Attribute.Component<
      'write-a-review.accessibility-of-toilets-rating',
      false
    >;
    commentsAndAdditionalDetail: Schema.Attribute.Component<
      'write-a-review.comments-and-additional-detail',
      false
    >;
    description: Schema.Attribute.Text;
    facilities: Schema.Attribute.Component<'write-a-review.facilities', false>;
    title: Schema.Attribute.String;
  };
}

export interface WriteAReviewAddAReviewTitle extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_add_a_review_titles';
  info: {
    displayName: 'Add a review title';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface WriteAReviewCommentsAndAdditionalDetail
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_comments_and_additional_details';
  info: {
    displayName: 'Comments and additional detail';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface WriteAReviewDisabledAccessInAndAroundSection
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_disabled_access_in_and_around_sections';
  info: {
    displayName: 'Disabled access in and around - section';
  };
  attributes: {
    accessibleFacilities: Schema.Attribute.Component<
      'write-a-review.accessible-facilities-disabled-access',
      false
    >;
    commentsAndAdditionalDetail: Schema.Attribute.Component<
      'write-a-review.comments-and-additional-detail',
      false
    >;
    description: Schema.Attribute.Text;
    disabledAccessRating: Schema.Attribute.Component<
      'write-a-review.disabled-access-rating',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface WriteAReviewDisabledAccessRating
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_disabled_access_ratings';
  info: {
    description: '';
    displayName: 'Disabled access rating';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface WriteAReviewExtraReviewDetails extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_extra_review_details';
  info: {
    displayName: 'extraReviewDetails';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface WriteAReviewFacilities extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_facilities';
  info: {
    displayName: 'Facilities';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface WriteAReviewHowDidTheExperienceMakeYouFeel
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_how_did_the_experience_make_you_feels';
  info: {
    displayName: 'How did the experience make you feel';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface WriteAReviewHowDidYouGetThere extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_how_did_you_get_theres';
  info: {
    description: '';
    displayName: 'How did you get there';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface WriteAReviewHowWasYourExperienceSection
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_how_was_your_experience_section_s';
  info: {
    description: '';
    displayName: 'How was your experience - section ';
  };
  attributes: {
    addReviewTitle: Schema.Attribute.Component<
      'write-a-review.add-a-review-title',
      false
    >;
    description: Schema.Attribute.Text;
    howDidTheExperienceMakeYouFeel: Schema.Attribute.Component<
      'write-a-review.how-did-the-experience-make-you-feel',
      false
    >;
    summariseYourExperience: Schema.Attribute.Component<
      'write-a-review.summarise-your-experience',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface WriteAReviewParkingAndTransport
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_parking_and_transports';
  info: {
    description: '';
    displayName: 'Parking & Transport - section';
  };
  attributes: {
    accessibleFacilities: Schema.Attribute.Component<
      'write-a-review.accessible-facilities',
      false
    >;
    commentsAndAdditionalDetail: Schema.Attribute.Component<
      'write-a-review.comments-and-additional-detail',
      false
    >;
    description: Schema.Attribute.Text;
    howDidYouGetThere: Schema.Attribute.Component<
      'write-a-review.how-did-you-get-there',
      false
    >;
    parkingTransportRating: Schema.Attribute.Component<
      'write-a-review.parking-transport-rating',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface WriteAReviewParkingTransportRating
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_parking_transport_ratings';
  info: {
    description: '';
    displayName: 'parkingTransportRating';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface WriteAReviewPhotoVideoAudioSection
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_photo_video_audio_sections';
  info: {
    description: '';
    displayName: 'Photo-Video-Audio - section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    tipsText: Schema.Attribute.RichText;
    tipsTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WriteAReviewProgressBar extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_progress_bars';
  info: {
    description: '';
    displayName: 'progressBar';
  };
  attributes: {
    extraReviewDetails: Schema.Attribute.Component<
      'write-a-review.extra-review-details',
      false
    >;
    quickReview: Schema.Attribute.Component<
      'write-a-review.quick-review',
      false
    >;
  };
}

export interface WriteAReviewQuickReview extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_quick_reviews';
  info: {
    displayName: 'quickReview';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface WriteAReviewReviewDateOfVisit extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_review_date_of_visits';
  info: {
    displayName: 'Review date of visit';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WriteAReviewReviewGuide extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_review_guides';
  info: {
    description: '';
    displayName: 'ReviewGuide';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    text1: Schema.Attribute.Text;
    text2: Schema.Attribute.Text;
  };
}

export interface WriteAReviewStaffRating extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_staff_ratings';
  info: {
    displayName: 'Staff rating';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface WriteAReviewStaffSection extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_staff_sections';
  info: {
    displayName: 'Staff - section';
  };
  attributes: {
    commentsAndAdditionalDetail: Schema.Attribute.Component<
      'write-a-review.comments-and-additional-detail',
      false
    >;
    description: Schema.Attribute.Text;
    staffRating: Schema.Attribute.Component<
      'write-a-review.staff-rating',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface WriteAReviewSummariseYourExperience
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_summarise_your_experiences';
  info: {
    displayName: 'Summarise your experience';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface WriteAReviewVenueTitle extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_venue_titles';
  info: {
    displayName: 'Venue Title';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WriteAReviewWhereDidYouGoSection
  extends Struct.ComponentSchema {
  collectionName: 'components_write_a_review_where_did_you_go_sections';
  info: {
    description: '';
    displayName: 'Where did you go - section';
  };
  attributes: {
    dateOfVisit: Schema.Attribute.Component<
      'write-a-review.review-date-of-visit',
      false
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    venueTitle: Schema.Attribute.Component<'write-a-review.venue-title', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'campaigns.campaign-image-with-alt': CampaignsCampaignImageWithAlt;
      'campaigns.campaigns-article': CampaignsCampaignsArticle;
      'campaigns.campaigns-image-links-list': CampaignsCampaignsImageLinksList;
      'campaigns.campaigns-links-list': CampaignsCampaignsLinksList;
      'home.2cards-sections': Home2CardsSections;
      'home.cta-section': HomeCtaSection;
      'home.donate-button-section': HomeDonateButtonSection;
      'home.donate-section': HomeDonateSection;
      'home.faq-section': HomeFaqSection;
      'home.filters': HomeFilters;
      'home.founders-section': HomeFoundersSection;
      'home.get-in-touch-cards': HomeGetInTouchCards;
      'home.get-involved-section': HomeGetInvolvedSection;
      'home.how-to-list-section': HomeHowToListSection;
      'home.image-section-links': HomeImageSectionLinks;
      'home.location-info': HomeLocationInfo;
      'home.more-info': HomeMoreInfo;
      'home.news': HomeNews;
      'home.our-story': HomeOurStory;
      'home.postal-address': HomePostalAddress;
      'home.reviews': HomeReviews;
      'home.ritch-text-component': HomeRitchTextComponent;
      'home.signup-to-newsletter': HomeSignupToNewsletter;
      'home.support-section': HomeSupportSection;
      'home.team-section': HomeTeamSection;
      'home.testimonials': HomeTestimonials;
      'home.trustees-section': HomeTrusteesSection;
      'home.venue-info-section': HomeVenueInfoSection;
      'list-venue.access-statement-link': ListVenueAccessStatementLink;
      'list-venue.access-statement-upload': ListVenueAccessStatementUpload;
      'list-venue.accessible-formats': ListVenueAccessibleFormats;
      'list-venue.accessible-services': ListVenueAccessibleServices;
      'list-venue.additional-info': ListVenueAdditionalInfo;
      'list-venue.disabled-access-facilities': ListVenueDisabledAccessFacilities;
      'list-venue.disabled-features': ListVenueDisabledFeatures;
      'list-venue.list-venue-progress-bar': ListVenueListVenueProgressBar;
      'list-venue.main-category': ListVenueMainCategory;
      'list-venue.main-contact': ListVenueMainContact;
      'list-venue.main-photo': ListVenueMainPhoto;
      'list-venue.other-services': ListVenueOtherServices;
      'list-venue.overnight-accommodation': ListVenueOvernightAccommodation;
      'list-venue.parking-features': ListVenueParkingFeatures;
      'list-venue.photo-video-audio': ListVenuePhotoVideoAudio;
      'list-venue.subcategories': ListVenueSubcategories;
      'list-venue.toilet-features': ListVenueToiletFeatures;
      'list-venue.transport-features': ListVenueTransportFeatures;
      'list-venue.venue-address': ListVenueVenueAddress;
      'list-venue.venue-awards': ListVenueVenueAwards;
      'list-venue.venue-description': ListVenueVenueDescription;
      'list-venue.venue-email': ListVenueVenueEmail;
      'list-venue.venue-phone': ListVenueVenuePhone;
      'list-venue.venue-social-handles': ListVenueVenueSocialHandles;
      'list-venue.venue-title': ListVenueVenueTitle;
      'list-venue.venue-website': ListVenueVenueWebsite;
      'news.blog-image-with-alt': NewsBlogImageWithAlt;
      'news.image-v2': NewsImageV2;
      'news.news': NewsNews;
      'news.news-content': NewsNewsContent;
      'profile.access-preferences-section': ProfileAccessPreferencesSection;
      'profile.account-details-section': ProfileAccountDetailsSection;
      'profile.business-contact-details': ProfileBusinessContactDetails;
      'profile.business-profile-details-section': ProfileBusinessProfileDetailsSection;
      'profile.bussiness-account-details': ProfileBussinessAccountDetails;
      'profile.close-or-delete-your-account': ProfileCloseOrDeleteYourAccount;
      'profile.preferences-section': ProfilePreferencesSection;
      'profile.profile-details-section': ProfileProfileDetailsSection;
      'shared.article': SharedArticle;
      'shared.audio-media': SharedAudioMedia;
      'shared.contact': SharedContact;
      'shared.content': SharedContent;
      'shared.cta': SharedCta;
      'shared.cta-section': SharedCtaSection;
      'shared.filter': SharedFilter;
      'shared.filter-tags': SharedFilterTags;
      'shared.footer': SharedFooter;
      'shared.icon': SharedIcon;
      'shared.image': SharedImage;
      'shared.label': SharedLabel;
      'shared.link': SharedLink;
      'shared.link-section': SharedLinkSection;
      'shared.meta-tags': SharedMetaTags;
      'shared.quick-search': SharedQuickSearch;
      'shared.rich-text-blocks': SharedRichTextBlocks;
      'shared.venue-section': SharedVenueSection;
      'shared.venues-filters': SharedVenuesFilters;
      'shared.venues-subsection': SharedVenuesSubsection;
      'shared.video-media': SharedVideoMedia;
      'write-a-review.access-requirements-during-this-visit-section': WriteAReviewAccessRequirementsDuringThisVisitSection;
      'write-a-review.accessibility-of-toilets-rating': WriteAReviewAccessibilityOfToiletsRating;
      'write-a-review.accessible-facilities': WriteAReviewAccessibleFacilities;
      'write-a-review.accessible-facilities-disabled-access': WriteAReviewAccessibleFacilitiesDisabledAccess;
      'write-a-review.accessible-toilets-section': WriteAReviewAccessibleToiletsSection;
      'write-a-review.add-a-review-title': WriteAReviewAddAReviewTitle;
      'write-a-review.comments-and-additional-detail': WriteAReviewCommentsAndAdditionalDetail;
      'write-a-review.disabled-access-in-and-around-section': WriteAReviewDisabledAccessInAndAroundSection;
      'write-a-review.disabled-access-rating': WriteAReviewDisabledAccessRating;
      'write-a-review.extra-review-details': WriteAReviewExtraReviewDetails;
      'write-a-review.facilities': WriteAReviewFacilities;
      'write-a-review.how-did-the-experience-make-you-feel': WriteAReviewHowDidTheExperienceMakeYouFeel;
      'write-a-review.how-did-you-get-there': WriteAReviewHowDidYouGetThere;
      'write-a-review.how-was-your-experience-section': WriteAReviewHowWasYourExperienceSection;
      'write-a-review.parking-and-transport': WriteAReviewParkingAndTransport;
      'write-a-review.parking-transport-rating': WriteAReviewParkingTransportRating;
      'write-a-review.photo-video-audio-section': WriteAReviewPhotoVideoAudioSection;
      'write-a-review.progress-bar': WriteAReviewProgressBar;
      'write-a-review.quick-review': WriteAReviewQuickReview;
      'write-a-review.review-date-of-visit': WriteAReviewReviewDateOfVisit;
      'write-a-review.review-guide': WriteAReviewReviewGuide;
      'write-a-review.staff-rating': WriteAReviewStaffRating;
      'write-a-review.staff-section': WriteAReviewStaffSection;
      'write-a-review.summarise-your-experience': WriteAReviewSummariseYourExperience;
      'write-a-review.venue-title': WriteAReviewVenueTitle;
      'write-a-review.where-did-you-go-section': WriteAReviewWhereDidYouGoSection;
    }
  }
}
