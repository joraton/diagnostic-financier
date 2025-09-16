import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  btnBg: string;
  btnHoverBg: string;
}

export default function SectionBlock({ 
  title, 
  description, 
  href, 
  icon: Icon, 
  color, 
  bgColor, 
  btnBg,
  btnHoverBg
}: SectionBlockProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          {/* Icône colorée */}
          <div className={`${bgColor} rounded-full p-2 sm:p-3 flex-shrink-0`}>
            <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />
          </div>
          
          {/* Contenu */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 leading-tight">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
        
        {/* Bouton */}
        <Link
          href={href}
          className={`${btnBg} ${btnHoverBg} text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 flex-shrink-0 text-center text-sm sm:text-base`}
        >
          Commencer
        </Link>
      </div>
    </div>
  );
}