import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from "./theme";
import Logo from './app/components/studio/StudioLogo';
import Navbar from './app/components/studio/StudioNavbar';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const basePath = process.env.SANITY_STUDIO_BASEPATH!
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

export default defineConfig({
  name: "default",
  basePath,
  title: "Rasheed_Sanity_Studio",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: Logo,
      navbar: Navbar,
    },
  },

  theme: myTheme,
});
