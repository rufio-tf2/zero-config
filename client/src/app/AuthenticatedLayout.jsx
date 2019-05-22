import { navigate } from '@reach/router';
import React, { Suspense } from 'react';

import {
  Box,
  GlobalNav,
  HistoryIcon,
  LoadingIndicator,
  MembersIcon,
  MoreMenuIcon,
  ReportsIcon,
  UploadIcon,
  useFunds,
  useSession,
} from '../common';

const AuthenticatedLayout = ({ children }) => {
  const { signOut } = useSession();
  const { activeFund } = useFunds();

  return (
    <>
      <GlobalNav title={activeFund.name}>
        <GlobalNav.IconLink href="/" icon={UploadIcon} label="Upload" />
        <GlobalNav.IconLink
          href="/members"
          icon={MembersIcon}
          label="Members"
        />
        <GlobalNav.IconLink
          href="/reports"
          icon={ReportsIcon}
          label="Reports"
        />
        <GlobalNav.IconLink
          href="/check-history"
          icon={HistoryIcon}
          label="Check History"
        />
        <GlobalNav.IconMenu icon={MoreMenuIcon} label="User Menu">
          <GlobalNav.IconMenu.Item onClick={() => navigate('/change-password')}>
            Change Password
          </GlobalNav.IconMenu.Item>
          <GlobalNav.IconMenu.Item onClick={signOut}>
            Sign Out
          </GlobalNav.IconMenu.Item>
        </GlobalNav.IconMenu>
      </GlobalNav>
      <Suspense
        fallback={
          <Box as="main" display="flex" justifyContent="center" my={10}>
            <LoadingIndicator />
          </Box>
        }
      >
        {children}
      </Suspense>
    </>
  );
};

export default AuthenticatedLayout;
