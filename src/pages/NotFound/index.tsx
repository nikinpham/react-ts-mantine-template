import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Path } from '@/config/path';
import { SmartHome } from 'tabler-icons-react';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <div className="not-found__title">404</div>
      <Button<typeof Link> component={Link} size="md" to={Path.DASHBOARD} leftIcon={<SmartHome />}>
        {t('common.home_page')}
      </Button>
    </div>
  );
};

export default NotFound;
