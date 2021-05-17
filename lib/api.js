import { groq } from 'next-sanity';

export const homePageQuery = groq`
*[_type == "homePage"] {
   heroHeading,
  "featured": *[_type == "print" && isFeatured == true] {
  		title,
  		"slug": slug.current,
			"colorizedImage": coloriz
		}
}`;

export const printQuery = groq`
	*[_type == "print" && slug.current == $slug][0]
`;

export const printPathQuery = groq`
	*[_type == "print" && defined(slug.current)][].slug.current
`;
