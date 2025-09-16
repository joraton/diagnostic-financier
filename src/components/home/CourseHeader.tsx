import { TrendingUp, Clock, BookOpen, Award } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-violet-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-2xl mb-8 sm:mb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        {/* Icône du cours */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 flex-shrink-0">
          <TrendingUp className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
        </div>
        
        {/* Contenu principal */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Diagnostic Financier
          </h1>
          <p className="text-blue-100 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
            {"Maîtrisez l'analyse financière d'entreprise : ratios, tableaux de flux, diagnostic de performance et recommandations stratégiques."}
          </p>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2">
              <Award className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">Expert</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">4h 15min</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2">
              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">3 sections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}