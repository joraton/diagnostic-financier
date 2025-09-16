import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, TrendingUp, DollarSign, Percent, Target } from 'lucide-react';

export default function Section2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <TrendingUp className="h-8 w-8 text-amber-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Section II - Analyse de la performance</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Les Soldes Intermédiaires de Gestion (SIG)</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Les SIG permettent d&apos;analyser la formation du résultat en décomposant 
              l&apos;activité de l&apos;entreprise par fonction économique. Ils constituent un outil fondamental 
              pour évaluer la performance à chaque étape du processus de création de valeur.
            </p>
            
            {/* Tableau complet des SIG */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Solde</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Formule de calcul</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Signification économique</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Normes indicatives</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium bg-blue-50">Marge commerciale</td>
                    <td className="border border-gray-300 p-3">Ventes de marchandises - Coût d&apos;achat des marchandises vendues</td>
                    <td className="border border-gray-300 p-3">Marge dégagée sur l&apos;activité de négoce</td>
                    <td className="border border-gray-300 p-3">20-40% du CA (commerce)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium bg-green-50">Production de l&apos;exercice</td>
                    <td className="border border-gray-300 p-3">Production vendue + Production stockée + Production immobilisée</td>
                    <td className="border border-gray-300 p-3">Mesure de l&apos;activité productive</td>
                    <td className="border border-gray-300 p-3">Croissance &gt; 3% par an</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium bg-purple-50">Valeur ajoutée</td>
                    <td className="border border-gray-300 p-3">Marge commerciale + Production - Consommations externes</td>
                    <td className="border border-gray-300 p-3">Richesse créée par l&apos;entreprise</td>
                    <td className="border border-gray-300 p-3">40-60% du CA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium bg-yellow-50">EBE</td>
                    <td className="border border-gray-300 p-3">Valeur ajoutée - Charges de personnel - Impôts et taxes</td>
                    <td className="border border-gray-300 p-3">Capacité d&apos;autofinancement avant amortissements</td>
                    <td className="border border-gray-300 p-3">10-20% du CA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium bg-orange-50">Résultat d&apos;exploitation</td>
                    <td className="border border-gray-300 p-3">EBE - Dotations aux amortissements + Reprises sur amortissements</td>
                    <td className="border border-gray-300 p-3">Performance de l&apos;activité principale</td>
                    <td className="border border-gray-300 p-3">5-15% du CA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium bg-red-50">Résultat courant</td>
                    <td className="border border-gray-300 p-3">Résultat d&apos;exploitation + Résultat financier</td>
                    <td className="border border-gray-300 p-3">Performance globale récurrente</td>
                    <td className="border border-gray-300 p-3">3-10% du CA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium bg-gray-50">Résultat net</td>
                    <td className="border border-gray-300 p-3">Résultat courant + Résultat exceptionnel - Impôts sur les bénéfices</td>
                    <td className="border border-gray-300 p-3">Bénéfice final de l&apos;entreprise</td>
                    <td className="border border-gray-300 p-3">2-8% du CA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Capacité d'Autofinancement */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">La Capacité d&apos;Autofinancement (CAF)</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Méthode soustractive</h4>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">CAF = EBE</p>
                    <p>- Charges financières</p>
                    <p>+ Produits financiers (sauf reprises)</p>
                    <p>- Charges exceptionnelles (sauf VNC)</p>
                    <p>+ Produits exceptionnels (sauf PCEA)</p>
                    <p>- Participation des salariés</p>
                    <p>- Impôts sur les bénéfices</p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-green-800 mb-3">Méthode additive</h4>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">CAF = Résultat net</p>
                    <p>+ Dotations aux amortissements</p>
                    <p>+ Dotations aux provisions</p>
                    <p>- Reprises sur provisions</p>
                    <p>+ Valeur nette comptable des éléments cédés</p>
                    <p>- Produits de cession d&apos;éléments d&apos;actif</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-400">
                <h5 className="font-medium text-yellow-800 mb-2">Interprétation de la CAF</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
                  <div>
                    <p className="font-medium mb-2">Ratios d&apos;analyse :</p>
                    <ul className="space-y-1">
                      <li>• CAF/CA &gt; 10% : Bonne performance</li>
                      <li>• CAF/Dettes financières : Capacité de remboursement</li>
                      <li>• CAF/Investissements : Capacité d&apos;autofinancement</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Utilisation de la CAF :</p>
                    <ul className="space-y-1">
                      <li>• Remboursement des emprunts</li>
                      <li>• Financement des investissements</li>
                      <li>• Distribution de dividendes</li>
                      <li>• Renforcement des fonds propres</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-amber-800 mb-4">Cascade des SIG - Vue synthétique</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white rounded p-3">
                  <span className="font-medium">Chiffre d&apos;affaires</span>
                  <span className="text-amber-600">Point de départ</span>
                </div>
                <div className="text-center text-amber-600">↓</div>
                <div className="flex items-center justify-between bg-white rounded p-3">
                  <span className="font-medium">Production de l&apos;exercice</span>
                  <span className="text-amber-600">CA + Production stockée ± Variation stocks</span>
                </div>
                <div className="text-center text-amber-600">↓</div>
                <div className="flex items-center justify-between bg-white rounded p-3">
                  <span className="font-medium">Valeur ajoutée</span>
                  <span className="text-amber-600">Production - Consommations externes</span>
                </div>
                <div className="text-center text-amber-600">↓</div>
                <div className="flex items-center justify-between bg-white rounded p-3">
                  <span className="font-medium">Excédent Brut d&apos;Exploitation (EBE)</span>
                  <span className="text-amber-600">VA - Charges de personnel - Impôts</span>
                </div>
                <div className="text-center text-amber-600">↓</div>
                <div className="flex items-center justify-between bg-white rounded p-3">
                  <span className="font-medium">Résultat d&apos;exploitation</span>
                  <span className="text-amber-600">EBE - Dotations + Reprises</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Les ratios de rentabilité</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-blue-800">Rentabilité économique</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="font-medium text-gray-800">ROA (Return on Assets)</p>
                    <p className="text-sm text-gray-600">Résultat d&apos;exploitation / Total actif</p>
                    <p className="text-xs text-blue-600">Norme : &gt; 5%</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-medium text-gray-800">ROCE</p>
                    <p className="text-sm text-gray-600">EBIT / Capitaux employés</p>
                    <p className="text-xs text-blue-600">Norme : &gt; 8%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Percent className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-green-800">Rentabilité financière</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="font-medium text-gray-800">ROE (Return on Equity)</p>
                    <p className="text-sm text-gray-600">Résultat net / Capitaux propres</p>
                    <p className="text-xs text-green-600">Norme : &gt; 10%</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-medium text-gray-800">Rentabilité des fonds propres</p>
                    <p className="text-sm text-gray-600">Résultat net / Fonds propres moyens</p>
                    <p className="text-xs text-green-600">Performance du capital</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold text-purple-800">Rentabilité commerciale</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="font-medium text-gray-800">Marge nette</p>
                    <p className="text-sm text-gray-600">Résultat net / Chiffre d&apos;affaires</p>
                    <p className="text-xs text-purple-600">Norme : &gt; 3%</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-medium text-gray-800">Marge d&apos;exploitation</p>
                    <p className="text-sm text-gray-600">Résultat d&apos;exploitation / CA</p>
                    <p className="text-xs text-purple-600">Norme : &gt; 5%</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Exemple pratique complet */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Exemple pratique : Entreprise SIGMA</h3>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Données du compte de résultat (k€)</h4>
                    <div className="bg-white rounded p-4 text-sm space-y-1">
                      <p>Chiffre d&apos;affaires : 3 000</p>
                      <p>Achats de marchandises : 1 800</p>
                      <p>Variation de stocks : -50</p>
                      <p>Autres charges externes : 300</p>
                      <p>Charges de personnel : 600</p>
                      <p>Impôts et taxes : 50</p>
                      <p>Dotations aux amortissements : 150</p>
                      <p>Charges financières : 80</p>
                      <p>Impôts sur les bénéfices : 30</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Calcul des SIG (k€)</h4>
                    <div className="bg-white rounded p-4 text-sm space-y-1">
                      <p><strong>Marge commerciale :</strong> 1 200</p>
                      <p><strong>Production :</strong> 3 000</p>
                      <p><strong>Valeur ajoutée :</strong> 900</p>
                      <p><strong>EBE :</strong> 250</p>
                      <p><strong>Résultat d&apos;exploitation :</strong> 100</p>
                      <p><strong>Résultat courant :</strong> 20</p>
                      <p><strong>Résultat net :</strong> -10</p>
                      <p><strong>CAF :</strong> 140</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded p-4 border-l-4 border-blue-500">
                    <h5 className="font-medium text-gray-800 mb-2">Ratios de marge</h5>
                    <div className="text-xs space-y-1">
                      <p>Marge commerciale/CA : 40%</p>
                      <p>VA/CA : 30%</p>
                      <p>EBE/CA : 8,3%</p>
                      <p>Résultat exploitation/CA : 3,3%</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded p-4 border-l-4 border-green-500">
                    <h5 className="font-medium text-gray-800 mb-2">Répartition de la VA</h5>
                    <div className="text-xs space-y-1">
                      <p>Personnel : 66,7%</p>
                      <p>État : 5,6%</p>
                      <p>Prêteurs : 8,9%</p>
                      <p>Entreprise : 18,8%</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded p-4 border-l-4 border-purple-500">
                    <h5 className="font-medium text-gray-800 mb-2">Diagnostic</h5>
                    <div className="text-xs space-y-1">
                      <p>✓ Bonne marge commerciale</p>
                      <p>⚠ Charges de personnel élevées</p>
                      <p>✓ EBE positif</p>
                      <p>⚠ Résultat net négatif</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ratios de gestion et d&apos;activité</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Catégorie</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Ratio</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Formule</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Norme indicative</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Interprétation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={3} className="border border-gray-300 p-3 font-medium bg-blue-50">Rotation</td>
                    <td className="border border-gray-300 p-3">Rotation de l&apos;actif</td>
                    <td className="border border-gray-300 p-3">CA / Total actif</td>
                    <td className="border border-gray-300 p-3">&gt; 1</td>
                    <td className="border border-gray-300 p-3">Efficacité d&apos;utilisation des actifs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Rotation des stocks</td>
                    <td className="border border-gray-300 p-3">Coût des ventes / Stock moyen</td>
                    <td className="border border-gray-300 p-3">4-12 fois/an</td>
                    <td className="border border-gray-300 p-3">Vitesse d&apos;écoulement des stocks</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Rotation des créances</td>
                    <td className="border border-gray-300 p-3">CA TTC / Créances clients</td>
                    <td className="border border-gray-300 p-3">6-12 fois/an</td>
                    <td className="border border-gray-300 p-3">Vitesse de recouvrement</td>
                  </tr>
                  <tr>
                    <td rowSpan={3} className="border border-gray-300 p-3 font-medium bg-green-50">Délais (jours)</td>
                    <td className="border border-gray-300 p-3">Délai de stockage</td>
                    <td className="border border-gray-300 p-3">(Stock × 360) / Coût des ventes</td>
                    <td className="border border-gray-300 p-3">30-90 jours</td>
                    <td className="border border-gray-300 p-3">Durée moyenne de stockage</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Délai de recouvrement</td>
                    <td className="border border-gray-300 p-3">(Créances × 360) / CA TTC</td>
                    <td className="border border-gray-300 p-3">30-60 jours</td>
                    <td className="border border-gray-300 p-3">Délai moyen de paiement clients</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Délai de règlement</td>
                    <td className="border border-gray-300 p-3">(Dettes fournisseurs × 360) / Achats TTC</td>
                    <td className="border border-gray-300 p-3">30-90 jours</td>
                    <td className="border border-gray-300 p-3">Délai moyen de paiement fournisseurs</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="border border-gray-300 p-3 font-medium bg-purple-50">Productivité</td>
                    <td className="border border-gray-300 p-3">Productivité du travail</td>
                    <td className="border border-gray-300 p-3">Valeur ajoutée / Effectif</td>
                    <td className="border border-gray-300 p-3">Variable/secteur</td>
                    <td className="border border-gray-300 p-3">VA créée par salarié</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Productivité du capital</td>
                    <td className="border border-gray-300 p-3">Valeur ajoutée / Immobilisations</td>
                    <td className="border border-gray-300 p-3">&gt; 0,5</td>
                    <td className="border border-gray-300 p-3">Efficacité des investissements</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Cycle d'exploitation */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Analyse du cycle d&apos;exploitation</h3>
              
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-cyan-500">
                    <h4 className="font-medium text-gray-800 mb-3">Cycle de stockage</h4>
                    <p className="text-sm text-gray-600 mb-2">Durée entre l&apos;achat et la vente</p>
                    <div className="text-xs space-y-1">
                      <p>• Matières premières : 15-45 jours</p>
                      <p>• Produits finis : 30-90 jours</p>
                      <p>• Marchandises : 30-120 jours</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-medium text-gray-800 mb-3">Cycle de crédit</h4>
                    <p className="text-sm text-gray-600 mb-2">Durée entre la vente et l&apos;encaissement</p>
                    <div className="text-xs space-y-1">
                      <p>• B2B : 30-60 jours</p>
                      <p>• B2C : 0-30 jours</p>
                      <p>• Export : 60-120 jours</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
                    <h4 className="font-medium text-gray-800 mb-3">Cycle fournisseurs</h4>
                    <p className="text-sm text-gray-600 mb-2">Durée entre l&apos;achat et le paiement</p>
                    <div className="text-xs space-y-1">
                      <p>• Fournisseurs : 30-90 jours</p>
                      <p>• Services : 30-60 jours</p>
                      <p>• Négociation possible</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded border-l-4 border-yellow-400">
                  <p className="font-medium text-yellow-800 mb-2">Formule du cycle d&apos;exploitation :</p>
                  <p className="text-sm text-yellow-700">
                    <strong>Cycle d&apos;exploitation = Délai de stockage + Délai de recouvrement - Délai de règlement fournisseurs</strong>
                  </p>
                  <p className="text-xs text-yellow-600 mt-2">
                    Un cycle court améliore la trésorerie et réduit le BFR
                  </p>
                </div>
              </div>
            </div>
            
            {/* Analyse comparative sectorielle */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Analyse comparative sectorielle</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left font-semibold">Secteur</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Marge brute</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">EBE/CA</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Résultat net/CA</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">ROE</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Délai stocks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-blue-50">Commerce de détail</td>
                      <td className="border border-gray-300 p-3">25-35%</td>
                      <td className="border border-gray-300 p-3">3-8%</td>
                      <td className="border border-gray-300 p-3">1-4%</td>
                      <td className="border border-gray-300 p-3">8-15%</td>
                      <td className="border border-gray-300 p-3">45-90 jours</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium bg-green-50">Industrie manufacturière</td>
                      <td className="border border-gray-300 p-3">20-40%</td>
                      <td className="border border-gray-300 p-3">8-15%</td>
                      <td className="border border-gray-300 p-3">3-8%</td>
                      <td className="border border-gray-300 p-3">10-20%</td>
                      <td className="border border-gray-300 p-3">60-120 jours</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-purple-50">Services</td>
                      <td className="border border-gray-300 p-3">40-70%</td>
                      <td className="border border-gray-300 p-3">10-25%</td>
                      <td className="border border-gray-300 p-3">5-15%</td>
                      <td className="border border-gray-300 p-3">15-30%</td>
                      <td className="border border-gray-300 p-3">0-30 jours</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium bg-yellow-50">BTP</td>
                      <td className="border border-gray-300 p-3">15-30%</td>
                      <td className="border border-gray-300 p-3">5-12%</td>
                      <td className="border border-gray-300 p-3">2-6%</td>
                      <td className="border border-gray-300 p-3">8-18%</td>
                      <td className="border border-gray-300 p-3">30-90 jours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-5 w-5 text-purple-600" />
                <h3 className="font-semibold text-purple-800">Analyse de la marge et de la valeur ajoutée</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded p-4">
                  <h4 className="font-medium text-purple-700 mb-2">Marge commerciale</h4>
                  <p className="text-sm text-purple-600">Ventes - Coût d&apos;achat des marchandises vendues</p>
                  <p className="text-xs text-purple-500 mt-1">Activité de négoce</p>
                </div>
                <div className="bg-white rounded p-4">
                  <h4 className="font-medium text-purple-700 mb-2">Marge de production</h4>
                  <p className="text-sm text-purple-600">Production vendue - Coût de production</p>
                  <p className="text-xs text-purple-500 mt-1">Activité de production</p>
                </div>
                <div className="bg-white rounded p-4">
                  <h4 className="font-medium text-purple-700 mb-2">Marge globale</h4>
                  <p className="text-sm text-purple-600">Marge commerciale + Marge de production</p>
                  <p className="text-xs text-purple-500 mt-1">Performance globale</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <h4 className="font-medium text-purple-800 mb-2">Répartition de la valeur ajoutée</h4>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-700">Personnel</p>
                    <p className="text-purple-600">50-70% de la VA</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">État (impôts)</p>
                    <p className="text-purple-600">5-15% de la VA</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Prêteurs</p>
                    <p className="text-purple-600">5-20% de la VA</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Entreprise</p>
                    <p className="text-purple-600">15-40% de la VA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-800 mb-3">Méthode mnémotechnique : PROVE</h3>
              <div className="grid md:grid-cols-5 gap-4 text-gray-700">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-blue-600">P</span>
                  </div>
                  <p className="font-medium text-sm">Production</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-green-600">R</span>
                  </div>
                  <p className="font-medium text-sm">Rentabilité</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-purple-600">O</span>
                  </div>
                  <p className="font-medium text-sm">Opérations</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-red-600">V</span>
                  </div>
                  <p className="font-medium text-sm">Valeur ajoutée</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-amber-600">E</span>
                  </div>
                  <p className="font-medium text-sm">EBE</p>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm italic">
                &quot;PROduction, Valeur ajoutée, EBE&quot;
              </p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between pt-8 border-t border-gray-200">
            <Link
              href="/section-1"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Section I - Structure financière
            </Link>
            <Link
              href="/section-3"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Section III - Analyse dynamique
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}