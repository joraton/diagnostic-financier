'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Target, CheckCircle, AlertTriangle, Star, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface GrilleAnalyse {
  id: number;
  title: string;
  description: string;
  etapes: string[];
  points: number;
  duree: string;
  conseils: string[];
}

const grillesAnalyse: GrilleAnalyse[] = [
  {
    id: 1,
    title: "Analyse de la structure financière",
    description: "Grille d'analyse pour évaluer l'équilibre financier d'une entreprise",
    etapes: [
      "1. Calculer le Fonds de Roulement (FR = Ressources stables - Emplois stables)",
      "2. Calculer le BFR (BFR = Actif circulant d'exploitation - Passif circulant d'exploitation)",
      "3. Calculer la Trésorerie Nette (TN = FR - BFR)",
      "4. Analyser les ratios de structure (autonomie financière, endettement, couverture)",
      "5. Interpréter l'équilibre financier et identifier les risques"
    ],
    points: 8,
    duree: "25-30 min",
    conseils: [
      "Toujours vérifier la cohérence : TN = Disponibilités - Concours bancaires",
      "Interpréter les résultats : FR > 0 et BFR maîtrisé = situation saine",
      "Comparer aux normes sectorielles quand c'est possible"
    ]
  },
  {
    id: 2,
    title: "Analyse de la performance",
    description: "Grille pour évaluer la rentabilité et l'efficacité opérationnelle",
    etapes: [
      "1. Construire la cascade des SIG (Production → VA → EBE → Résultat)",
      "2. Calculer les ratios de rentabilité (ROA, ROE, marges)",
      "3. Analyser les ratios de gestion (rotation des actifs, délais)",
      "4. Calculer la CAF et analyser sa composition",
      "5. Évaluer l'effet de levier financier"
    ],
    points: 10,
    duree: "35-40 min",
    conseils: [
      "Mémoriser la cascade des SIG : Production → VA → EBE → RE → RCAI → RN",
      "Toujours calculer les marges en % du CA pour faciliter l'interprétation",
      "Analyser l'évolution sur plusieurs années si les données sont disponibles"
    ]
  },
  {
    id: 3,
    title: "Analyse dynamique et prospective",
    description: "Grille pour l'analyse des flux de trésorerie et la capacité de remboursement",
    etapes: [
      "1. Calculer la CAF par les deux méthodes (additive et soustractive)",
      "2. Construire le tableau de flux de trésorerie (exploitation, investissement, financement)",
      "3. Analyser la capacité de remboursement (Dettes financières / CAF)",
      "4. Évaluer les ratios prospectifs (couverture des investissements, autofinancement)",
      "5. Identifier les signaux d'alerte et les points de vigilance"
    ],
    points: 8,
    duree: "30-35 min",
    conseils: [
      "CAF = point de départ de l'analyse dynamique, vérifier sa qualité",
      "Flux d'exploitation négatifs = signal d'alerte majeur",
      "Capacité de remboursement > 4 ans = situation préoccupante"
    ]
  }
];

const conseilsExamen = [
  {
    categorie: "Gestion du temps",
    conseils: [
      "Lire entièrement le sujet avant de commencer (5 min)",
      "Répartir le temps selon le barème : 1 point = 2-3 minutes",
      "Garder 10 minutes en fin d'épreuve pour la relecture",
      "Ne pas s'attarder sur une question difficile, y revenir plus tard"
    ]
  },
  {
    categorie: "Méthodologie de calcul",
    conseils: [
      "Toujours présenter les formules avant les calculs",
      "Détailler les calculs intermédiaires pour obtenir les points de méthode",
      "Vérifier la cohérence des résultats (ordres de grandeur)",
      "Utiliser les unités appropriées (€, %, jours) et les préciser"
    ]
  },
  {
    categorie: "Analyse et interprétation",
    conseils: [
      "Ne pas se contenter de calculer : toujours interpréter les résultats",
      "Utiliser le vocabulaire technique approprié",
      "Comparer aux normes sectorielles quand c'est pertinent",
      "Proposer des recommandations concrètes et réalisables"
    ]
  },
  {
    categorie: "Présentation",
    conseils: [
      "Structurer clairement la copie avec des titres et sous-titres",
      "Utiliser des tableaux pour présenter les calculs complexes",
      "Soigner l'écriture et éviter les ratures excessives",
      "Numéroter les questions et respecter l'ordre du sujet"
    ]
  }
];

const erreursFrequentes = [
  {
    erreur: "Confusion entre FR et BFR",
    consequence: "Erreurs de calcul en cascade",
    prevention: "Mémoriser : FR = financement, BFR = besoin d'exploitation"
  },
  {
    erreur: "Oubli des retraitements du bilan",
    consequence: "Calculs faussés",
    prevention: "Toujours vérifier les retraitements demandés (crédit-bail, etc.)"
  },
  {
    erreur: "Calcul de ratios sans interprétation",
    consequence: "Perte de points d'analyse",
    prevention: "Systématiquement commenter chaque ratio calculé"
  },
  {
    erreur: "Confusion entre CAF et flux de trésorerie",
    consequence: "Erreur conceptuelle grave",
    prevention: "CAF = potentiel, Flux = réalisation effective"
  },
  {
    erreur: "Négligence des unités et arrondis",
    consequence: "Perte de points de forme",
    prevention: "Toujours préciser les unités et arrondir de façon cohérente"
  }
];

export default function MethodologieDSCG() {
  const [selectedGrille, setSelectedGrille] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'grilles' | 'conseils' | 'erreurs'>('grilles');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-6xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Méthodologie DSCG</h1>
              <p className="text-gray-600 mt-1">Grilles d'analyse et conseils pour l'examen</p>
            </div>
          </div>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-1">Objectif DSCG</h3>
                <p className="text-amber-700 text-sm">
                  Maîtriser les techniques de diagnostic financier et savoir les appliquer dans un contexte d'examen.
                  Cette section vous donne les clés méthodologiques pour réussir l'épreuve.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Onglets */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'grilles', label: 'Grilles d\'analyse', icon: FileText },
                { id: 'conseils', label: 'Conseils d\'examen', icon: Star },
                { id: 'erreurs', label: 'Erreurs à éviter', icon: AlertTriangle }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as any)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Grilles d'analyse */}
            {activeTab === 'grilles' && (
              <div className="space-y-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Grilles d'analyse méthodiques</h2>
                  <p className="text-gray-600">Suivez ces grilles étape par étape pour structurer votre analyse financière.</p>
                </div>
                
                {grillesAnalyse.map((grille, index) => (
                  <motion.div
                    key={grille.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{grille.title}</h3>
                          <p className="text-gray-600 mb-4">{grille.description}</p>
                          
                          <div className="flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Target className="h-4 w-4" />
                              <span>{grille.points} points</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{grille.duree}</span>
                            </div>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => setSelectedGrille(selectedGrille === grille.id ? null : grille.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          {selectedGrille === grille.id ? 'Masquer' : 'Voir'} la grille
                        </button>
                      </div>
                    </div>
                    
                    {selectedGrille === grille.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="p-6 border-t border-gray-200"
                      >
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-3">Étapes à suivre :</h4>
                          <div className="space-y-3">
                            {grille.etapes.map((etape, etapeIndex) => (
                              <div key={etapeIndex} className="flex items-start gap-3">
                                <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mt-0.5">
                                  {etapeIndex + 1}
                                </div>
                                <p className="text-gray-700 flex-1">{etape}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-green-50 border-l-4 border-green-400 p-4">
                          <h5 className="font-semibold text-green-800 mb-2">Conseils pratiques :</h5>
                          <ul className="space-y-1">
                            {grille.conseils.map((conseil, conseilIndex) => (
                              <li key={conseilIndex} className="text-green-700 text-sm flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                {conseil}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {/* Conseils d'examen */}
            {activeTab === 'conseils' && (
              <div className="space-y-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Conseils pour réussir l'examen</h2>
                  <p className="text-gray-600">Stratégies éprouvées pour optimiser votre performance le jour J.</p>
                </div>
                
                {conseilsExamen.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-blue-50 border border-blue-200 rounded-lg p-6"
                  >
                    <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                      <Star className="h-5 w-5" />
                      {section.categorie}
                    </h3>
                    <ul className="space-y-3">
                      {section.conseils.map((conseil, conseilIndex) => (
                        <li key={conseilIndex} className="text-blue-800 flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{conseil}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Erreurs à éviter */}
            {activeTab === 'erreurs' && (
              <div className="space-y-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Erreurs fréquentes à éviter</h2>
                  <p className="text-gray-600">Apprenez des erreurs les plus courantes pour ne pas les reproduire.</p>
                </div>
                
                {erreursFrequentes.map((erreur, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-6"
                  >
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-red-900 mb-2">{erreur.erreur}</h3>
                        <div className="space-y-2">
                          <div>
                            <span className="text-sm font-medium text-red-800">Conséquence : </span>
                            <span className="text-red-700">{erreur.consequence}</span>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-red-800">Prévention : </span>
                            <span className="text-red-700">{erreur.prevention}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
          <Link
            href="/cas-pratiques"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Cas pratiques
          </Link>
          
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Méthodologie DSCG - Diagnostic financier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}