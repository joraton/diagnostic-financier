'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowLeft, FileText, Calculator, TrendingUp, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface CasPratique {
  id: number;
  title: string;
  description: string;
  donnees: { [key: string]: number | string };
  questions: string[];
  corrections: string[];
  conseils: string[];
}

const casPratiques: CasPratique[] = [
  {
    id: 1,
    title: "Analyse de la structure financière - Entreprise ALPHA",
    description: "Analyser la situation financière de l'entreprise ALPHA à partir de son bilan fonctionnel.",
    donnees: {
      "Immobilisations nettes": 850000,
      "Stocks": 120000,
      "Créances clients": 95000,
      "Disponibilités": 25000,
      "Capitaux propres": 650000,
      "Dettes financières LT": 200000,
      "Dettes fournisseurs": 180000,
      "Dettes fiscales et sociales": 60000
    },
    questions: [
      "Calculer le Fonds de Roulement (FR)",
      "Calculer le Besoin en Fonds de Roulement (BFR)",
      "Calculer la Trésorerie Nette (TN)",
      "Analyser l'équilibre financier de l'entreprise"
    ],
    corrections: [
      "FR = Ressources stables - Emplois stables = (650 000 + 200 000) - 850 000 = 0 €",
      "BFR = Actif circulant d'exploitation - Passif circulant d'exploitation = (120 000 + 95 000) - (180 000 + 60 000) = -25 000 €",
      "TN = FR - BFR = 0 - (-25 000) = 25 000 € (vérification : 25 000 € de disponibilités)",
      "L'entreprise a un équilibre financier précaire avec un FR nul, mais bénéficie d'un BFR négatif qui génère une trésorerie positive."
    ],
    conseils: [
      "Un FR nul indique une situation limite : l'entreprise finance exactement ses immobilisations.",
      "Le BFR négatif est favorable : l'entreprise est payée avant de payer ses fournisseurs.",
      "Surveiller l'évolution du FR pour éviter un déséquilibre financier."
    ]
  },
  {
    id: 2,
    title: "Analyse de la rentabilité - Entreprise BETA",
    description: "Évaluer la performance économique et financière de l'entreprise BETA.",
    donnees: {
      "Chiffre d'affaires": 2500000,
      "Achats de marchandises": 1200000,
      "Charges de personnel": 650000,
      "Autres charges d'exploitation": 180000,
      "Dotations aux amortissements": 120000,
      "Charges financières": 45000,
      "Impôt sur les sociétés": 85000,
      "Total actif": 1800000,
      "Capitaux propres": 900000
    },
    questions: [
      "Calculer l'EBE (Excédent Brut d'Exploitation)",
      "Calculer le résultat d'exploitation",
      "Calculer le résultat net",
      "Calculer la rentabilité économique (ROA) et financière (ROE)"
    ],
    corrections: [
      "EBE = CA - Achats - Charges de personnel - Autres charges = 2 500 000 - 1 200 000 - 650 000 - 180 000 = 470 000 €",
      "Résultat d'exploitation = EBE - Dotations = 470 000 - 120 000 = 350 000 €",
      "Résultat net = Résultat d'exploitation - Charges financières - IS = 350 000 - 45 000 - 85 000 = 220 000 €",
      "ROA = Résultat net / Total actif = 220 000 / 1 800 000 = 12,2% ; ROE = Résultat net / Capitaux propres = 220 000 / 900 000 = 24,4%"
    ],
    conseils: [
      "Un EBE de 18,8% du CA (470k/2500k) est satisfaisant pour ce secteur.",
      "La rentabilité financière (24,4%) est supérieure à la rentabilité économique (12,2%) grâce à l'effet de levier.",
      "Surveiller l'évolution des charges de personnel qui représentent 26% du CA."
    ]
  },
  {
    id: 3,
    title: "Analyse dynamique - Entreprise GAMMA (Industrie)",
    description: "Analyser les flux de trésorerie et la capacité d'autofinancement d'une entreprise industrielle.",
    donnees: {
      "Résultat net": 180000,
      "Dotations aux amortissements": 95000,
      "Variation des provisions": 15000,
      "Plus-values de cession": -8000,
      "Variation du BFR": 45000,
      "Acquisitions d'immobilisations": 220000,
      "Cessions d'immobilisations": 25000,
      "Nouveaux emprunts": 150000,
      "Remboursements d'emprunts": 80000,
      "Dividendes versés": 60000,
      "Dettes financières totales": 450000
    },
    questions: [
      "Calculer la CAF par la méthode soustractive",
      "Calculer le flux de trésorerie d'exploitation",
      "Calculer le flux de trésorerie d'investissement",
      "Calculer le flux de trésorerie de financement et analyser la capacité de remboursement"
    ],
    corrections: [
      "CAF = Résultat net + Dotations + Δ Provisions - Plus-values = 180 000 + 95 000 + 15 000 - (-8 000) = 298 000 €",
      "Flux d'exploitation = CAF - Δ BFR = 298 000 - 45 000 = 253 000 €",
      "Flux d'investissement = Cessions - Acquisitions = 25 000 - 220 000 = -195 000 €",
      "Flux de financement = Nouveaux emprunts - Remboursements - Dividendes = 150 000 - 80 000 - 60 000 = 10 000 €. Capacité de remboursement = Dettes / CAF = 450 000 / 298 000 = 1,5 an (excellent)"
    ],
    conseils: [
      "Une CAF de 298 k€ est solide pour financer la croissance et les remboursements.",
      "L'augmentation du BFR (45 k€) est normale en phase de croissance mais à surveiller.",
      "La capacité de remboursement de 1,5 an est excellente (seuil d'alerte à 4 ans)."
    ]
  },
  {
    id: 4,
    title: "Diagnostic de crise - Entreprise DELTA (Commerce)",
    description: "Analyser une entreprise commerciale en difficulté et proposer des solutions.",
    donnees: {
      "Chiffre d'affaires N": 1800000,
      "Chiffre d'affaires N-1": 2200000,
      "Résultat d'exploitation N": -85000,
      "Résultat net N": -125000,
      "Capitaux propres": 150000,
      "Dettes financières": 380000,
      "BFR": 95000,
      "Trésorerie": -45000,
      "CAF": -65000,
      "Ratio d'endettement": "72%"
    },
    questions: [
      "Analyser l'évolution de l'activité et identifier les signaux d'alerte",
      "Calculer et interpréter les ratios de structure financière",
      "Évaluer la situation de trésorerie et les risques",
      "Proposer des mesures de redressement prioritaires"
    ],
    corrections: [
      "Baisse du CA de 18% (400k€), résultat d'exploitation négatif, perte nette : signaux d'alerte majeurs",
      "Ratio d'endettement de 72% très élevé, capitaux propres faibles (150k€), structure déséquilibrée",
      "Trésorerie négative (-45k€), CAF négative (-65k€) : risque de cessation de paiements imminent",
      "Priorités : négocier avec les banques, réduire le BFR, plan de restructuration, apport en capital ou cession"
    ],
    conseils: [
      "Situation critique nécessitant des mesures d'urgence dans les 3 mois.",
      "La CAF négative empêche tout autofinancement : recherche de financement externe obligatoire.",
      "Envisager un accompagnement spécialisé (expert-comptable, conseil en restructuration)."
    ]
  },
  {
    id: 5,
    title: "Start-up en croissance - Entreprise EPSILON (Tech)",
    description: "Analyser les besoins de financement d'une start-up technologique en forte croissance.",
    donnees: {
      "Chiffre d'affaires N": 850000,
      "Croissance CA": "+180% vs N-1",
      "Résultat d'exploitation": -45000,
      "Résultat net": -65000,
      "R&D capitalisée": 120000,
      "Immobilisations": 180000,
      "BFR": 125000,
      "Trésorerie": 95000,
      "Capitaux propres": 220000,
      "Levée de fonds récente": 300000
    },
    questions: [
      "Analyser la phase de développement et les investissements",
      "Calculer le burn rate et l'autonomie financière",
      "Évaluer les besoins de financement futurs",
      "Analyser les indicateurs de performance spécifiques aux start-ups"
    ],
    corrections: [
      "Phase de croissance rapide (+180%) avec investissements R&D importants, pertes normales à ce stade",
      "Burn rate ≈ 65k€/an, autonomie avec 95k€ de trésorerie : environ 1,5 an",
      "Besoins futurs : financement de la croissance du BFR et des investissements R&D, nouvelle levée nécessaire",
      "Ratio CA/Investissements R&D = 7,1 (bon), croissance forte, structure capitalistique saine post-levée"
    ],
    conseils: [
      "Profil typique de start-up en scale-up : pertes temporaires compensées par la croissance.",
      "Préparer la prochaine levée 6-12 mois avant épuisement de la trésorerie.",
      "Surveiller l'évolution du BFR qui peut exploser avec la croissance."
    ]
  },
  {
    id: 6,
    title: "Analyse sectorielle - Entreprise ZETA (Services)",
    description: "Comparer les performances d'une entreprise de services avec les standards sectoriels.",
    donnees: {
      "Chiffre d'affaires": 1200000,
      "Marge brute": "85%",
      "Charges de personnel": 720000,
      "EBE": 180000,
      "Résultat net": 95000,
      "Total actif": 650000,
      "Capitaux propres": 420000,
      "Délai clients": "25 jours",
      "Rotation actif": 1.85,
      "Moyennes sectorielles": "Marge EBE: 12%, ROE: 18%, Délai clients: 35j"
    },
    questions: [
      "Calculer et comparer les marges avec les standards sectoriels",
      "Analyser la rentabilité et l'efficacité opérationnelle",
      "Évaluer la gestion du poste clients",
      "Synthétiser les forces et faiblesses par rapport au secteur"
    ],
    corrections: [
      "Marge EBE = 180k/1200k = 15% vs 12% secteur (+3 pts) ; Marge brute de 85% excellente pour les services",
      "ROE = 95k/420k = 22,6% vs 18% secteur (+4,6 pts) ; Rotation actif de 1,85 supérieure à la moyenne",
      "Délai clients de 25j vs 35j secteur : gestion clients très efficace (-10j)",
      "Forces : marges supérieures, rentabilité élevée, gestion clients. Faiblesses : charges personnel élevées (60% CA)"
    ],
    conseils: [
      "Performance globalement supérieure au secteur, entreprise bien positionnée.",
      "Optimiser la masse salariale qui reste le principal levier d'amélioration.",
      "Maintenir l'avantage concurrentiel sur la gestion des délais clients."
    ]
  }
];

export default function CasPratiques() {
  const [selectedCas, setSelectedCas] = useState<number | null>(null);
  const [showCorrection, setShowCorrection] = useState<boolean[]>([]);

  const toggleCorrection = (index: number) => {
    const newShowCorrection = [...showCorrection];
    newShowCorrection[index] = !newShowCorrection[index];
    setShowCorrection(newShowCorrection);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-6xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 rounded-full p-3">
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cas pratiques</h1>
              <p className="text-gray-600 mt-1">Exercices d&apos;application du diagnostic financier</p>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-1">Méthodologie</h3>
                <p className="text-blue-700 text-sm">
                  Pour chaque cas, analysez les données, répondez aux questions, puis consultez les corrections détaillées.
                  Prenez le temps de comprendre les calculs et les interprétations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des cas pratiques */}
        <div className="space-y-6">
          {casPratiques.map((cas, casIndex) => (
            <motion.div
              key={cas.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: casIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{cas.title}</h2>
                    <p className="text-gray-600 mb-4">{cas.description}</p>
                    
                    <button
                      onClick={() => setSelectedCas(selectedCas === cas.id ? null : cas.id)}
                      className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      <Calculator className="h-4 w-4" />
                      {selectedCas === cas.id ? 'Masquer' : 'Commencer'} l&apos;exercice
                    </button>
                  </div>
                  <div className="bg-purple-100 rounded-full p-3 ml-4">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </div>
              
              {selectedCas === cas.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6"
                >
                  {/* Données */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      Données financières (en €)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(cas.donnees).map(([key, value]) => (
                        <div key={key} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">{key}</span>
                          <span className="font-semibold text-gray-900">
                            {typeof value === 'number' ? value.toLocaleString() : value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Questions et corrections */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      Questions à traiter
                    </h3>
                    
                    {cas.questions.map((question, qIndex) => (
                      <div key={qIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="p-4 bg-gray-50">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-800 mb-2">
                                {qIndex + 1}. {question}
                              </h4>
                            </div>
                            <button
                              onClick={() => toggleCorrection(qIndex)}
                              className="inline-flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded font-medium transition-colors ml-4"
                            >
                              <CheckCircle className="h-4 w-4" />
                              {showCorrection[qIndex] ? 'Masquer' : 'Voir'} la correction
                            </button>
                          </div>
                        </div>
                        
                        {showCorrection[qIndex] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="p-4 bg-green-50 border-t border-green-200"
                          >
                            <h5 className="font-semibold text-green-800 mb-2">Correction :</h5>
                            <p className="text-green-700 mb-3">{cas.corrections[qIndex]}</p>
                            
                            {cas.conseils[qIndex] && (
                              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mt-3">
                                <p className="text-blue-700 text-sm">
                                  <strong>Conseil :</strong> {cas.conseils[qIndex]}
                                </p>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Quiz d&apos;évaluation
          </Link>
          
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Félicitations ! Vous avez terminé le cours de diagnostic financier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}