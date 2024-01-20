import { Logout as LogoutIcon } from '@styled-icons/material/Logout';
import { Person as PersonIcon } from '@styled-icons/material/Person';
import { Workspaces as WorkspacesIcon } from '@styled-icons/material-outlined/Workspaces';
import React, { useCallback, useState } from 'react';

import { logoutUser } from '@staticcms/core/actions/auth';
import useTranslate from '@staticcms/core/lib/hooks/useTranslate';
import classNames from '@staticcms/core/lib/util/classNames.util';
import { generateClassNames } from '@staticcms/core/lib/util/theming.util';
import { selectUser } from '@staticcms/core/reducers/selectors/auth';
import { useAppDispatch, useAppSelector } from '@staticcms/core/store/hooks';
import Menu from '../common/menu/Menu';
import MenuGroup from '../common/menu/MenuGroup';
import MenuItemButton from '../common/menu/MenuItemButton';
import ThemeSelectorDialog from '../theme/components/ThemeSelectorDialog';

import type { FC } from 'react';

import './SettingsDropdown.css';

export const classes = generateClassNames('SettingsDropdown', [
  'root',
  'in-editor',
  'avatar-image',
  'avatar-icon',
  'sr-label',
]);

interface AvatarImageProps {
  imageUrl: string | undefined;
}

const AvatarImage: FC<AvatarImageProps> = ({ imageUrl }) => {
  return imageUrl ? (
    <img className={classes['avatar-image']} src={imageUrl} />
  ) : (
    <PersonIcon className={classes['avatar-icon']} />
  );
};

export interface SettingsDropdownProps {
  inEditor: boolean;
}

const SettingsDropdown: FC<SettingsDropdownProps> = ({ inEditor }) => {
  const t = useTranslate();

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [themeDialogOpen, setThemeDialogOpen] = useState(false);


  const handleCloseThemeDialog = useCallback(() => {
    setThemeDialogOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(logoutUser());
    window.location.replace("/")
  }, [dispatch]);

  const handleHome = useCallback(() => {
   window.location.replace("/")
  }, [dispatch]);

  return (
    <>
      <Menu
        label={
          <>
            <span className={classes['sr-label']}>Open user menu</span>
            <AvatarImage imageUrl={user?.avatar_url} />
          </>
        }
        color="info"
        variant="contained"
        rounded={!user?.avatar_url || 'no-padding'}
        hideDropdownIcon
        rootClassName={classNames(classes.root, inEditor && classes['in-editor'])}
        aria-label="account options dropdown"
      >
        <MenuGroup>
        <MenuItemButton key="all-projects" onClick={handleHome} startIcon={WorkspacesIcon}>
            {t('ui.settingsDropdown.allProjects')}
          </MenuItemButton>
          <MenuItemButton key="log-out" onClick={handleLogout} startIcon={LogoutIcon}>
            {t('ui.settingsDropdown.logOut')}
          </MenuItemButton>
        </MenuGroup>
      </Menu>
      <ThemeSelectorDialog open={themeDialogOpen} onClose={handleCloseThemeDialog} />
    </>
  );
};

export default SettingsDropdown;
