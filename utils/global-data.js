export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'ESSALMI ELMUSTAPHA';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'COURS DE SOUTIEN EN INFORMATIQUE';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'INSCRIPTION EN BAS';

  return {
    name,
    blogTitle,
    footerText,
  };
};
