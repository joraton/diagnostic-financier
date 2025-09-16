'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowLeft, Download, FileText, Calculator, TrendingUp, BarChart3, BookOpen, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface FicheSynthese {
  id: number;
  title: string;
  description: string;
  section: string;
  contenu: {
    concepts: string[];
    formules: { nom: string; formule: string; interpretation: string }[];
    ratios: { nom: string; calcul: string; seuil: string }[];
    points_cles: string[];
  };
}

const fichesSynthese: FicheSynthese[] = [
  {
    id: 1,
    title: "Fiche de synthèse - Analyse structurelle",
    description: "Concepts fondamentaux et ratios de structure financière",
    section: "Section I",
    contenu: {
      concepts: [
        "Fonds de Roulement (FR) : excédent de ressources stables après financement des emplois durables",
        "Besoin en Fonds de Roulement (BFR) : besoin de financement lié au cycle d'exploitation",
        "Trésorerie Nette (TN) : solde de liquidité disponible",
        "Équilibre financier fondamental : FR = BFR + TN"
      ],
      formules: [
        {
          nom: "Fonds de Roulement",
          formule: "FR = Ressources stables - Emplois stables",
          interpretation: "FR > 0 : situation saine, FR = 0 : équilibre précaire, FR < 0 : déséquilibre"
        },
        {
          nom: "BFR d'exploitation",
          formule: "BFR = Stocks + Créances clients - Dettes fournisseurs",
          interpretation: "BFR > 0 : besoin de financement, BFR < 0 : ressource de financement"
        },
        {
          nom: "Trésorerie Nette",
          formule: "TN = Disponibilités - Concours bancaires courants",
          interpretation: "TN > 0 : excédent de liquidité, TN < 0 : tension de trésorerie"
        }
      ],
      ratios: [
        { nom: "Autonomie financière", calcul: "Capitaux propres / Total bilan", seuil: "> 30%" },
        { nom: "Endettement", calcul: "Dettes financières / Capitaux propres", seuil: "< 100%" },
        { nom: "Liquidité générale", calcul: "Actif circulant / Passif circulant", seuil: "> 1" },
        { nom: "Couverture emplois stables", calcul: "Ressources stables / Emplois stables", seuil: "> 1" }
      ],
      points_cles: [
        "L'équilibre financier minimum exige FR ≥ BFR",
        "Un BFR négatif est favorable (ressource gratuite)",
        "La trésorerie doit être positive mais pas excessive",
        "Méthode FRBT : Fonds de Roulement, BFR, Trésorerie"
      ]
    }
  },
  {
    id: 2,
    title: "Fiche de synthèse - Analyse de performance",
    description: "SIG, ratios de rentabilité et indicateurs de gestion",
    section: "Section II",
    contenu: {
      concepts: [
        "Soldes Intermédiaires de Gestion (SIG) : cascade de résultats partiels",
        "Excédent Brut d'Exploitation (EBE) : performance économique pure",
        "Capacité d'Autofinancement (CAF) : flux de liquidité potentiel",
        "Effet de levier : amplification de la rentabilité par l'endettement"
      ],
      formules: [
        {
          nom: "Valeur Ajoutée",
          formule: "VA = Production - Consommations intermédiaires",
          interpretation: "Richesse créée par l'entreprise, base de l'analyse de performance"
        },
        {
          nom: "Excédent Brut d'Exploitation",
          formule: "EBE = VA - Charges de personnel - Impôts et taxes",
          interpretation: "Performance opérationnelle avant politique financière et fiscale"
        },
        {
          nom: "CAF (méthode soustractive)",
          formule: "CAF = Résultat net + Charges non décaissables",
          interpretation: "Flux de liquidité généré par l'activité"
        }
      ],
      ratios: [
        { nom: "ROA (Rentabilité économique)", calcul: "Résultat net / Total actif", seuil: "> 5%" },
        { nom: "ROE (Rentabilité financière)", calcul: "Résultat net / Capitaux propres", seuil: "> 10%" },
        { nom: "Marge commerciale", calcul: "Marge commerciale / CA HT", seuil: "Variable" },
        { nom: "Rotation des stocks", calcul: "CAMV / Stock moyen", seuil: "> 4" }
      ],
      points_cles: [
        "Cascade des SIG : Production → VA → EBE → RE → RCAI → RN",
        "EBE = indicateur clé de performance opérationnelle",
        "ROE > ROA : effet de levier positif",
        "Méthode PROVE : Production, Résultat, Optimisation, Valeur, Efficacité"
      ]
    }
  },
  {
    id: 3,
    title: "Fiche de synthèse - Analyse dynamique",
    description: "Flux de trésorerie, CAF et analyse prospective",
    section: "Section III",
    contenu: {
      concepts: [
        "Tableau de flux de trésorerie : suivi des mouvements de liquidité",
        "Flux d'exploitation : liquidité générée par l'activité courante",
        "Flux d'investissement : impact des investissements sur la trésorerie",
        "Flux de financement : politique de financement et de distribution"
      ],
      formules: [
        {
          nom: "Flux de trésorerie d'exploitation",
          formule: "FTE = CAF - Variation du BFR",
          interpretation: "Liquidité réellement générée par l'exploitation"
        },
        {
          nom: "Flux de trésorerie d'investissement",
          formule: "FTI = Cessions - Acquisitions d'immobilisations",
          interpretation: "Impact des investissements sur la trésorerie"
        },
        {
          nom: "Capacité de remboursement",
          formule: "Dettes financières / CAF",
          interpretation: "Nombre d'années nécessaires pour rembourser les dettes"
        }
      ],
      ratios: [
        { nom: "Capacité de remboursement", calcul: "Dettes financières / CAF", seuil: "< 4 ans" },
        { nom: "Couverture des investissements", calcul: "CAF / Investissements", seuil: "> 0,3" },
        { nom: "Autofinancement", calcul: "CAF / CA", seuil: "> 5%" },
        { nom: "Effort d'investissement", calcul: "Investissements / CA", seuil: "Variable" }
      ],
      points_cles: [
        "Flux d'exploitation négatifs = signal d'alerte majeur",
        "CAF = point de départ de l'analyse dynamique",
        "Capacité de remboursement > 4 ans = situation préoccupante",
        "Méthode CAFED : CAF, Autofinancement, Flux, Endettement, Durabilité"
      ]
    }
  },
  {
    id: 4,
    title: "Fiche de synthèse - Méthodologie DSCG",
    description: "Grilles d'analyse et conseils pour l'examen",
    section: "Méthodologie",
    contenu: {
      concepts: [
        "Analyse structurelle : FR, BFR, TN et ratios de structure",
        "Analyse de performance : SIG, rentabilité et gestion",
        "Analyse dynamique : flux de trésorerie et prospective",
        "Diagnostic global : synthèse et recommandations"
      ],
      formules: [
        {
          nom: "Temps par point",
          formule: "1 point = 2-3 minutes",
          interpretation: "Répartition du temps selon le barème"
        },
        {
          nom: "Structure de copie",
          formule: "Introduction + Analyse + Synthèse + Recommandations",
          interpretation: "Plan type pour structurer la réponse"
        }
      ],
      ratios: [
        { nom: "Temps de lecture", calcul: "5 minutes minimum", seuil: "Obligatoire" },
        { nom: "Temps de relecture", calcul: "10 minutes en fin d'épreuve", seuil: "Recommandé" },
        { nom: "Détail des calculs", calcul: "Formule + Application + Résultat", seuil: "Systématique" }
      ],
      points_cles: [
        "Toujours présenter les formules avant les calculs",
        "Interpréter chaque ratio calculé",
        "Structurer la copie avec titres et sous-titres",
        "Proposer des recommandations concrètes"
      ]
    }
  }
];

export default function FichesSynthese() {
  const [selectedFiche, setSelectedFiche] = useState<number | null>(null);
  const [downloadedFiches, setDownloadedFiches] = useState<number[]>([]);

  const handleDownload = (ficheId: number, title: string) => {
    // Simulation du téléchargement
    const content = generateFicheContent(ficheId);
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setDownloadedFiches(prev => [...prev, ficheId]);
  };

  const generateFicheContent = (ficheId: number) => {
    const fiche = fichesSynthese.find(f => f.id === ficheId);
    if (!fiche) return '';

    return `
${fiche.title}
${'='.repeat(fiche.title.length)}

${fiche.description}
Section: ${fiche.section}

CONCEPTS FONDAMENTAUX
${'-'.repeat(20)}
${fiche.contenu.concepts.map(c => `• ${c}`).join('\n')}

FORMULES ESSENTIELLES
${'-'.repeat(20)}
${fiche.contenu.formules.map(f => `
${f.nom}:
  Formule: ${f.formule}
  Interprétation: ${f.interpretation}`).join('\n')}

RATIOS CLÉS
${'-'.repeat(10)}
${fiche.contenu.ratios.map(r => `• ${r.nom}: ${r.calcul} (Seuil: ${r.seuil})`).join('\n')}

POINTS CLÉS À RETENIR
${'-'.repeat(20)}
${fiche.contenu.points_cles.map(p => `• ${p}`).join('\n')}

---
Fiche générée automatiquement - Diagnostic Financier DSCG
`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-6xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Fiches de synthèse</h1>
              <p className="text-gray-600 mt-1">Résumés téléchargeables pour réviser efficacement</p>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
            <div className="flex items-start gap-3">
              <Download className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Fiches téléchargeables</h3>
                <p className="text-green-700 text-sm">
                  Chaque fiche contient les concepts essentiels, formules clés et ratios indispensables.
                  Parfait pour réviser avant l'examen DSCG !
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des fiches */}
        <div className="space-y-6">
          {fichesSynthese.map((fiche, index) => (
            <motion.div
              key={fiche.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {fiche.section}
                      </span>
                      {downloadedFiches.includes(fiche.id) && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center gap-1">
                          <CheckCircle className="h-3 w-3" />
                          Téléchargée
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{fiche.title}</h2>
                    <p className="text-gray-600 mb-4">{fiche.description}</p>
                    
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setSelectedFiche(selectedFiche === fiche.id ? null : fiche.id)}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        <FileText className="h-4 w-4" />
                        {selectedFiche === fiche.id ? 'Masquer' : 'Aperçu'}
                      </button>
                      
                      <button
                        onClick={() => handleDownload(fiche.id, fiche.title)}
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        <Download className="h-4 w-4" />
                        Télécharger
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-green-100 rounded-full p-3 ml-4">
                    {fiche.section === 'Section I' && <Calculator className="h-6 w-6 text-green-600" />}
                    {fiche.section === 'Section II' && <TrendingUp className="h-6 w-6 text-green-600" />}
                    {fiche.section === 'Section III' && <BarChart3 className="h-6 w-6 text-green-600" />}
                    {fiche.section === 'Méthodologie' && <BookOpen className="h-6 w-6 text-green-600" />}
                  </div>
                </div>
              </div>
              
              {selectedFiche === fiche.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Concepts */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Concepts fondamentaux</h3>
                      <ul className="space-y-2">
                        {fiche.contenu.concepts.map((concept, conceptIndex) => (
                          <li key={conceptIndex} className="text-gray-700 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            {concept}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Points clés */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Points clés</h3>
                      <ul className="space-y-2">
                        {fiche.contenu.points_cles.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-gray-700 text-sm flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Formules */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Formules essentielles</h3>
                    <div className="grid gap-4">
                      {fiche.contenu.formules.map((formule, formuleIndex) => (
                        <div key={formuleIndex} className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-1">{formule.nom}</h4>
                          <p className="text-blue-600 font-mono text-sm mb-2">{formule.formule}</p>
                          <p className="text-gray-600 text-sm">{formule.interpretation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Ratios */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Ratios clés</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Ratio</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Calcul</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Seuil</th>
                          </tr>
                        </thead>
                        <tbody>
                          {fiche.contenu.ratios.map((ratio, ratioIndex) => (
                            <tr key={ratioIndex} className="border-t border-gray-200">
                              <td className="px-4 py-2 text-sm text-gray-900">{ratio.nom}</td>
                              <td className="px-4 py-2 text-sm text-blue-600 font-mono">{ratio.calcul}</td>
                              <td className="px-4 py-2 text-sm text-gray-700">{ratio.seuil}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
          <Link
            href="/methodologie-dscg"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Méthodologie DSCG
          </Link>
          
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              {downloadedFiches.length} / {fichesSynthese.length} fiches téléchargées
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}