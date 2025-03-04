import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_benefit_items';
  info: {
    description: 'Individual benefit item';
    displayName: 'Benefit Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_items';
  info: {
    description: 'Individual feature item';
    displayName: 'Feature Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ScheduleScheduleItem extends Struct.ComponentSchema {
  collectionName: 'components_schedule_schedule_item';
  info: {
    displayName: 'Schedule Item';
  };
  attributes: {
    activity: Schema.Attribute.String & Schema.Attribute.Required;
    time: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAppDownloadSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_app_download_sections';
  info: {
    description: 'App download section content';
    displayName: 'App Download Section';
  };
  attributes: {
    appScreenshot: Schema.Attribute.Media<'images'>;
    appStoreUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    playStoreUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_benefits_sections';
  info: {
    description: 'Benefits section content';
    displayName: 'Benefits Section';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'elements.benefit-item', true> &
      Schema.Attribute.Required;
    sectionSubtitle: Schema.Attribute.Text;
    sectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsContentSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_content_section';
  info: {
    displayName: 'Content Section';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_features_sections';
  info: {
    description: 'Features section content';
    displayName: 'Features Section';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-item', true> &
      Schema.Attribute.Required;
    sectionSubtitle: Schema.Attribute.Text;
    sectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    description: 'Main hero section content';
    displayName: 'Hero Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    mainHeading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Confidence. Served Daily.'>;
    primaryButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Book a Demo'>;
    primaryButtonUrl: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://calendly.com/getknowbie/knowbie-introduction-meeting'>;
    secondaryButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Learn More'>;
    secondaryButtonUrl: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/learn-more'>;
    subHeading: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Empowering hospitality and retail liquor staff with knowledge that drives success'>;
  };
}

export interface SectionsScheduleItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_schedule_items';
  info: {
    description: 'An item in an event schedule';
    displayName: 'Schedule Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<60>;
    speaker: Schema.Attribute.String;
    time: Schema.Attribute.Time & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTwoColumnSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_two_column_section';
  info: {
    displayName: 'Two Column Section';
  };
  attributes: {
    image: Schema.Attribute.Media;
    leftContent: Schema.Attribute.RichText;
    rightContent: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO metadata for content';
    displayName: 'SEO';
  };
  attributes: {
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SidebarInfoItem extends Struct.ComponentSchema {
  collectionName: 'components_sidebar_info_item';
  info: {
    displayName: 'Info Item';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.benefit-item': ElementsBenefitItem;
      'elements.feature-item': ElementsFeatureItem;
      'schedule.schedule-item': ScheduleScheduleItem;
      'sections.app-download-section': SectionsAppDownloadSection;
      'sections.benefits-section': SectionsBenefitsSection;
      'sections.content-section': SectionsContentSection;
      'sections.features-section': SectionsFeaturesSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.schedule-item': SectionsScheduleItem;
      'sections.two-column-section': SectionsTwoColumnSection;
      'shared.seo': SharedSeo;
      'sidebar.info-item': SidebarInfoItem;
    }
  }
}
