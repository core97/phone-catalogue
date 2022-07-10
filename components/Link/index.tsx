import NextLink from 'next/link';
import { Text } from 'components/Text';
import { Props } from './Link.interface';

export const Link = ({ children, href }: Props) => (
  <NextLink href={href}>
    <a className="custom-link">
      <Text as="span" fontWeight="semibold">
        {children}
      </Text>
    </a>
  </NextLink>
);
