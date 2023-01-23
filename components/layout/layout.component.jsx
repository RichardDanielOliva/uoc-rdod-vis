import { PageContainer, PageContent } from "./layout.component.styles";

const DefaultLayout = ({ children }) => {
  return (<PageContainer>
    <PageContent>{children}</PageContent>
  </PageContainer>)
}
const Layout = ({ children }) => {
  return <DefaultLayout>{children}</DefaultLayout>
};

export default Layout;
