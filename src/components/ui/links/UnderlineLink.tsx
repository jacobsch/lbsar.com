import { forwardRef } from 'react';

import clsxm from '@/lib/clsxm';
import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/ui/links/UnstyledLink';

type UnderlineLinkProps = UnstyledLinkProps & {
  underlineMobileOnly?: boolean;
};

const UnderlineLink = forwardRef<HTMLAnchorElement, UnderlineLinkProps>(
  ({ children, className, underlineMobileOnly = false, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'custom-link inline-flex items-center font-medium',
          'focus-visible:ring-primary-500 focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-offset-2',

          // ✅ Underline behavior:
          underlineMobileOnly
            ? [
                // underline ON mobile
                'animated-underline border-b border-blue-700 hover:border-black/0',
                // underline OFF on lg+
                'lg:[background-image:none!important] lg:[background-size:0_0!important]',
                'lg:!border-b-0',
              ]
            : [
                // underline everywhere (original behavior)
                'animated-underline border-b border-blue-700 hover:border-black/0',
              ],

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
