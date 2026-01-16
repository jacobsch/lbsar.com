import { forwardRef } from 'react';

import clsxm from '@/lib/clsxm';
import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/ui/links/UnstyledLink';

type UnderlineLinkProps = UnstyledLinkProps & {
  underlineMobileOnly?: boolean;
};

const BASE_CLASSES = 'custom-link inline-flex items-center font-medium';

const FOCUS_CLASSES =
  'focus-visible:ring-primary-500 focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-offset-2';

const UNDERLINE_CLASSES =
  'animated-underline border-b border-[#1b437e] hover:border-[#1b437e00]';

const DISABLE_UNDERLINE_DESKTOP = [
  'min-[1450px]:[background-image:none!important]',
  'min-[1450px]:[background-size:0_0!important]',
  'min-[1450px]:border-b-0',
];

const UnderlineLink = forwardRef<HTMLAnchorElement, UnderlineLinkProps>(
  ({ children, className, underlineMobileOnly = false, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          BASE_CLASSES,
          FOCUS_CLASSES,
          UNDERLINE_CLASSES,
          underlineMobileOnly && DISABLE_UNDERLINE_DESKTOP,
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

UnderlineLink.displayName = 'UnderlineLink';

export default UnderlineLink;
