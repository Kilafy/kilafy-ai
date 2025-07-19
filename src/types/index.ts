export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  textColor: string;
  learningObjectives: string[];
  modalityDuration: {
    modality: string;
    duration: string;
    targetAudience: string;
  };
  levels: CourseLevel[];
}

export interface CourseLevel {
  id: string;
  title: string;
  duration: string;
  sessions: Session[];
}

export interface Session {
  id: string;
  title: string;
  description: string;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
}

export interface ContactInfo {
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  phone: string;
  address: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}
