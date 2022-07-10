import NextLink from 'next/link';
import { Text } from 'components/Text';
import { LinkProps } from './Link.interface';

export const Link = ({ children, href }: LinkProps) => (
  <NextLink href={href}>
    <a className="custom-link">
      <Text as="span" fontWeight="semibold">
        {children}
      </Text>
    </a>
  </NextLink>
);
