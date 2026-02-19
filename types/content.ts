// types/content.ts
export interface HomeContent {
  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonHref: string;
    video: string;
  };
  introduction: {
    pretitle: string;
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    image: string;
  };
  highlights: {
    title: string;
    description: string;
    stats: Array<{ label: string; value: string }>;
    image: string;
  };
  mission: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
  deliveryProcess: {
    title: string;
    subtitle: string;
    features: Array<{ title: string; description: string }>;
    image: string;
  };
  about: {
    title: string;
    description: string;
    description2: string;
    buttonText: string;
    buttonHref: string;
    image: string;
  };
  portfolio: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    image: string;
  };
  contactSection: {
    title: string;
    form: {
      placeholders: {
        name: string;
        email: string;
        phone: string;
        service: string;
        message: string;
      };
      services: string[];
      buttonText: string;
    };
    info: {
      title: string;
      description: string;
      addressTitle: string;
      address: string;
      email: string;
    };
  };
}