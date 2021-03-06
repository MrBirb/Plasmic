/** This file is auto-generated by Plasmic; please do not edit! */
import { useRouter } from "next/router";
import PlasmicLoader from "@plasmicapp/loader";

const componentsByPath = {
  
    "objective": {name: "Objective", projectId: "4PEQuNDw3uCdR3beWA2Ndi" },
  
    "page-2": {name: "ExamplePage", projectId: "4PEQuNDw3uCdR3beWA2Ndi" },
  
};

export default function PlasmicLoaderPage() {
  const router = useRouter();
  let { plasmicLoaderPage } = router.query;
  if (Array.isArray(plasmicLoaderPage)) {
    plasmicLoaderPage = plasmicLoaderPage.join('/');
  }
  const {name, projectId} = componentsByPath[plasmicLoaderPage];

  return <PlasmicLoader component={name} projectId={projectId} />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      
        { params: { plasmicLoaderPage: ["objective",] } },
      
        { params: { plasmicLoaderPage: ["page-2",] } },
      
    ],
    fallback: false,
  };
}
