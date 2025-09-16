import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, BarChart3, Calculator, TrendingUp, AlertTriangle } from 'lucide-react';

export default function Section1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Section I - Analyse de la structure financière</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Le bilan fonctionnel</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Le bilan fonctionnel regroupe les éléments du bilan selon leur fonction économique 
              plutôt que selon leur nature juridique. Il permet d&apos;analyser l&apos;équilibre financier de l&apos;entreprise.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Structure du bilan fonctionnel</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">EMPLOIS (Actif)</h4>
                  <ul className="text-green-600 space-y-1 text-sm">
                    <li>• Emplois stables (immobilisations)</li>
                    <li>• Actif circulant d&apos;exploitation</li>
                    <li>• Actif circulant hors exploitation</li>
                    <li>• Trésorerie active</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-700 mb-2">RESSOURCES (Passif)</h4>
                  <ul className="text-green-600 space-y-1 text-sm">
                    <li>• Ressources stables (capitaux propres + dettes LT)</li>
                    <li>• Passif circulant d&apos;exploitation</li>
                    <li>• Passif circulant hors exploitation</li>
                    <li>• Trésorerie passive</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Les indicateurs d&apos;équilibre financier</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calculator className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-blue-800">Fonds de Roulement (FR)</h3>
                </div>
                <div className="text-blue-700">
                  <p className="text-sm mb-2">FR = Ressources stables - Emplois stables</p>
                  <div className="bg-blue-100 rounded p-2 text-xs">
                    <strong>Interprétation :</strong><br/>
                    FR &gt; 0 : Équilibre financier respecté<br/>
                    FR &lt; 0 : Déséquilibre financier
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold text-purple-800">Besoin en FR (BFR)</h3>
                </div>
                <div className="text-purple-700">
                  <p className="text-sm mb-2">BFR = (ACE + ACHE) - (PCE + PCHE)</p>
                  <div className="bg-purple-100 rounded p-2 text-xs">
                    <strong>Interprétation :</strong><br/>
                    BFR &gt; 0 : Besoin de financement<br/>
                    BFR &lt; 0 : Ressource de financement
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <h3 className="font-semibold text-amber-800">Trésorerie Nette (TN)</h3>
                </div>
                <div className="text-amber-700">
                  <p className="text-sm mb-2">TN = FR - BFR</p>
                  <div className="bg-amber-100 rounded p-2 text-xs">
                    <strong>Interprétation :</strong><br/>
                    TN &gt; 0 : Excédent de trésorerie<br/>
                    TN &lt; 0 : Déficit de trésorerie
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-800 mb-3">Méthode mnémotechnique : FRBT</h3>
              <div className="grid md:grid-cols-4 gap-4 text-gray-700">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-blue-600">F</span>
                  </div>
                  <p className="font-medium text-sm">Fonds de Roulement</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-green-600">R</span>
                  </div>
                  <p className="font-medium text-sm">Ressources stables</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-purple-600">B</span>
                  </div>
                  <p className="font-medium text-sm">Besoin en FR</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-red-600">T</span>
                  </div>
                  <p className="font-medium text-sm">Trésorerie</p>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm italic">
                &quot;Fonds de Roulement, Besoin de Financement, Trésorerie&quot;
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ratios de structure financière</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Ratio</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Formule</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Interprétation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Autonomie financière</td>
                    <td className="border border-gray-300 p-3 text-sm">Capitaux propres / Total bilan</td>
                    <td className="border border-gray-300 p-3 text-sm">&gt; 30% : Bonne autonomie</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Endettement</td>
                    <td className="border border-gray-300 p-3 text-sm">Dettes financières / Capitaux propres</td>
                    <td className="border border-gray-300 p-3 text-sm">&lt; 1 : Endettement maîtrisé</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Couverture des emplois stables</td>
                    <td className="border border-gray-300 p-3 text-sm">Ressources stables / Emplois stables</td>
                    <td className="border border-gray-300 p-3 text-sm">&gt; 1 : Équilibre respecté</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Exemples de calculs détaillés */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Exemples de calculs détaillés</h2>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-800 mb-4">Exemple pratique : Entreprise DELTA</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Données du bilan (en k€)</h4>
                    <div className="bg-white rounded p-4 text-sm">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="font-medium text-gray-700 mb-2">ACTIF</p>
                          <p>Immobilisations : 800</p>
                          <p>Stocks : 150</p>
                          <p>Créances : 200</p>
                          <p>Disponibilités : 50</p>
                          <p className="font-medium border-t pt-2 mt-2">Total : 1 200</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700 mb-2">PASSIF</p>
                          <p>Capitaux propres : 400</p>
                          <p>Dettes financières : 300</p>
                          <p>Dettes fournisseurs : 350</p>
                          <p>Autres dettes CT : 150</p>
                          <p className="font-medium border-t pt-2 mt-2">Total : 1 200</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Calculs des indicateurs</h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded p-3 border-l-4 border-blue-500">
                        <p className="font-medium text-gray-800">Fonds de Roulement</p>
                        <p className="text-sm text-gray-600">FR = (400 + 300) - 800 = -100 k€</p>
                        <p className="text-xs text-red-600">⚠️ FR négatif : déséquilibre</p>
                      </div>
                      <div className="bg-white rounded p-3 border-l-4 border-green-500">
                        <p className="font-medium text-gray-800">Besoin en FR</p>
                        <p className="text-sm text-gray-600">BFR = (150 + 200) - 350 = 0 k€</p>
                        <p className="text-xs text-green-600">✓ BFR équilibré</p>
                      </div>
                      <div className="bg-white rounded p-3 border-l-4 border-purple-500">
                        <p className="font-medium text-gray-800">Trésorerie Nette</p>
                        <p className="text-sm text-gray-600">TN = -100 - 0 = -100 k€</p>
                        <p className="text-xs text-red-600">⚠️ Trésorerie négative</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-yellow-50 rounded border-l-4 border-yellow-400">
                  <p className="font-medium text-yellow-800 mb-2">Diagnostic :</p>
                  <p className="text-sm text-yellow-700">L&apos;entreprise DELTA présente un déséquilibre financier avec un FR négatif. Les immobilisations ne sont pas entièrement financées par les ressources stables, créant une tension de trésorerie.</p>
                </div>
              </div>
            </div>

            {/* Tableau complet des ratios */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tableau complet des ratios de structure</h2>
              
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 sm:p-3 text-left font-semibold">Catégorie</th>
                      <th className="border border-gray-300 p-2 sm:p-3 text-left font-semibold">Ratio</th>
                      <th className="border border-gray-300 p-2 sm:p-3 text-left font-semibold">Formule</th>
                      <th className="border border-gray-300 p-2 sm:p-3 text-left font-semibold">Norme</th>
                      <th className="border border-gray-300 p-2 sm:p-3 text-left font-semibold">Signification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                       <td rowSpan={3} className="border border-gray-300 p-2 sm:p-3 font-medium bg-blue-50">Autonomie</td>
                      <td className="border border-gray-300 p-2 sm:p-3">Autonomie financière</td>
                      <td className="border border-gray-300 p-2 sm:p-3">CP / Total bilan</td>
                      <td className="border border-gray-300 p-2 sm:p-3">&gt; 30%</td>
                      <td className="border border-gray-300 p-2 sm:p-3">Indépendance vis-à-vis des créanciers</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Financement propre</td>
                      <td className="border border-gray-300 p-3">CP / Immobilisations</td>
                      <td className="border border-gray-300 p-3">&gt; 50%</td>
                      <td className="border border-gray-300 p-3">Couverture des investissements</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Capacité d&apos;endettement</td>
                      <td className="border border-gray-300 p-3">Dettes / CP</td>
                      <td className="border border-gray-300 p-3">&lt; 100%</td>
                      <td className="border border-gray-300 p-3">Marge d&apos;endettement disponible</td>
                    </tr>
                    <tr>
                       <td rowSpan={3} className="border border-gray-300 p-3 font-medium bg-green-50">Liquidité</td>
                      <td className="border border-gray-300 p-3">Liquidité générale</td>
                      <td className="border border-gray-300 p-3">AC / DCT</td>
                      <td className="border border-gray-300 p-3">&gt; 120%</td>
                      <td className="border border-gray-300 p-3">Capacité à honorer les dettes CT</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Liquidité réduite</td>
                      <td className="border border-gray-300 p-3">(Créances + Dispo) / DCT</td>
                      <td className="border border-gray-300 p-3">&gt; 80%</td>
                      <td className="border border-gray-300 p-3">Liquidité sans écoulement stocks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Liquidité immédiate</td>
                      <td className="border border-gray-300 p-3">Disponibilités / DCT</td>
                      <td className="border border-gray-300 p-3">&gt; 20%</td>
                      <td className="border border-gray-300 p-3">Trésorerie disponible immédiatement</td>
                    </tr>
                    <tr>
                       <td rowSpan={2} className="border border-gray-300 p-3 font-medium bg-purple-50">Rotation</td>
                      <td className="border border-gray-300 p-3">Rotation des stocks</td>
                      <td className="border border-gray-300 p-3">CA / Stock moyen</td>
                      <td className="border border-gray-300 p-3">Variable</td>
                      <td className="border border-gray-300 p-3">Vitesse d&apos;écoulement des stocks</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Délai de recouvrement</td>
                      <td className="border border-gray-300 p-3">(Créances × 360) / CA TTC</td>
                      <td className="border border-gray-300 p-3">&lt; 60 jours</td>
                      <td className="border border-gray-300 p-3">Délai moyen de paiement clients</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Exercices pratiques */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Exercices pratiques</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Exercice 1 : Calcul des équilibres financiers</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Données Entreprise GAMMA (en k€)</h4>
                      <div className="bg-white rounded p-4 text-sm">
                        <p>• Immobilisations corporelles : 1 500</p>
                        <p>• Immobilisations financières : 200</p>
                        <p>• Stocks de marchandises : 300</p>
                        <p>• Créances clients : 400</p>
                        <p>• Disponibilités : 100</p>
                        <p>• Capital social : 800</p>
                        <p>• Réserves : 300</p>
                        <p>• Résultat de l&apos;exercice : 100</p>
                        <p>4. Calculez le ratio d&apos;autonomie financière</p>
                        <p>5. Calculez le ratio de liquidité générale</p>
                        <p>6. Commentez la situation financière</p>
                      </div>
                      
                      <div className="mt-4 p-3 bg-blue-100 rounded">
                        <p className="text-xs text-blue-800 font-medium">💡 Astuce : Commencez par identifier les emplois stables, ressources stables, actif circulant et dettes à court terme</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Exercice 2 : Analyse comparative</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2 text-left">Ratios</th>
                          <th className="border border-gray-300 p-2 text-center">Entreprise A</th>
                          <th className="border border-gray-300 p-2 text-center">Entreprise B</th>
                          <th className="border border-gray-300 p-2 text-center">Secteur</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">Autonomie financière</td>
                          <td className="border border-gray-300 p-2 text-center">25%</td>
                          <td className="border border-gray-300 p-2 text-center">45%</td>
                          <td className="border border-gray-300 p-2 text-center">35%</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-2 font-medium">Liquidité générale</td>
                          <td className="border border-gray-300 p-2 text-center">150%</td>
                          <td className="border border-gray-300 p-2 text-center">110%</td>
                          <td className="border border-gray-300 p-2 text-center">130%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">Endettement</td>
                          <td className="border border-gray-300 p-2 text-center">200%</td>
                          <td className="border border-gray-300 p-2 text-center">80%</td>
                          <td className="border border-gray-300 p-2 text-center">120%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4">
                    <p className="font-medium text-gray-700 mb-2">Question :</p>
                    <p className="text-sm text-gray-600">Comparez les deux entreprises et déterminez laquelle présente la meilleure structure financière. Justifiez votre réponse en vous appuyant sur les normes sectorielles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between pt-8 border-t border-gray-200">
            <Link
              href="/introduction"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Introduction
            </Link>
            <Link
              href="/section-2"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Section II - Analyse de la performance
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}