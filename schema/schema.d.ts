import { ImageHero } from './content-types/image-hero';
import { LandingPage } from './content-types/landing-page';
import { VideoHero } from './content-types/video-hero';
import { ImageWithText } from './content-types/image-with-text';
import { PromoGrid } from './content-types/promo-grid';
import { TwoColumnTextAndMediaEmbed } from './content-types/two-column-text-and-media-embed';
import { TwoColumnTextAndMediaImageSlider } from './content-types/two-column-text-and-media-image-slider';
import { TwoColumnTextAndMediaImage } from './content-types/two-column-text-and-media-image';
import { TwoColumnTextAndMedia } from './content-types/two-column-text-and-media';
import { RichText } from './content-types/rich-text';
import { ProductSlider } from './content-types/product-slider';
import { MultiColumn } from './content-types/multi-column';
import { GenericImageHero } from './content-types/generic-image-hero';
import { Homepage } from './content-types/homepage';
import { ExtendedRichText } from './content-types/extended-rich-text';
import { ShoppingForLink } from './content-types/shopping-for-link';
import { ShoppingForOption } from './content-types/shopping-for-option';
import { ShoppingFor } from './content-types/shopping-for';
import { PromoBanner } from './content-types/promo-banner';
import { MultiColumnTile } from './content-types/multi-column-tile';
import { FeaturedCategories } from './content-types/featured-categories';
import { EmbeddedLink } from './content-types/embedded-link';
import { CartOffers } from './content-types/cart-offers';
import { ProductListing } from './content-types/product-listing';
import { HeadingTag } from './content-types/heading-tag';
import { QuarterSelect } from './content-types/quarterSelect';
import { ContributorPage } from './content-types/contributor-page';
import { ImageEmbed } from './content-types/image-embed';
import { CustomSliderSlide } from './content-types/custom-slider-slide';
import { CustomSlider } from './content-types/custom-slider';
import { CategoryTile } from './content-types/category-tile';
import { FeaturedCategorySlider } from './content-types/featured-category-slider';
import { ButtonEmbed } from './content-types/button-embed';
import { CategoryGrid } from './content-types/category-grid';
import { AddItemsBundle } from './content-types/add-items-bundle';
import { BundledProductItem } from './content-types/bundled-product-item';
import { CategoryPage } from './content-types/category-page';
import { AccordionPanel } from './content-types/accordion-panel';
import { FaqAccordion } from './content-types/faq-accordion';
import { AudioPlayer } from './content-types/audio-player';
import { AudioTrack } from './content-types/audio-track';
import { Product } from './content-types/product';
import { Quote } from './content-types/quote';
import { Form } from './content-types/form';
import { ContentEmbed } from './content-types/content-embed';
import { VideoEmbed } from './content-types/video-embed';
import { ArticleDetailPage } from './content-types/articleDetailPage';
import { ArticleLandingPage } from './content-types/articleLandingPage';
import { ArticleTopicPage } from './content-types/articleTopicPage';
import { Download } from './content-types/download';
import { ArticleAuthorInformation } from './content-types/articleAuthorInformation';
import { EventDetailPage } from './content-types/event-detail-page';
import { EventFamilyPage } from './content-types/event-family-page';
import { EventPriceTile } from './content-types/event-price-tile';
import { RecommendedResource } from './content-types/recommendedResource';
import { Redirect } from './content-types/redirect';
import { AuthorizedDealer } from './content-types/authorized-dealer';
import { AuthorizedDealersPage } from './content-types/authorizedDealersPage';
import { HeaderNavImage } from './content-types/header-nav-image';
import { HeaderNavLinkImageGroup } from './content-types/header-nav-link-image-group';
import { HeaderNavLinkList } from './content-types/header-nav-link-list';
import { HeaderNavLink } from './content-types/header-nav-link';
import { Header } from './content-types/header';
import { MainNavigation } from './content-types/main-navigation';
import { TopBanner } from './content-types/top-banner';
import { FooterColumnLinksList } from './content-types/footer-column-links-list';
import { FooterColumnsList } from './content-types/footer-columns-list';
import { Footer } from './content-types/footer';

export interface ContentTypes {
  'image-hero': ImageHero;
  'landing-page': LandingPage;
  'video-hero': VideoHero;
  'image-with-text': ImageWithText;
  'promo-grid': PromoGrid;
  'two-column-text-and-media-embed': TwoColumnTextAndMediaEmbed;
  'two-column-text-and-media-image-slider': TwoColumnTextAndMediaImageSlider;
  'two-column-text-and-media-image': TwoColumnTextAndMediaImage;
  'two-column-text-and-media': TwoColumnTextAndMedia;
  'rich-text': RichText;
  'product-slider': ProductSlider;
  'multi-column': MultiColumn;
  'generic-image-hero': GenericImageHero;
  homepage: Homepage;
  'extended-rich-text': ExtendedRichText;
  'shopping-for-link': ShoppingForLink;
  'shopping-for-option': ShoppingForOption;
  'shopping-for': ShoppingFor;
  'promo-banner': PromoBanner;
  'multi-column-tile': MultiColumnTile;
  'featured-categories': FeaturedCategories;
  'embedded-link': EmbeddedLink;
  'cart-offers': CartOffers;
  'product-listing': ProductListing;
  'heading-tag': HeadingTag;
  quarterSelect: QuarterSelect;
  'contributor-page': ContributorPage;
  'image-embed': ImageEmbed;
  'custom-slider-slide': CustomSliderSlide;
  'custom-slider': CustomSlider;
  'category-tile': CategoryTile;
  'featured-category-slider': FeaturedCategorySlider;
  'button-embed': ButtonEmbed;
  'category-grid': CategoryGrid;
  'add-items-bundle': AddItemsBundle;
  'bundled-product-item': BundledProductItem;
  'category-page': CategoryPage;
  'accordion-panel': AccordionPanel;
  'faq-accordion': FaqAccordion;
  'audio-player': AudioPlayer;
  'audio-track': AudioTrack;
  product: Product;
  quote: Quote;
  form: Form;
  'content-embed': ContentEmbed;
  'video-embed': VideoEmbed;
  articleDetailPage: ArticleDetailPage;
  articleLandingPage: ArticleLandingPage;
  articleTopicPage: ArticleTopicPage;
  download: Download;
  articleAuthorInformation: ArticleAuthorInformation;
  'event-detail-page': EventDetailPage;
  'event-family-page': EventFamilyPage;
  'event-price-tile': EventPriceTile;
  recommendedResource: RecommendedResource;
  redirect: Redirect;
  'authorized-dealer': AuthorizedDealer;
  authorizedDealersPage: AuthorizedDealersPage;
  'header-nav-image': HeaderNavImage;
  'header-nav-link-image-group': HeaderNavLinkImageGroup;
  'header-nav-link-list': HeaderNavLinkList;
  'header-nav-link': HeaderNavLink;
  header: Header;
  'main-navigation': MainNavigation;
  'top-banner': TopBanner;
  'footer-column-links-list': FooterColumnLinksList;
  'footer-columns-list': FooterColumnsList;
  footer: Footer;
}

export type AllContentTypes =
  | ImageHero
  | LandingPage
  | VideoHero
  | ImageWithText
  | PromoGrid
  | TwoColumnTextAndMediaEmbed
  | TwoColumnTextAndMediaImageSlider
  | TwoColumnTextAndMediaImage
  | TwoColumnTextAndMedia
  | RichText
  | ProductSlider
  | MultiColumn
  | GenericImageHero
  | Homepage
  | ExtendedRichText
  | ShoppingForLink
  | ShoppingForOption
  | ShoppingFor
  | PromoBanner
  | MultiColumnTile
  | FeaturedCategories
  | EmbeddedLink
  | CartOffers
  | ProductListing
  | HeadingTag
  | QuarterSelect
  | ContributorPage
  | ImageEmbed
  | CustomSliderSlide
  | CustomSlider
  | CategoryTile
  | FeaturedCategorySlider
  | ButtonEmbed
  | CategoryGrid
  | AddItemsBundle
  | BundledProductItem
  | CategoryPage
  | AccordionPanel
  | FaqAccordion
  | AudioPlayer
  | AudioTrack
  | Product
  | Quote
  | Form
  | ContentEmbed
  | VideoEmbed
  | ArticleDetailPage
  | ArticleLandingPage
  | ArticleTopicPage
  | Download
  | ArticleAuthorInformation
  | EventDetailPage
  | EventFamilyPage
  | EventPriceTile
  | RecommendedResource
  | Redirect
  | AuthorizedDealer
  | AuthorizedDealersPage
  | HeaderNavImage
  | HeaderNavLinkImageGroup
  | HeaderNavLinkList
  | HeaderNavLink
  | Header
  | MainNavigation
  | TopBanner
  | FooterColumnLinksList
  | FooterColumnsList
  | Footer;

export interface Schema {
  contentTypes: ContentTypes;
}
