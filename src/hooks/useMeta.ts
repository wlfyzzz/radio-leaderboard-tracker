import { useEffect } from 'react';

interface MetaOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const useMeta = ({ title, description, image, url }: MetaOptions) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const updateMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateMetaNameTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (title) {
      updateMetaTag('og:title', title);
    }

    if (description) {
      updateMetaNameTag('description', description);
      updateMetaTag('og:description', description);
    }

    if (image) {
      updateMetaTag('og:image', image);
      updateMetaNameTag('twitter:image', image);
    }

    if (url) {
      updateMetaTag('og:url', url);
    }

    updateMetaTag('og:type', 'website');
    updateMetaNameTag('twitter:card', 'summary_large_image');
    updateMetaNameTag('twitter:site', '@wlfyzz_dev');
  }, [title, description, image, url]);
};