import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Users, Activity, TrendingDown, TrendingUp } from 'lucide-react';

export default function Section3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-6xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 rounded-full p-3">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Section III - Analyse dynamique</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Le tableau de flux de trésorerie</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Le tableau de flux de trésorerie explique la variation de trésorerie entre deux exercices 
              en analysant les flux générés par les trois fonctions de l&apos;entreprise. Il constitue un outil 
              essentiel pour évaluer la capacité de l&apos;entreprise à générer des liquidités et financer sa croissance.
            </p>
            
            {/* Exemple complet de tableau de flux */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Exemple pratique : Entreprise OMEGA (k€)</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left font-semibold">Éléments</th>
                      <th className="border border-gray-300 p-3 text-right font-semibold">N</th>
                      <th className="border border-gray-300 p-3 text-right font-semibold">N-1</th>
                      <th className="border border-gray-300 p-3 text-right font-semibold">Variation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50">
                      <td colSpan={4} className="border border-gray-300 p-3 font-semibold text-green-800">FLUX DE TRÉSORERIE D&apos;EXPLOITATION</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Résultat net</td>
                      <td className="border border-gray-300 p-3 text-right">150</td>
                      <td className="border border-gray-300 p-3 text-right">120</td>
                      <td className="border border-gray-300 p-3 text-right font-medium">+30</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">+ Dotations aux amortissements</td>
                      <td className="border border-gray-300 p-3 text-right">200</td>
                      <td className="border border-gray-300 p-3 text-right">180</td>
                      <td className="border border-gray-300 p-3 text-right">+20</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">+ Dotations aux provisions</td>
                      <td className="border border-gray-300 p-3 text-right">50</td>
                      <td className="border border-gray-300 p-3 text-right">40</td>
                      <td className="border border-gray-300 p-3 text-right">+10</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">- Reprises sur provisions</td>
                      <td className="border border-gray-300 p-3 text-right">(20)</td>
                      <td className="border border-gray-300 p-3 text-right">(15)</td>
                      <td className="border border-gray-300 p-3 text-right">-5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">- Plus-values de cession</td>
                      <td className="border border-gray-300 p-3 text-right">(10)</td>
                      <td className="border border-gray-300 p-3 text-right">(5)</td>
                      <td className="border border-gray-300 p-3 text-right">-5</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">= Capacité d&apos;autofinancement</td>
                      <td className="border border-gray-300 p-3 text-right font-medium">370</td>
                      <td className="border border-gray-300 p-3 text-right font-medium">320</td>
                      <td className="border border-gray-300 p-3 text-right font-medium">+50</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">- Variation du BFR d&apos;exploitation</td>
                      <td className="border border-gray-300 p-3 text-right">(80)</td>
                      <td className="border border-gray-300 p-3 text-right">(60)</td>
                      <td className="border border-gray-300 p-3 text-right">-20</td>
                    </tr>
                    <tr className="bg-green-100">
                      <td className="border border-gray-300 p-3 font-semibold">= Flux net de trésorerie d&apos;exploitation</td>
                      <td className="border border-gray-300 p-3 text-right font-semibold">290</td>
                      <td className="border border-gray-300 p-3 text-right font-semibold">260</td>
                      <td className="border border-gray-300 p-3 text-right font-semibold text-green-600">+30</td>
                    </tr>
                    
                    <tr className="bg-blue-50">
                      <td colSpan={4} className="border border-gray-300 p-3 font-semibold text-blue-800">FLUX DE TRÉSORERIE D&apos;INVESTISSEMENT</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">- Acquisitions d&apos;immobilisations</td>
                      <td className="border border-gray-300 p-3 text-right">(250)</td>
                      <td className="border border-gray-300 p-3 text-right">(200)</td>
                      <td className="border border-gray-300 p-3 text-right">-50</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">+ Cessions d&apos;immobilisations</td>
                      <td className="border border-gray-300 p-3 text-right">30</td>
                      <td className="border border-gray-300 p-3 text-right">20</td>
                      <td className="border border-gray-300 p-3 text-right">+10</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border border-gray-300 p-3 font-semibold">= Flux net de trésorerie d&apos;investissement</td>
                      <td className="border border-gray-300 p-3 text-right font-semibold">(220)</td>
                      <td className="border border-gray-300 p-3 text-right font-semibold">(180)</td>
                      <td className="border border-gray-300 p-3 text-right font-semibold text-blue-600">-40</td>
                    </tr>
                    
                    <tr className="bg-red-50">
                      <td colSpan={4} className="border border-gray-300 p-3 font-semibold text-red-800">FLUX DE TRÉSORERIE DE FINANCEMENT</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">+ Augmentation de capital</td>
                      <td className="border border-gray-300 p-3 text-right">100</td>
                      <td className="border border-gray-300 p-3 text-right">0</td>
                      <td className="border border-gray-300 p-3 text-right">+100</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">+ Nouveaux emprunts</td>
                      <td className="border border-gray-300 p-3 text-right">150</td>
                      <td className="border border-gray-300 p-3 text-right">100</td>
                      <td className="border border-gray-300 p-3 text-right">+50</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">- Remboursements d&apos;emprunts</td>
                      <td className="border border-gray-300 p-3 text-right">(120)</td>
                      <td className="border border-gray-300 p-3 text-right">(100)</td>
                      <td className="border border-gray-300 p-3 text-right">-20</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">- Dividendes versés</td>
                      <td className="border border-gray-300 p-3 text-right">(80)</td>
                      <td className="border border-gray-300 p-3 text-right">(70)</td>
                      <td className="border border-gray-300 p-3 text-right">-10</td>
                    </tr>
                    <tr className="bg-red-100">
                      <td className="border border-gray-300 p-3 font-semibold">= Flux net de trésorerie de financement</td>
                      <td className="border border-gray-300 p-3 text-right font-semibold">50</td>
                      <td className="border border-gray-300 p-3 text-right font-semibold">(70)</td>
                      <td className="border border-gray-300 p-3 text-right font-semibold text-red-600">+120</td>
                    </tr>
                    
                    <tr className="bg-yellow-100">
                      <td className="border border-gray-300 p-3 font-bold">= VARIATION DE TRÉSORERIE</td>
                      <td className="border border-gray-300 p-3 text-right font-bold">120</td>
                      <td className="border border-gray-300 p-3 text-right font-bold">10</td>
                      <td className="border border-gray-300 p-3 text-right font-bold text-yellow-600">+110</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Trésorerie début d&apos;exercice</td>
                      <td className="border border-gray-300 p-3 text-right">50</td>
                      <td className="border border-gray-300 p-3 text-right">40</td>
                      <td className="border border-gray-300 p-3 text-right">+10</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="border border-gray-300 p-3 font-bold">Trésorerie fin d&apos;exercice</td>
                      <td className="border border-gray-300 p-3 text-right font-bold">170</td>
                      <td className="border border-gray-300 p-3 text-right font-bold">50</td>
                      <td className="border border-gray-300 p-3 text-right font-bold">+120</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h5 className="font-medium text-green-800 mb-2">Analyse exploitation</h5>
                  <div className="text-xs text-green-700 space-y-1">
                    <p>• CAF en progression (+15,6%)</p>
                    <p>• Flux d&apos;exploitation positifs</p>
                    <p>• BFR maîtrisé malgré la croissance</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h5 className="font-medium text-blue-800 mb-2">Analyse investissement</h5>
                  <div className="text-xs text-blue-700 space-y-1">
                    <p>• Effort d&apos;investissement soutenu</p>
                    <p>• Modernisation de l&apos;outil productif</p>
                    <p>• Cessions d&apos;actifs non stratégiques</p>
                  </div>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <h5 className="font-medium text-red-800 mb-2">Analyse financement</h5>
                  <div className="text-xs text-red-700 space-y-1">
                    <p>• Renforcement des fonds propres</p>
                    <p>• Recours modéré à l&apos;endettement</p>
                    <p>• Politique de dividendes stable</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">Structure du tableau de flux</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold text-green-800">Flux de trésorerie d&apos;exploitation</h4>
                  </div>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Résultat net</li>
                    <li>• + Dotations aux amortissements et provisions</li>
                    <li>• - Reprises sur amortissements et provisions</li>
                    <li>• ± Variation du BFR d&apos;exploitation</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-800">Flux de trésorerie d&apos;investissement</h4>
                  </div>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• - Acquisitions d&apos;immobilisations</li>
                    <li>• + Cessions d&apos;immobilisations</li>
                    <li>• ± Variation des immobilisations financières</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="h-5 w-5 text-red-600" />
                    <h4 className="font-semibold text-red-800">Flux de trésorerie de financement</h4>
                  </div>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• + Augmentations de capital</li>
                    <li>• - Dividendes versés</li>
                    <li>• + Nouveaux emprunts</li>
                    <li>• - Remboursements d&apos;emprunts</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Capacité d&apos;autofinancement (CAF)</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 mb-3">Méthode soustractive</h3>
                <div className="text-green-700 text-sm space-y-2">
                  <p><strong>CAF = EBE</strong></p>
                  <p>- Charges financières</p>
                  <p>- Charges exceptionnelles</p>
                  <p>- Participation des salariés</p>
                  <p>- Impôt sur les bénéfices</p>
                  <p>+ Produits financiers</p>
                  <p>+ Produits exceptionnels</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 mb-3">Méthode additive</h3>
                <div className="text-blue-700 text-sm space-y-2">
                  <p><strong>CAF = Résultat net</strong></p>
                  <p>+ Dotations aux amortissements</p>
                  <p>+ Dotations aux provisions</p>
                  <p>- Reprises sur provisions</p>
                  <p>- Plus-values de cession</p>
                  <p>+ Moins-values de cession</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ratios d&apos;analyse dynamique et prospective</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Catégorie</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Ratio</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Formule</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Norme</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Interprétation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={3} className="border border-gray-300 p-3 font-medium bg-green-50">Capacité d&apos;autofinancement</td>
                    <td className="border border-gray-300 p-3">Taux d&apos;autofinancement</td>
                    <td className="border border-gray-300 p-3">CAF / CA</td>
                    <td className="border border-gray-300 p-3">&gt; 10%</td>
                    <td className="border border-gray-300 p-3">Capacité à générer des liquidités</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Couverture des investissements</td>
                    <td className="border border-gray-300 p-3">CAF / Investissements</td>
                    <td className="border border-gray-300 p-3">&gt; 1</td>
                    <td className="border border-gray-300 p-3">Autofinancement des investissements</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Qualité de la CAF</td>
                    <td className="border border-gray-300 p-3">Flux exploitation / CAF</td>
                    <td className="border border-gray-300 p-3">&gt; 0,8</td>
                    <td className="border border-gray-300 p-3">Qualité des flux générés</td>
                  </tr>
                  
                  <tr>
                    <td rowSpan={3} className="border border-gray-300 p-3 font-medium bg-blue-50">Endettement dynamique</td>
                    <td className="border border-gray-300 p-3">Capacité de remboursement</td>
                    <td className="border border-gray-300 p-3">Dettes financières / CAF</td>
                    <td className="border border-gray-300 p-3">&lt; 4 ans</td>
                    <td className="border border-gray-300 p-3">Délai théorique de remboursement</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Couverture du service de la dette</td>
                    <td className="border border-gray-300 p-3">CAF / (Intérêts + Remboursements)</td>
                    <td className="border border-gray-300 p-3">&gt; 1,2</td>
                    <td className="border border-gray-300 p-3">Capacité à honorer les échéances</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Évolution de l&apos;endettement</td>
                    <td className="border border-gray-300 p-3">Δ Dettes / CAF</td>
                    <td className="border border-gray-300 p-3">&lt; 0,5</td>
                    <td className="border border-gray-300 p-3">Maîtrise de l&apos;endettement</td>
                  </tr>
                  
                  <tr>
                    <td rowSpan={2} className="border border-gray-300 p-3 font-medium bg-purple-50">Investissement</td>
                    <td className="border border-gray-300 p-3">Effort d&apos;investissement</td>
                    <td className="border border-gray-300 p-3">Investissements / CA</td>
                    <td className="border border-gray-300 p-3">3-8%</td>
                    <td className="border border-gray-300 p-3">Effort de modernisation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Renouvellement des actifs</td>
                    <td className="border border-gray-300 p-3">Investissements / Amortissements</td>
                    <td className="border border-gray-300 p-3">&gt; 1</td>
                    <td className="border border-gray-300 p-3">Croissance de l&apos;outil productif</td>
                  </tr>
                  
                  <tr>
                    <td rowSpan={2} className="border border-gray-300 p-3 font-medium bg-yellow-50">Politique financière</td>
                    <td className="border border-gray-300 p-3">Taux de distribution</td>
                    <td className="border border-gray-300 p-3">Dividendes / Résultat net</td>
                    <td className="border border-gray-300 p-3">30-50%</td>
                    <td className="border border-gray-300 p-3">Équilibre rémunération/autofinancement</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Croissance soutenable</td>
                    <td className="border border-gray-300 p-3">(1 - Taux distribution) × ROE</td>
                    <td className="border border-gray-300 p-3">&gt; 5%</td>
                    <td className="border border-gray-300 p-3">Croissance autofinancée possible</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Méthodes prévisionnelles */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Méthodes d&apos;analyse prévisionnelle</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-indigo-800 mb-4">Plan de financement prévisionnel</h4>
                  
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="font-medium text-gray-800 mb-2">Emplois prévisionnels :</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Investissements programmés</li>
                        <li>• Remboursements d&apos;emprunts</li>
                        <li>• Dividendes à distribuer</li>
                        <li>• Variation du BFR</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded p-3">
                      <p className="font-medium text-gray-800 mb-2">Ressources prévisionnelles :</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• CAF prévisionnelle</li>
                        <li>• Cessions d&apos;actifs</li>
                        <li>• Augmentations de capital</li>
                        <li>• Nouveaux emprunts</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                  <h4 className="font-semibold text-green-800 mb-4">Budget de trésorerie</h4>
                  
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="font-medium text-gray-800 mb-2">Encaissements :</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Ventes TTC (délais clients)</li>
                        <li>• Autres produits</li>
                        <li>• Cessions d&apos;immobilisations</li>
                        <li>• Emprunts contractés</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded p-3">
                      <p className="font-medium text-gray-800 mb-2">Décaissements :</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Achats TTC (délais fournisseurs)</li>
                        <li>• Charges d&apos;exploitation</li>
                        <li>• Investissements</li>
                        <li>• Remboursements et intérêts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-400">
                <h4 className="font-semibold text-orange-800 mb-3">Outils de simulation et de sensibilité</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Analyse de sensibilité :</p>
                    <ul className="text-orange-700 space-y-1">
                      <li>• Variation du CA (±5%, ±10%)</li>
                      <li>• Évolution des marges</li>
                      <li>• Impact des délais de paiement</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Scénarios :</p>
                    <ul className="text-orange-700 space-y-1">
                      <li>• Optimiste (croissance forte)</li>
                      <li>• Réaliste (tendance actuelle)</li>
                      <li>• Pessimiste (récession)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Indicateurs d&apos;alerte :</p>
                    <ul className="text-orange-700 space-y-1">
                      <li>• Seuil de trésorerie minimale</li>
                      <li>• Ratios de covenant bancaire</li>
                      <li>• Délai de rupture de trésorerie</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Grille d'analyse prospective complète */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Grille d&apos;analyse prospective et diagnostic</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left font-semibold">Dimension</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Indicateurs d&apos;alerte</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Signaux positifs</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Actions correctives</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-red-50">Liquidité</td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>• Trésorerie négative</li>
                          <li>• Flux d&apos;exploitation &lt; 0</li>
                          <li>• Découvert permanent</li>
                        </ul>
                      </td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>• Trésorerie excédentaire</li>
                          <li>• Flux d&apos;exploitation &gt; 0</li>
                          <li>• Autonomie financière</li>
                        </ul>
                      </td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>• Négocier délais fournisseurs</li>
                          <li>• Accélérer recouvrement</li>
                          <li>• Réduire stocks</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium bg-orange-50">Rentabilité</td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>• CAF en baisse</li>
                          <li>• Marges en érosion</li>
                          <li>• ROE &lt; 10%</li>
                        </ul>
                      </td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>• CAF croissante</li>
                          <li>• Marges stables/progression</li>
                          <li>• ROE &gt; 15%</li>
                        </ul>
                      </td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>• Optimiser structure coûts</li>
                          <li>• Revoir politique prix</li>
                          <li>• Améliorer productivité</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-blue-50">Endettement</td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>• Dettes/CAF &gt; 4 ans</li>
                          <li>• Endettement croissant</li>
                          <li>• Covenants en danger</li>
                        </ul>
                      </td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>• Dettes/CAF &lt; 3 ans</li>
                          <li>• Désendettement progressif</li>
                          <li>• Respect des covenants</li>
                        </ul>
                      </td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>• Renforcer fonds propres</li>
                          <li>• Renégocier conditions</li>
                          <li>• Céder actifs non stratégiques</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium bg-green-50">Croissance</td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>• Investissements insuffisants</li>
                          <li>• Parts de marché en baisse</li>
                          <li>• Innovation limitée</li>
                        </ul>
                      </td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>• Investissements soutenus</li>
                          <li>• Croissance organique</li>
                          <li>• Innovation continue</li>
                        </ul>
                      </td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>• Plan d&apos;investissement</li>
                          <li>• Stratégie de différenciation</li>
                          <li>• Partenariats stratégiques</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-amber-800 mb-3">Synthèse : Score de santé financière</h3>
              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">18-20</div>
                  <p className="text-sm font-medium text-green-800">Excellente</p>
                  <p className="text-xs text-green-600">Situation très solide</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">14-17</div>
                  <p className="text-sm font-medium text-blue-800">Bonne</p>
                  <p className="text-xs text-blue-600">Situation satisfaisante</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">10-13</div>
                  <p className="text-sm font-medium text-orange-800">Moyenne</p>
                  <p className="text-xs text-orange-600">Vigilance requise</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-600 mb-1">&lt; 10</div>
                  <p className="text-sm font-medium text-red-800">Préoccupante</p>
                  <p className="text-xs text-red-600">Actions urgentes</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-amber-800 mb-2">Critères d&apos;évaluation (sur 20 points) :</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-700">
                  <div>
                    <ul className="space-y-1">
                      <li>• Liquidité et trésorerie (5 pts)</li>
                      <li>• Rentabilité et performance (5 pts)</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-1">
                      <li>• Structure financière (5 pts)</li>
                      <li>• Perspectives de croissance (5 pts)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-800 mb-3">Méthode mnémotechnique : CAFED</h3>
              <div className="grid md:grid-cols-5 gap-4 text-gray-700">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-blue-600">C</span>
                  </div>
                  <p className="font-medium text-sm">CAF</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-green-600">A</span>
                  </div>
                  <p className="font-medium text-sm">Autofinancement</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-purple-600">F</span>
                  </div>
                  <p className="font-medium text-sm">Flux</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-red-600">E</span>
                  </div>
                  <p className="font-medium text-sm">Exploitation</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-amber-600">D</span>
                  </div>
                  <p className="font-medium text-sm">Dynamique</p>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm italic">
                &quot;CAF, Autofinancement, Flux, Exploitation, Dynamique&quot;
              </p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between pt-8 border-t border-gray-200">
            <Link
              href="/section-2"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Section II - Performance
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Quiz d&apos;évaluation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}