import React from 'react';
import { PageContainer } from '../config/styles/common-styles';

import dynamic from 'next/dynamic'
import 'bootstrap/dist/css/bootstrap.min.css';

const AccidentViewer = dynamic(
  () => import('../components/accident-viewer/accident-viewer.component'),
  { ssr: false }
)

const ProfilePage = () => {
  return (
    <PageContainer>
      <AccidentViewer />
    </PageContainer>
  );
};

export default ProfilePage;