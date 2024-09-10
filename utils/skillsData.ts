import { Skill } from "./types";

// programing language
import PythonIcon from "../assets/skills/ProgramingLanguage/icons8-python.svg";
import JSIcon from "../assets/skills/ProgramingLanguage/js.svg";
import TSIcon from "../assets/skills/ProgramingLanguage/typescript.svg";
import CppIcon from "../assets/skills/ProgramingLanguage/icons-c++.svg";

// frontend icons
import HtmlIcon from "../assets/skills/frontend/html.svg";
import CssIcon from "../assets/skills/frontend/icons8-css.svg";
import ReactIcon from "../assets/skills/frontend/react-js.svg";
import NextIcon from "../assets/skills/frontend/nextjs.svg";
import ReduxIcon from "../assets/skills/frontend/redux.svg";
import ReactNativeIcon from "../assets/skills/frontend/react-native-64.png";
import TailwindIcon from "../assets/skills/frontend/tailwind-css.svg";
import NodeIcon from "../assets/skills/frontend/nodeIcon.svg"

// AI Ds icons
import HuggingfaceIcon from "../assets/skills/AI-DS/hf-logo.svg";
import TensorflowIcon from "../assets/skills/AI-DS/tensorflow.svg";
import PytorchIcon from "../assets/skills/AI-DS/icons8-pytorch.svg";
import PandasIcon from "../assets/skills/AI-DS/pandas.svg";
import NumpyIcon from "../assets/skills/AI-DS/numpy.svg";
import Chain from "../assets/skills/AI-DS/chain-48.png";

// backend icons
import DjangoIcon from "../assets/skills/backend/django.svg";
import FirebaseIcon from "../assets/skills/backend/firebase.svg";
import FlaskIcon from "../assets/skills/backend/flask.svg";

export const PrograminLanguagesData = [
  {
    icon: PythonIcon,
    name: "Python",
  },
  {
    icon: JSIcon,
    name: "Javascript",
  },
  {
    icon: TSIcon,
    name: "Typescript",
  },
  {
    icon: CppIcon,
    name: "C++",
  },
] as Skill[];

export const FrontendData = [
  {
    icon: HtmlIcon,
    name: "HTML",
  },
  {
    icon: CssIcon,
    name: "CSS",
  },
  {
    icon: ReactIcon,
    name: "React Js",
  },
  {
    icon: NextIcon,
    name: "Next.js",
  },
  {
    icon: ReduxIcon,
    name: "Redux",
  },
  {
    icon: ReactNativeIcon,
    name: "React Native",
  },
  {
    icon: TailwindIcon,
    name: "Tailwind CSS",
  },
  {
    icon: NodeIcon,
    name: "Node Js"
  },
] as Skill[];

export const AI_DSData = [
  {
    icon: HuggingfaceIcon,
    name: "Huggingface",
  },
  {
    icon: TensorflowIcon,
    name: "Tensorflow",
  },
  {
    icon: PytorchIcon,
    name: "Pytorch",
  },
  {
    icon: PandasIcon,
    name: "Pandas",
  },
  {
    icon: NumpyIcon,
    name: "Numpy",
  },
  {
    icon: Chain,
    name: "Langchain",
  },
] as Skill[];

export const BackendData = [
  {
    icon: DjangoIcon,
    name: "Django",
  },
  {
    icon: FlaskIcon,
    name: "Flask",
  },
  {
    icon: FirebaseIcon,
    name: "Firebase",
  },
] as Skill[];

export const COMBINED_DATA = [
  ...PrograminLanguagesData,
  ...FrontendData,
  ...AI_DSData,
  ...BackendData,
] as Skill[];
