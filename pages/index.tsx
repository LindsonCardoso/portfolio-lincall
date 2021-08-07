
import { Home } from '../src/components/Home'
import { LayoutPage } from '../src/components/Layout/LayoutPage'
export default function Index() {
  return (
    <LayoutPage title="Lindson Cardoso - Full Stack Developer">
      <Home />
    </LayoutPage>
  )
}

/*
export function getStaticProps() {
  const projects = projectsList;
  return {
    props: {
      projects
    }
  };
}*/