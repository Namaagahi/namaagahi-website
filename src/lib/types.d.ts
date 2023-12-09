
interface LanguageProp {
    params: { lang: Locale }
}

interface Children {
  children: React.ReactNode
}

interface Header {
  header: {
    headerNavLinks: ({
        id: number;
        title: string;
        src: string;
        sublinks?: undefined;
    } | {
        id: number;
        title: string;
        src: string;
        sublinks: {
            id: number;
            title: string;
            src: string;
        }[];
    })[];
  }
}

interface CallActionCardProps {
  card: {
    id: number;
    iconName: string;
    color: string;
    size: string;
    title: string;
    src: string
  }
}

interface CallActionCard {
  id: number;
  iconName: string;
  color: string;
  size: string;
  title: string;
  src: string
}

interface TimeLineElementProps {
  title: string[]
  time: string
  color: string
  direction: string
}

interface JoinUsFormData  {
  firstName?:string
  lastName?:string
  idCode?: string
  phone?: string
  email?: string
  introMethod?: string
  description?: string
  radioOption?: string
}

interface MenuIconSize {
  size: number
}

interface SliderImagesProp {
  id?: number
  title?: string
  url?: string
}
