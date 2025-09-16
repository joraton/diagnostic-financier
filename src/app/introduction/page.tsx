import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, BookOpen, Target, Lightbulb } from 'lucide-react';

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Introduction au Diagnostic Financier</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-blue-600" />
              Qu&apos;est-ce que le diagnostic financier ?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Le diagnostic financier est une analyse approfondie de la situation financière d&apos;une entreprise. 
              Il permet d&apos;évaluer sa performance, sa solvabilité, sa rentabilité et ses perspectives d&apos;évolution.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Définition clé
              </h3>
              <p className="text-blue-700">
                Le diagnostic financier consiste à analyser les documents comptables et financiers 
                pour porter un jugement sur la santé financière de l&apos;entreprise et formuler des recommandations.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Les objectifs du diagnostic</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 mb-3">Objectifs internes</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Évaluer la performance de l&apos;entreprise</li>
                  <li>• Identifier les forces et faiblesses</li>
                  <li>• Orienter les décisions stratégiques</li>
                  <li>• Optimiser la gestion financière</li>
                  <li>• Contrôler la rentabilité par activité</li>
                  <li>• Anticiper les difficultés financières</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-purple-800 mb-3">Objectifs externes</h3>
                <ul className="text-purple-700 space-y-2">
                  <li>• Rassurer les investisseurs</li>
                  <li>• Faciliter l&apos;accès au financement</li>
                  <li>• Évaluer le risque de crédit</li>
                  <li>• Préparer une cession ou acquisition</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Les documents de base</h2>
            
            <div className="bg-amber-50 rounded-lg p-4 sm:p-6 mb-6">
              <h3 className="font-semibold text-amber-800 mb-3">Documents comptables essentiels</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-amber-700">
                <div>
                  <h4 className="font-medium mb-2">Bilan</h4>
                  <p className="text-sm">Situation patrimoniale à un instant T</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Compte de résultat</h4>
                  <p className="text-sm">Performance sur une période</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Annexe</h4>
                  <p className="text-sm">Informations complémentaires</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <h3 className="font-semibold text-gray-800 mb-3">Méthode mnémotechnique : BCAR</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-gray-700">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-blue-600">B</span>
                  </div>
                  <p className="font-medium">Bilan</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-green-600">C</span>
                  </div>
                  <p className="font-medium">Compte de résultat</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-purple-600">A</span>
                  </div>
                  <p className="font-medium">Annexe</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-red-600">R</span>
                  </div>
                  <p className="font-medium">Ratios</p>
                </div>
              </div>
            </div>
            
            {/* Méthodes d'analyse */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Les méthodes d&apos;analyse</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-800 mb-3">Analyse statique</h3>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li>• Analyse du bilan à un instant T</li>
                    <li>• Ratios de structure financière</li>
                    <li>• Équilibres financiers</li>
                    <li>• Solvabilité et liquidité</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-800 mb-3">Analyse dynamique</h3>
                  <ul className="text-purple-700 space-y-2 text-sm">
                    <li>• Évolution sur plusieurs exercices</li>
                    <li>• Tableaux de flux de trésorerie</li>
                    <li>• Analyse des variations</li>
                    <li>• Tendances et projections</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="font-semibold text-orange-800 mb-3">Analyse comparative</h3>
                  <ul className="text-orange-700 space-y-2 text-sm">
                    <li>• Benchmarking sectoriel</li>
                    <li>• Comparaison concurrentielle</li>
                    <li>• Normes professionnelles</li>
                    <li>• Positionnement relatif</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ratios fondamentaux */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Les ratios fondamentaux</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Ratios de structure</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-medium text-gray-800">Ratio d&apos;autonomie financière</p>
                      <p className="text-sm text-gray-600">Capitaux propres / Total bilan</p>
                      <p className="text-xs text-gray-500">Norme : &gt; 30%</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-medium text-gray-800">Ratio d&apos;endettement</p>
                      <p className="text-sm text-gray-600">Dettes financières / Capitaux propres</p>
                      <p className="text-xs text-gray-500">Norme : &lt; 100%</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-medium text-gray-800">Couverture des immobilisations</p>
                      <p className="text-sm text-gray-600">Capitaux permanents / Immobilisations</p>
                      <p className="text-xs text-gray-500">Norme : &gt; 100%</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Ratios de liquidité</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-500 pl-4">
                      <p className="font-medium text-gray-800">Liquidité générale</p>
                      <p className="text-sm text-gray-600">Actif circulant / Dettes à court terme</p>
                      <p className="text-xs text-gray-500">Norme : &gt; 100%</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="font-medium text-gray-800">Liquidité réduite</p>
                      <p className="text-sm text-gray-600">(Créances + Disponibilités) / DCT</p>
                      <p className="text-xs text-gray-500">Norme : &gt; 80%</p>
                    </div>
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <p className="font-medium text-gray-800">Liquidité immédiate</p>
                      <p className="text-sm text-gray-600">Disponibilités / DCT</p>
                      <p className="text-xs text-gray-500">Norme : &gt; 20%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outils et documents */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Outils et documents d&apos;analyse</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 rounded-lg p-6">
                  <h3 className="font-semibold text-indigo-800 mb-3">Documents comptables</h3>
                  <ul className="text-indigo-700 space-y-2 text-sm">
                    <li>• Bilan comptable et fonctionnel</li>
                    <li>• Compte de résultat</li>
                    <li>• Tableau de financement</li>
                    <li>• Annexe comptable</li>
                    <li>• Rapport de gestion</li>
                    <li>• Tableau des flux de trésorerie</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="font-semibold text-teal-800 mb-3">Outils d&apos;analyse</h3>
                  <ul className="text-teal-700 space-y-2 text-sm">
                    <li>• Soldes intermédiaires de gestion</li>
                    <li>• Capacité d&apos;autofinancement</li>
                    <li>• Ratios financiers</li>
                    <li>• Analyse des écarts</li>
                    <li>• Tableaux de bord</li>
                    <li>• Scoring et notation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Démarche méthodologique */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Démarche méthodologique</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 sm:p-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                    <h4 className="font-semibold text-gray-800 mb-2">Collecte</h4>
                    <p className="text-sm text-gray-600">Rassembler les documents comptables et financiers</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                    <h4 className="font-semibold text-gray-800 mb-2">Retraitement</h4>
                    <p className="text-sm text-gray-600">Ajuster et homogénéiser les données</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                    <h4 className="font-semibold text-gray-800 mb-2">Calcul</h4>
                    <p className="text-sm text-gray-600">Calculer les ratios et indicateurs</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">4</div>
                    <h4 className="font-semibold text-gray-800 mb-2">Interprétation</h4>
                    <p className="text-sm text-gray-600">Analyser et formuler des recommandations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-end pt-8 border-t border-gray-200">
            <Link
              href="/section-1"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Section I - Analyse de la structure
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}