import { Target, Rocket, BarChart3, TrendingUp, Star, Brain, FileText } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    title: 'Introduction',
    description: 'Concepts de base et définitions du diagnostic financier',
    href: '/introduction',
    icon: Rocket,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    btnBg: 'bg-blue-600',
    btnHoverBg: 'hover:bg-blue-700'
  },
  {
    title: 'Section I - Analyse de la structure financière',
    description: 'Bilan fonctionnel, ratios de structure et équilibre financier',
    href: '/section-1',
    icon: BarChart3,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    btnBg: 'bg-green-600',
    btnHoverBg: 'hover:bg-green-700'
  },
  {
    title: 'Section II - Analyse de la performance',
    description: 'Compte de résultat, SIG, ratios de rentabilité et de gestion',
    href: '/section-2',
    icon: TrendingUp,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    btnBg: 'bg-amber-600',
    btnHoverBg: 'hover:bg-amber-700'
  },
  {
    title: 'Section III - Analyse dynamique',
    description: 'Tableaux de flux de trésorerie et analyse prospective',
    href: '/section-3',
    icon: Star,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    btnBg: 'bg-purple-600',
    btnHoverBg: 'hover:bg-purple-700'
  },
  {
    title: 'Quiz',
    description: 'Évaluation interactive de vos connaissances',
    href: '/quiz',
    icon: Brain,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    btnBg: 'bg-red-600',
    btnHoverBg: 'hover:bg-red-700'
  },
  {
    title: 'Cas pratiques',
    description: "Exercices d'application et méthodologie DSCG",
    href: '/cas-pratiques',
    icon: FileText,
    color: 'text-violet-600',
    bgColor: 'bg-violet-100',
    btnBg: 'bg-violet-600',
    btnHoverBg: 'hover:bg-violet-700'
  }
];

export default function CoursePlan() {
  return (
    <section className="mb-12">
      {/* En-tête de section */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Target className="h-8 w-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Plan du cours</h2>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {"Suivez un parcours structuré pour maîtriser le diagnostic financier d'entreprise"}
        </p>
      </div>
      
      {/* Blocs de sections */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.href}
            title={section.title}
            description={section.description}
            href={section.href}
            icon={section.icon}
            color={section.color}
            bgColor={section.bgColor}
            index={index}
            btnBg={section.btnBg}
            btnHoverBg={section.btnHoverBg}
          />
        ))}
      </div>
    </section>
  );
}