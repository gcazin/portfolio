/**
 * Brands and public services most impersonated in French phishing campaigns.
 *
 * - `domains`: official domains (any subdomain of them is official too), also used as
 *   references for lookalike detection.
 * - `infraDomains`: official technical domains (CDN, APIs…) that are not impersonation targets.
 * - `keywords`: words whose presence in another hostname suggests impersonation.
 * - `commonWord`: the name is an everyday word ("free", "orange"…), so it only counts
 *   as a whole hostname token and never triggers a typo / same-name check on its own.
 *
 * @type {Array<{ name: string, domains: string[], infraDomains?: string[], keywords: string[], commonWord?: boolean }>}
 */
export const BRANDS = [
    { name: 'Ameli (Assurance Maladie)', domains: ['ameli.fr'], keywords: ['ameli', 'assurance-maladie', 'assurancemaladie'] },
    { name: 'Impôts (DGFiP)', domains: ['impots.gouv.fr'], keywords: ['impots', 'impot', 'dgfip'] },
    { name: 'Service-Public.fr', domains: ['service-public.fr', 'service-public.gouv.fr'], keywords: ['servicepublic', 'service-public'] },
    { name: 'ANTAI (amendes)', domains: ['antai.gouv.fr', 'amendes.gouv.fr'], keywords: ['antai', 'amende', 'amendes'] },
    { name: 'ANTS (permis, carte grise)', domains: ['ants.gouv.fr'], keywords: ['ants-gouv', 'cartegrise', 'carte-grise'] },
    { name: 'Mon Compte Formation (CPF)', domains: ['moncompteformation.gouv.fr'], keywords: ['moncompteformation', 'compteformation', 'cpf'] },
    { name: 'CAF', domains: ['caf.fr'], keywords: ['caf', 'allocations-familiales'], commonWord: true },
    { name: 'FranceConnect', domains: ['franceconnect.gouv.fr'], keywords: ['franceconnect'] },
    { name: 'France Travail', domains: ['francetravail.fr', 'pole-emploi.fr'], keywords: ['francetravail', 'pole-emploi', 'poleemploi'] },
    { name: 'URSSAF', domains: ['urssaf.fr'], keywords: ['urssaf'] },
    { name: 'Assurance Retraite', domains: ['lassuranceretraite.fr', 'info-retraite.fr'], keywords: ['assuranceretraite', 'assurance-retraite'] },
    { name: 'Crit\'Air', domains: ['certificat-air.gouv.fr'], keywords: ['critair', 'crit-air', 'certificat-air'] },
    { name: 'La Poste', domains: ['laposte.fr', 'laposte.net', 'lapostemobile.fr'], keywords: ['laposte', 'la-poste'] },
    { name: 'La Banque Postale', domains: ['labanquepostale.fr'], keywords: ['labanquepostale', 'banquepostale', 'banque-postale'] },
    { name: 'Colissimo', domains: ['colissimo.fr'], keywords: ['colissimo'] },
    { name: 'Chronopost', domains: ['chronopost.fr'], keywords: ['chronopost'] },
    { name: 'Mondial Relay', domains: ['mondialrelay.fr', 'mondialrelay.com'], keywords: ['mondialrelay', 'mondial-relay'] },
    { name: 'DHL', domains: ['dhl.fr', 'dhl.com', 'dhl.de'], keywords: ['dhl'], commonWord: true },
    { name: 'UPS', domains: ['ups.com'], keywords: ['ups'], commonWord: true },
    { name: 'DPD', domains: ['dpd.fr', 'dpd.com'], keywords: ['dpd'], commonWord: true },
    { name: 'Crédit Agricole', domains: ['credit-agricole.fr', 'credit-agricole.com'], infraDomains: ['ca-paris.fr'], keywords: ['credit-agricole', 'creditagricole'] },
    { name: 'Société Générale', domains: ['societegenerale.fr', 'societegenerale.com'], infraDomains: ['particuliers.sg.fr'], keywords: ['societegenerale', 'societe-generale'] },
    { name: 'BNP Paribas', domains: ['bnpparibas', 'bnpparibas.com', 'bnpparibas.fr', 'mabanque.bnpparibas'], keywords: ['bnpparibas', 'bnp-paribas', 'bnp'] },
    { name: 'LCL', domains: ['lcl.fr'], keywords: ['lcl'], commonWord: true },
    { name: 'Crédit Mutuel', domains: ['creditmutuel.fr', 'creditmutuel.com'], keywords: ['creditmutuel', 'credit-mutuel'] },
    { name: 'CIC', domains: ['cic.fr'], keywords: ['cic'], commonWord: true },
    { name: 'Caisse d\'Épargne', domains: ['caisse-epargne.fr'], keywords: ['caisse-epargne', 'caisseepargne', 'caissedepargne'] },
    { name: 'Banque Populaire', domains: ['banquepopulaire.fr'], keywords: ['banquepopulaire', 'banque-populaire'] },
    { name: 'BoursoBank', domains: ['boursobank.com', 'boursorama.com', 'boursorama-banque.com'], keywords: ['boursobank', 'boursorama'] },
    { name: 'Fortuneo', domains: ['fortuneo.fr'], keywords: ['fortuneo'] },
    { name: 'Hello bank!', domains: ['hellobank.fr'], keywords: ['hellobank'] },
    { name: 'Revolut', domains: ['revolut.com'], keywords: ['revolut'] },
    { name: 'PayPal', domains: ['paypal.com', 'paypal.fr', 'paypal.me'], infraDomains: ['paypalobjects.com'], keywords: ['paypal'] },
    { name: 'Lydia / Sumeria', domains: ['lydia-app.com', 'lydia.me', 'sumeria.eu'], keywords: ['lydia-app', 'sumeria'], commonWord: true },
    { name: 'Orange', domains: ['orange.fr', 'orange.com', 'orange-business.com', 'sosh.fr'], keywords: ['orange', 'sosh'], commonWord: true },
    { name: 'SFR', domains: ['sfr.fr', 'red-by-sfr.fr'], keywords: ['sfr'], commonWord: true },
    { name: 'Bouygues Telecom', domains: ['bouyguestelecom.fr'], infraDomains: ['bouygtel.fr'], keywords: ['bouyguestelecom', 'bouygues-telecom', 'bouygues'] },
    { name: 'Free', domains: ['free.fr', 'freebox.fr', 'free-mobile.fr'], keywords: ['freemobile', 'free-mobile', 'freebox'], commonWord: true },
    { name: 'EDF', domains: ['edf.fr', 'edf.com'], keywords: ['edf'], commonWord: true },
    { name: 'Engie', domains: ['engie.fr', 'engie.com'], keywords: ['engie'] },
    { name: 'TotalEnergies', domains: ['totalenergies.fr', 'totalenergies.com'], keywords: ['totalenergies', 'total-energies'] },
    { name: 'Amazon', domains: ['amazon.fr', 'amazon.com', 'amazon.de', 'amazon.co.uk', 'amazon.it', 'amazon.es', 'amazon.be', 'amazon.nl', 'amazon.ca'], infraDomains: ['amazonaws.com', 'media-amazon.com', 'ssl-images-amazon.com', 'primevideo.com'], keywords: ['amazon'] },
    { name: 'Leboncoin', domains: ['leboncoin.fr'], keywords: ['leboncoin', 'le-bon-coin', 'lebon-coin'] },
    { name: 'Vinted', domains: ['vinted.fr', 'vinted.com', 'vinted.net'], keywords: ['vinted'] },
    { name: 'Cdiscount', domains: ['cdiscount.com', 'cdiscount.fr'], keywords: ['cdiscount'] },
    { name: 'Fnac', domains: ['fnac.com'], infraDomains: ['fnac-static.com'], keywords: ['fnac'], commonWord: true },
    { name: 'Netflix', domains: ['netflix.com'], infraDomains: ['nflxext.com', 'nflximg.net'], keywords: ['netflix'] },
    { name: 'Apple', domains: ['apple.com', 'icloud.com', 'apple.fr'], infraDomains: ['me.com', 'mzstatic.com'], keywords: ['apple', 'appleid', 'apple-id', 'icloud'], commonWord: true },
    { name: 'Microsoft', domains: ['microsoft.com', 'outlook.com', 'hotmail.com', 'hotmail.fr'], infraDomains: ['live.com', 'office.com', 'msn.com', 'bing.com', 'office365.com', 'sharepoint.com', 'onedrive.live.com', 'microsoftonline.com'], keywords: ['microsoft', 'outlook', 'office365', 'hotmail', 'onedrive', 'sharepoint'] },
    { name: 'Google', domains: ['google.com', 'google.fr', 'gmail.com', 'youtube.com'], infraDomains: ['googleapis.com', 'googleusercontent.com', 'gstatic.com', 'withgoogle.com', 'goo.gl', 'googlesyndication.com', 'googletagmanager.com', 'google-analytics.com', 'doubleclick.net', 'googlevideo.com', 'ytimg.com'], keywords: ['google', 'gmail'] },
    { name: 'Meta (Facebook, Instagram, WhatsApp)', domains: ['facebook.com', 'instagram.com', 'whatsapp.com'], infraDomains: ['fb.com', 'whatsapp.net', 'messenger.com', 'meta.com', 'fbcdn.net', 'cdninstagram.com'], keywords: ['facebook', 'instagram', 'whatsapp'] },
    { name: 'SNCF', domains: ['sncf-connect.com', 'sncf.com', 'sncf.fr', 'ouigo.com', 'tgvmax.fr'], keywords: ['sncf', 'ouigo'] },
    { name: 'RATP / Île-de-France Mobilités', domains: ['ratp.fr', 'iledefrance-mobilites.fr', 'navigo.fr'], keywords: ['ratp', 'navigo', 'iledefrance-mobilites'] },
    { name: 'Doctolib', domains: ['doctolib.fr', 'doctolib.com'], keywords: ['doctolib'] },
];
