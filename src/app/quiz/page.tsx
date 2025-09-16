'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Brain, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle est la formule du Fonds de Roulement (FR) ?",
    options: [
      "Actif circulant - Passif circulant",
      "Ressources stables - Emplois stables",
      "Capitaux propres - Immobilisations",
      "Trésorerie active - Trésorerie passive"
    ],
    correct: 1,
    explanation: "Le FR = Ressources stables - Emplois stables. Il mesure l'excédent de ressources durables après financement des emplois durables."
  },
  {
    id: 2,
    question: "Que signifie un BFR positif ?",
    options: [
      "L'entreprise génère une ressource de financement",
      "L'entreprise a un besoin de financement",
      "La trésorerie est excédentaire",
      "Les stocks sont trop importants"
    ],
    correct: 1,
    explanation: "Un BFR positif signifie que l'entreprise a un besoin de financement car ses emplois circulants sont supérieurs à ses ressources circulantes."
  },
  {
    id: 3,
    question: "L'EBE (Excédent Brut d'Exploitation) se calcule :",
    options: [
      "Chiffre d'affaires - Charges d'exploitation",
      "Valeur ajoutée - Charges de personnel - Impôts et taxes",
      "Résultat d'exploitation + Dotations aux amortissements",
      "Production - Consommations intermédiaires"
    ],
    correct: 1,
    explanation: "L'EBE = Valeur ajoutée - Charges de personnel - Impôts et taxes. Il mesure la performance économique pure de l'entreprise."
  },
  {
    id: 4,
    question: "La CAF (Capacité d'Autofinancement) permet de :",
    options: [
      "Mesurer la rentabilité de l'entreprise",
      "Évaluer la capacité de l'entreprise à s'autofinancer",
      "Calculer le besoin en fonds de roulement",
      "Déterminer la solvabilité à court terme"
    ],
    correct: 1,
    explanation: "La CAF mesure la capacité de l'entreprise à générer des ressources internes pour financer ses investissements et rembourser ses dettes."
  },
  {
    id: 5,
    question: "Un ratio d'autonomie financière de 25% signifie :",
    options: [
      "L'entreprise est très autonome financièrement",
      "L'entreprise est moyennement autonome",
      "L'entreprise manque d'autonomie financière",
      "L'entreprise est en faillite"
    ],
    correct: 2,
    explanation: "Un ratio d'autonomie financière de 25% est en dessous du seuil recommandé de 30%, indiquant un manque d'autonomie financière."
  },
  {
    id: 6,
    question: "Le ratio de liquidité générale se calcule :",
    options: [
      "Disponibilités / Dettes à court terme",
      "Actif circulant / Passif circulant",
      "(Actif circulant - Stocks) / Passif circulant",
      "Créances clients / Dettes fournisseurs"
    ],
    correct: 1,
    explanation: "Le ratio de liquidité générale = Actif circulant / Passif circulant. Il mesure la capacité de l'entreprise à honorer ses dettes à court terme."
  },
  {
    id: 7,
    question: "Dans la cascade des SIG, que trouve-t-on après la Valeur Ajoutée ?",
    options: [
      "Le Résultat d'exploitation",
      "L'Excédent Brut d'Exploitation (EBE)",
      "Le Résultat courant avant impôts",
      "La Production de l'exercice"
    ],
    correct: 1,
    explanation: "Après la VA, on calcule l'EBE en déduisant les charges de personnel et les impôts et taxes de la valeur ajoutée."
  },
  {
    id: 8,
    question: "Un ratio de rotation des stocks de 6 signifie :",
    options: [
      "Les stocks se renouvellent 6 fois par an",
      "Les stocks représentent 6 mois de ventes",
      "L'entreprise a 6 types de stocks différents",
      "Les stocks ont augmenté de 6%"
    ],
    correct: 0,
    explanation: "Un ratio de rotation de 6 indique que les stocks se renouvellent 6 fois par an, soit tous les 2 mois (12/6)."
  },
  {
    id: 9,
    question: "Le ROE (Return On Equity) mesure :",
    options: [
      "La rentabilité des actifs",
      "La rentabilité des capitaux propres",
      "La rentabilité des ventes",
      "La rentabilité des investissements"
    ],
    correct: 1,
    explanation: "Le ROE = Résultat net / Capitaux propres. Il mesure la rentabilité des fonds investis par les actionnaires."
  },
  {
    id: 10,
    question: "Dans le tableau de flux de trésorerie, les dividendes versés apparaissent dans :",
    options: [
      "Les flux d'exploitation",
      "Les flux d'investissement",
      "Les flux de financement",
      "La variation de trésorerie"
    ],
    correct: 2,
    explanation: "Les dividendes versés sont classés dans les flux de financement car ils constituent une rémunération des actionnaires."
  },
  {
    id: 11,
    question: "Un délai de rotation des créances clients de 45 jours signifie :",
    options: [
      "Les clients paient en moyenne au bout de 45 jours",
      "L'entreprise accorde 45 jours de crédit maximum",
      "Les créances représentent 45% du CA",
      "Les créances augmentent de 45% par an"
    ],
    correct: 0,
    explanation: "Le délai de rotation indique le temps moyen entre la vente et l'encaissement, soit 45 jours en moyenne."
  },
  {
    id: 12,
    question: "La méthode soustractive de calcul de la CAF part de :",
    options: [
      "L'Excédent Brut d'Exploitation",
      "Le Résultat net",
      "Le Résultat d'exploitation",
      "La Valeur ajoutée"
    ],
    correct: 1,
    explanation: "La méthode soustractive part du résultat net et ajoute les charges non décaissables (amortissements, provisions)."
  },
  {
    id: 13,
    question: "Un ratio d'endettement de 80% indique :",
    options: [
      "Une situation financière excellente",
      "Un endettement excessif et risqué",
      "Un endettement normal",
      "Un sous-endettement"
    ],
    correct: 1,
    explanation: "Un ratio d'endettement de 80% est très élevé (seuil d'alerte à 50-60%) et indique un risque financier important."
  },
  {
    id: 14,
    question: "Le ratio de couverture des emplois stables mesure :",
    options: [
      "La capacité à financer les investissements",
      "La part des immobilisations financées par les ressources stables",
      "La liquidité de l'entreprise",
      "La rentabilité des investissements"
    ],
    correct: 1,
    explanation: "Ce ratio = Ressources stables / Emplois stables. Il doit être > 1 pour assurer l'équilibre financier."
  },
  {
    id: 15,
    question: "Dans l'analyse par les ratios, un ROA de 15% est considéré comme :",
    options: [
      "Faible (< 5%)",
      "Moyen (5-10%)",
      "Bon (10-15%)",
      "Excellent (> 15%)"
    ],
    correct: 3,
    explanation: "Un ROA de 15% est excellent car il dépasse largement les seuils habituels de rentabilité économique."
  },
  {
    id: 16,
    question: "Le BFR d'exploitation comprend :",
    options: [
      "Stocks + Créances clients - Dettes fournisseurs",
      "Actif circulant - Passif circulant",
      "Créances - Dettes",
      "Stocks + Créances - Toutes les dettes"
    ],
    correct: 0,
    explanation: "Le BFR d'exploitation = Stocks + Créances clients - Dettes fournisseurs. Il mesure le besoin lié au cycle d'exploitation."
  },
  {
    id: 17,
    question: "Un ratio Dettes financières/CAF de 5 ans signifie :",
    options: [
      "L'entreprise peut rembourser ses dettes en 5 ans",
      "L'entreprise est surendettée",
      "La situation est limite (seuil d'alerte)",
      "L'entreprise doit emprunter davantage"
    ],
    correct: 2,
    explanation: "Un ratio de 5 ans dépasse le seuil d'alerte de 4 ans, indiquant une situation limite nécessitant une vigilance."
  },
  {
    id: 18,
    question: "L'effet de levier financier est positif quand :",
    options: [
      "Le coût de la dette > Rentabilité économique",
      "Le coût de la dette < Rentabilité économique",
      "L'entreprise n'a pas de dettes",
      "Les capitaux propres augmentent"
    ],
    correct: 1,
    explanation: "L'effet de levier est positif quand le coût de la dette est inférieur à la rentabilité économique, amplifiant la rentabilité des capitaux propres."
  },
  {
    id: 19,
    question: "Dans l'analyse prospective, un flux de trésorerie d'exploitation négatif indique :",
    options: [
      "Une situation normale",
      "Un signal d'alerte majeur",
      "Une phase d'investissement",
      "Une croissance rapide"
    ],
    correct: 1,
    explanation: "Des flux d'exploitation négatifs constituent un signal d'alerte majeur car l'activité ne génère pas de liquidités."
  },
  {
    id: 20,
    question: "Le ratio de marge nette se calcule :",
    options: [
      "Résultat d'exploitation / Chiffre d'affaires",
      "Résultat net / Chiffre d'affaires",
      "EBE / Chiffre d'affaires",
      "Valeur ajoutée / Chiffre d'affaires"
    ],
    correct: 1,
    explanation: "La marge nette = Résultat net / CA. Elle mesure la rentabilité finale après toutes les charges et impôts."
  },
  {
    id: 21,
    question: "Un taux de croissance soutenable de 8% signifie :",
    options: [
      "L'entreprise peut croître de 8% sans financement externe",
      "L'entreprise doit croître de 8% minimum",
      "Les ventes augmentent de 8% par an",
      "Les bénéfices croissent de 8%"
    ],
    correct: 0,
    explanation: "Le taux de croissance soutenable indique la croissance maximale possible en autofinancement, sans recours externe."
  },
  {
    id: 22,
    question: "Dans la méthode FRBT, que signifie le 'T' ?",
    options: [
      "Taux",
      "Trésorerie",
      "Total",
      "Temps"
    ],
    correct: 1,
    explanation: "FRBT = Fonds de Roulement, BFR, Trésorerie. Cette méthode mnémotechnique aide à retenir l'équilibre financier fondamental."
  },
  {
    id: 23,
    question: "Un ratio de liquidité réduite de 0,8 indique :",
    options: [
      "Une excellente liquidité",
      "Une liquidité satisfaisante",
      "Une liquidité insuffisante",
      "Une situation critique"
    ],
    correct: 2,
    explanation: "Le ratio de liquidité réduite doit être proche de 1. Un ratio de 0,8 indique une liquidité insuffisante."
  },
  {
    id: 24,
    question: "Le coefficient multiplicateur de capitaux propres mesure :",
    options: [
      "L'effet de levier financier",
      "La rentabilité des capitaux propres",
      "Le niveau d'endettement",
      "La structure du bilan"
    ],
    correct: 0,
    explanation: "Le coefficient multiplicateur (Total actif / Capitaux propres) mesure l'amplification de la rentabilité par l'endettement."
  },
  {
    id: 25,
    question: "En analyse sectorielle, un ratio doit être comparé :",
    options: [
      "Uniquement aux années précédentes",
      "Aux concurrents et à la moyenne sectorielle",
      "Aux normes comptables",
      "Aux objectifs de l'entreprise"
    ],
    correct: 1,
    explanation: "L'analyse sectorielle nécessite une comparaison avec les concurrents et la moyenne du secteur pour être pertinente."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToPlanButton />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-red-100 rounded-full p-3">
                <Brain className="h-8 w-8 text-red-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Résultats du Quiz</h1>
            </div>
            
            <div className="mb-8">
              <div className={`text-6xl font-bold mb-4 ${
                percentage >= 80 ? 'text-green-600' : 
                percentage >= 60 ? 'text-amber-600' : 'text-red-600'
              }`}>
                {percentage}%
              </div>
              <p className="text-xl text-gray-700 mb-2">
                Vous avez obtenu {score} bonnes réponses sur {questions.length}
              </p>
              <p className={`text-lg font-medium ${
                percentage >= 80 ? 'text-green-600' : 
                percentage >= 60 ? 'text-amber-600' : 'text-red-600'
              }`}>
                {
                  percentage >= 80 ? 'Excellent ! Vous maîtrisez le diagnostic financier.' :
                  percentage >= 60 ? 'Bien ! Quelques révisions seraient bénéfiques.' :
                  'Il faut revoir les concepts fondamentaux.'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <button
                onClick={resetQuiz}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Recommencer le quiz
              </button>
              <Link
                href="/cas-pratiques"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Cas pratiques
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Brain className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Quiz d&apos;évaluation</h1>
          </div>
          
          {/* Barre de progression */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} sur {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-red-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                {question.question}
              </h2>
              
              <div className="space-y-3 mb-6">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === index;
                  const isCorrect = index === question.correct;
                  const showFeedback = showExplanation;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => !showExplanation && handleAnswer(index)}
                      disabled={showExplanation}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                        showFeedback
                          ? isCorrect
                            ? 'border-green-500 bg-green-50 text-green-800'
                            : isSelected
                            ? 'border-red-500 bg-red-50 text-red-800'
                            : 'border-gray-200 bg-gray-50 text-gray-600'
                          : isSelected
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showFeedback && isCorrect && (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        )}
                        {showFeedback && isSelected && !isCorrect && (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"
                >
                  <h3 className="font-semibold text-blue-800 mb-2">Explication</h3>
                  <p className="text-blue-700">{question.explanation}</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation */}
          <div className="flex justify-between pt-8 border-t border-gray-200">
            <Link
              href="/section-3"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Section III - Analyse dynamique
            </Link>
            
            {showExplanation && (
              <button
                onClick={nextQuestion}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}