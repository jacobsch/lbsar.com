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

          underlineMobileOnly
            ? [
                // underline ON below desktop breakpoint
                'animated-underline border-b border-blue-700 hover:border-black/0',

                // underline OFF at desktop breakpoint (>=1449px)
                'min-[1449px]:[background-image:none!important] min-[1449px]:[background-size:0_0!important]',
                'min-[1449px]:!border-b-0',
              ]
            : [
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
