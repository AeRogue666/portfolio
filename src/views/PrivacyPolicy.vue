<script setup>
    import app from '@/App.vue';
    import { reactive } from 'vue';
    import { cookiesList } from '@/assets/js/ProjectArraysList';
    const { ApiURL, Language } = app.components;
    let cookiesProvider = reactive([]);
    cookiesList.filter(content => content.code === Language).map(content => {return content.data.map(cookie => {return cookiesProvider.push(cookie)})});
</script>

<template>
    <article class="flex flex-col items-center" v-if="Language === 'fr-FR'">
        <h1 class="uppercase">Politique de confidentialité</h1>
        <div class="flex flex-col items-center max-w-screen-lg">
            <div class="flex flex-col items-start p-4">
                <p>Cette politique de confidentialité a pour objectif de vous expliquer pourquoi nous recueillons vos données et comment nous nous engageons à les protéger.</p>
                <p>Le site aureldev.fr, (ci-après le « Site » ou « site ») s’engage en faveur de la protection de vos données personnelles et de votre vie privée.</p>
                <p class="mt-2">À ce titre, et en application du Règlement Général de Protection des Données (ci-après dénommé «RGPD»), nous vous communiquons ci-après les conditions dans lesquelles vos données personnelles sont appelées à être traitées par nos soins.</p>
            </div>
        </div>
        <div class="flex flex-col items-center pb-4 max-w-screen-lg">
            <div id="personaldata" class="flex flex-col items-center pb-4">
                <h2 class="text-center">Quelles données personnelles traitons-nous ?</h2>
                <div class="flex flex-col items-center w-full">
                    <h3>Finalités</h3>
                    <div class="flex flex-col items-start w-full p-4">
                        <p>Nous sommes susceptibles de recueillir et de conserver vos données à caractère personnel, notamment pour :</p>
                        <ul role="list" class="w-full marker:text-sky-600 pl-5 py-5 space-y-3">
                            <li class="list-disc">Traiter et répondre à vos messages</li>
                            <li class="list-disc">Gérer vos inscriptions à nos newsletters (en cours)</li>
                            <li class="list-disc">Etablir et assurer le suivi de la relation commerciale pouvant découler de vos messages</li>
                            <li class="list-disc">Gérer le bon fonctionnement et la personnalisation des services</li>
                            <li class="list-disc">Détection d’attaques et recourt contentieux contre la fraude</li>
                            <li class="list-disc">Mémoriser vos choix quant à l’utilisation des cookies</li>
                            <li class="list-disc">Traiter et répondre à vos demandes d’exercice de droits</li>
                            <li class="list-disc">Pour répondre aux exigences réglementaires en vigueur ou en cours d’adoption</li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col items-center w-full">
                    <h3>Catégories des données</h3>
                    <div class="flex flex-col items-start w-full p-4">
                        <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                            <li class="list-disc">Des coordonnées (par exemple numéro de téléphone, email)</li>
                            <li class="list-disc">Des informations techniques et de localisations générées dans le cadre de l’utilisation de nos services (adresse IP, etc.)</li>
                        </ul>
                        <p>Ces informations peuvent servir à vous contacter mais aussi pour les journaux applicatifs.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-center w-full">
                    <h3>Journaux applicatifs</h3>
                    <div class="flex flex-col items-start w-full p-4">
                        <p>Les journaux applicatifs collectent l'adresse IP lors de la navigation sur le site et l'adresse mail lors de l'utilisation des formulaires.</p>
                        <p>Les informations dites "coordonnées personnelles" tel que l'adresse mail servent à vous contacter mais aussi pour des besoins de réponse à incident, notamment en cas d'attaques ou de tentatives d'attaques informatiques.</p>
                        <p>La durée de conservation de ces journaux applicatifs est d’un an.</p>
                    </div>
                </div>
            </div>
            <div id="legalbasis" class="flex flex-col items-center pb-4">
                <h2 class="text-center">Fondement juridiques des traitements</h2>
                <div class="flex flex-col items-start p-4">
                    <p>Les traitements de données à caractère personnel mis en œuvre sont fondés :</p>
                    <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                        <li class="list-disc">Soit sur le consentement de la personne concernée (Article 6.1.a du RGPD) pour tous les traitements qui nécessitent le recueil préalable du consentement. Dans les formulaires en ligne, les champs obligatoires sont marqués d’un astérisque. A défaut de réponse aux questions obligatoires, nous ne serons pas en mesure de vous fournir les services demandés.
                        </li>
                        <li class="list-disc">Soit pour l’exécution d’un contrat ou l’exécution de mesures précontractuelles,</li>
                        <li class="list-disc">Soit pour la poursuite d’un intérêt légitime (Article 6.1.e du RGPD).</li>
                        <li class="list-disc">Soit pour le respect d’une obligation légale ou règlementaire</li>
                    </ul>
                    <p>Vos données sont conservées pour la durée nécessaire à l’accomplissement des finalités mentionnées ci-dessus.</p>
                    <p>La durée de conservation des données personnelles des Clients dépend de la finalité concernée.</p>
                    <p>A défaut d’une quelconque réalisation, les données personnelles sont supprimées dans les délais recommandés par la Commission Nationale Informatique et Libertés (CNIL), au terme d’un délai de trois ans à compter de leur collecte, sous réserve :</p>
                    <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                        <li class="list-disc">des possibilités et obligations légales en matière d’archivage</li>
                        <li class="list-disc">des obligations de conservation de certaines données, à des fins probatoires, et/ou d’anonymisation de celles-ci.</li>
                    </ul>
                    <p>Les données personnelles du Client collectées et traitées, pour les besoins d’exécution des offres et services, sont conservées pour la durée nécessaire à la gestion de la relation contractuelle, à l'exception des informations collectées et traitées via le formulaire de <a href="/contact">Contact</a>, la durée de conservation des données est de 5 ans.</p>
                    <p>Par dérogation, les données personnelles requises pour à l’établissement de la preuve d’un droit ou d’un contrat sont archivées conformément aux dispositions légales (5 ou 10 ans après la fin de la relation commerciale selon le cas).</p>
                </div>
                <div class="flex flex-col items-center">
                    <h3>Quels sont les destinataires de vos données ?</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>Vos données personnelles sont destinées à notre site.</p>
                        <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                            <li class="list-disc">Nos services internes : Elles sont traitées par le personnel gérant le
                                Site.</li>
                            <li class="list-disc">Prestataire e-mail (comme Mailjet ou Sendgrid)</li>
                            <li class="list-disc">Service de CDN (comme Cloudflare)</li>
                        </ul>
                        <p>Nous devons parfois permettre à nos partenaires de traiter, en notre nom, les informations personnelles que nous détenons sur vous aux fins énoncées dans cette politique ou pour toute autre raison requise par la loi.</p>
                        <p><b>Les données personnelles des Clients collectées sont hébergées en France.</b></p>
                        <p>Dans le cas du recours à un prestataire situé en dehors de l’Union européenne, nous nous engageons à vérifier que des mesures appropriées ont été mises en place afin que les données personnelles bénéficient d’un niveau de protection adéquat.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>Comment le Site préserve la sécurité de vos données ?</h3>
                    <div class="flex flex-col items-start p-4">
                        <p> Nous mettons en place toutes les mesures organisationnelles et techniques permettant d’assurer un niveau approprié de sécurité à vos données personnelles, et notamment d’éviter toute perte de confidentialité, d’intégrité ou d’accessibilité.</p>
                        <p>Nous effectuons fréquemment la sauvegarde des données, Dans la mesure du possible, nous limitons l'accès aux informations personnelles aux seules personnes qui ont besoin de les traiter, Met en place des mesures techniques et organisationnelles pour assurer que la conservation des données personnelles des Clients est sécurisée et ce, pendant la durée nécessaire à l’exercice des finalités poursuivies.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>Quels sont vos droits sur vos données personnelles ?</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>Conformément à la Réglementation Applicable, vous disposez des droits suivants :</p>
                        <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                            <li class="list-disc"><strong>Un droit de rectification</strong> : vous avez le droit d’obtenir la rectification des données inexactes vous concernant. Vous avez également le droit de compléter les données incomplètes vous concernant, en fournissant une déclaration complémentaire. En cas d’exercice de ce droit, nous nous engageons à communiquer toute rectification à l’ensemble des destinataires de vos données,</li>
                            <li class="list-disc"><strong>Un droit d’effacement</strong> : dans certains cas, vous avez le droit d’obtenir l’effacement de vos données. Cependant, ceci n’est pas un droit absolu et nous pouvons pour des raisons légales ou légitimes conserver ces données.</li>
                            <li class="list-disc"><strong>Un droit à la limitation du traitement</strong> : dans certains cas, vous avez le droit d’obtenir la limitation du traitement sur vos données,</li>
                            <li class="list-disc"><strong>Un droit à la portabilité des données</strong> : vous avez le droit de recevoir vos données que vous nous avez fournies, dans un format structuré, couramment utilisé et lisible par une machine, pour votre usage personnel ou pour les transmettre à un tiers de votre choix. Ce droit ne s’applique que lorsque le traitement de vos données est basé sur votre consentement, sur un contrat ou que ce traitement est effectué par des moyens automatisés,</li>
                            <li class="list-disc"><strong>Un droit d’opposition au traitement</strong> : vous avez le droit de vous opposer à tout moment au traitement de vos données pour les traitements basés sur notre intérêt légitime, une mission d’intérêt public et ceux à des fins de prospection commerciale. Ceci n’est pas un droit absolu et nous pouvons pour des raisons légales ou légitimes refuser votre demande d’opposition,</li>
                            <li class="list-disc"><strong>Le droit de retirer votre consentement à tout moment</strong> : vous pouvez retirer votre consentement au traitement de vos données lorsque le traitement est basé sur votre consentement. Le retrait du consentement ne compromet pas la licéité du traitement fondé sur le consentement effectué avant ce retrait,</li>
                            <li class="list-disc"><strong>Le droit de déposer une plainte auprès d’une autorité de contrôle</strong> : vous avez le droit de contacter votre autorité de protection des données pour vous plaindre de nos pratiques de protection des données personnelles,</li>
                        </ul>
                        <p>En application du <a href="https://donnees.net/conformite-rgpd">RGPD</a>, les conditions d’exercice de ces droits peuvent varier selon la base de licéité du traitement mentionné dans le premier paragraphe.</p>
                        <p>Nous donnerons suite à tout exercice de droit dans les meilleurs délais et en tout état de cause dans un délai de 30 jours à compter de la réception de la demande.</p>
                        <p>Nous nous réservons le droit :</p>
                        <ul role="list" class="marker:text-sky-600 pl-5 pt-5 space-y-3 text-slate-500">
                            <li class="list-disc">De demander une preuve de l’identité du demandeur en cas de doute raisonnable sur cette dernière et ce afin de respecter son obligation de confidentialité,</li>
                            <li class="list-disc">De prolonger le délai de réponse de deux mois, informant alors le demandeur de cette prolongation et des motifs du report dans un délai d’un mois à compter de la réception de la demande,</li>
                            <li class="list-disc">De refuser de répondre à un exercice de droit si celui-ci était considéré comme abusif (au vu de leur nombre, de leur caractère répétitif ou systématique ou de leur caractère injurieux).</li>
                        </ul>
                    </div>
                </div>
                <div id="contactus" class="flex flex-col items-center">
                    <h3>Qui contacter pour toutes les demandes liées au RGPD ?</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>Pour exercer vos droits, vous pouvez nous contacter :</p>
                        <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                            <li class="list-disc"> Par mail à contact@aureldev.fr</li>
                            <li class="list-disc"> Par le formulaire de contact disponible sur la page de <a href="/contact">Contact</a> du Site</li>
                        </ul>
                        <p>Le Directeur de la publication est AurelDev contactable par le biais de l'adresse mail ci-dessus.</p>
                        <p>Si, en dépit de nos efforts et de nos engagements, vous estimiez que vos droits concernant vos données personnelles n’étaient pas respectés, vous pouvez adresser une réclamation auprès de la Commission Nationale Informatique et Libertés :</p>
                        <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                            <li class="list-disc">
                                Par voie électronique : <a href="https://www.cnil.fr/fr/plaintes">https://www.cnil.fr/fr/plaintes</a>
                            </li>
                            <li class="list-disc">
                                Par courrier à l'adresse suivante: 
                                <b class="text-lg">Commission  Nationale de l'Informatique et des Libertés 3 Place de Fontenoy - TSA 80715 75334 PARIS CEDEX 07</b>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>Réserve de modification de la Politique de protection des données</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>La présente Politique de protection des données personnelles peut être amenée à évoluer.</p>
                        <p>Elles ont été élaborées à partir d’un modèle libre qui peut être téléchargé sur le site <a href="https://donnees.net/">https://donnees.net</a>.</p>
                        <p>Comme nous développons constamment nos services, nous nous réservons le droit de modifier cette Politique de confidentialité, conformément aux dispositions légales en vigueur.</p>
                        <p>Toute modification est publiée sur ce document en temps opportun.</p>
                        <p>Nous vous conseillons de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications ou mises à jour apportées à notre politique de confidentialité.
                        </p>
                    </div>
                </div>
            </div>
            <div id="cookiespolicy" class="flex flex-col items-center pb-4">
                <h2 class="text-center">Politique de Cookies</h2>
                <div class="flex flex-col items-center">
                    <h3>Quels sont les cookies et traceurs que nous utilisons ?</h3>
                    <div class="flex flex-col items-center pt-4">
                        <p class="text-center">Aucun cookie. Nous utilisons le localStorage et SessionStorage.</p>
                        <div class="flex flex-col items-start p-4">
                            <p>Ces derniers permettent au site de fonctionner de manière optimale, notamment en permettant de faciliter la navigation ou pour gérer le rendu visuel du Site pour des personnes en situation de handicap.</p>
                            <p>Vous pouvez vous y opposer et les supprimer en utilisant les paramètres de votre navigateur ou la page cependant votre expérience utilisateur risque d’être dégradée de façon non mesurable et n'engage en aucun cas notre responsabilité.</p>
                            <table class="block w-full text-left font-semibold border">
                                <thead>
                                    <tr class="bg-blue-600">
                                        <th class="w-1/4 px-4 border-r-2">
                                            <p>Nom de la valeur</p>
                                        </th>
                                        <th class="w-auto px-4 border-r-2">
                                            <p>Editeur</p>
                                        </th>
                                        <th class="w-auto px-4 border-r-2">
                                            <p>Finalité</p>
                                        </th>
                                        <th class="w-1/4 px-4">
                                            <p>Durée de conservation</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="cookie of cookiesProvider" :key="cookie.id">
                                        <td class="px-4 border-r-2">{{ cookie.name }}</td>
                                        <td class="px-4 border-r-2">{{ cookie.publisher }}</td>
                                        <td class="px-4 border-r-2">{{ cookie.purpose }}</td>
                                        <td class="px-4 border-r-2">{{ cookie.retention }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3 class="text-center">Pourquoi n'y a t-il pas de bandeau cookies par défaut sur le Site comme sur les autres sites ?</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>Lors de l'arrivée sur le Site, les seules informations déposés sur votre navigateur sont strictement nécessaires au fonctionnement et aux opérations d'administration courante du Site conformément à la réglementation applicable.</p>
                        <p>Le bandeau n'est donc aucunement nécessaire car votre consentement n'est pas exigé.</p>
                        <p>De plus, tout cookie qui serait déposé sur votre navigateur n'est pas de notre ressort.</p>
                        <p>Le site Github, hébergeur de notre site utilise des technologies nécessitant l'usage de cookies.</p>
                        <p>En naviguant sur notre site vous acceptez les <a href="https://docs.github.com/fr/site-policy/privacy-policies/github-general-privacy-statement">conditions générales d'utilisations</a> et toutes les règles de Github.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3 class="text-center">Vos préférences concernant les cookies / Moyen d'opposition au dépôt de cookies sur votre navigateur</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>Vous pouvez à tout moment choisir de refuser / désactiver l'ensemble des cookies, à l’exception des Cookies nécessaires au fonctionnement stable du site,</p>
                        <p>sauf si vous vous rendez dans les paramètres de votre navigateur internet et que vous désactivez l'ensemble des cookies du site.</p>
                        <p>Cependant, comme précédemment mentionné, votre expérience utilisateur risque d'être dégradée de manière non mesurable et n'engage en aucun cas notre responsabilité.</p>
                        <p>Vous avez la possibilité de modifier à tout moment vos préférences relatives à la gestion des cookies en suivant les modalités mises en place par Github sur son site.</p>
                        <p>Pour bloquer toute création de cookies, veuillez suivre l'une des procédures suivantes en fonction du navigateur que vous utilisez :</p>
                        <ul role="list" class="marker:text-sky-600 pl-5 pt-5 space-y-3 text-slate-500">
                            <li class="list-disc">
                                <a href="https://support.google.com/chrome/answer/95647?hl=fr" target="_blank">Chrome</a>
                            </li>
                            <li class="list-disc">
                                <a href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur" target="_blank">Firefox</a>
                            </li>
                            <li class="list-disc">
                                <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" >Edge</a>
                            </li>
                            <li class="list-disc">
                                <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank">Safari</a>
                            </li>
                            <li class="list-disc">
                                <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank">Opera</a>
                                (En Anglais - Non disponible en Français)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </article>
    <article class="flex flex-col items-center" v-if="Language === ('en-UK' || 'en_US')">
        <h1 class="uppercase">Privacy policy</h1>
        <div class="flex flex-col items-center max-w-screen-lg">
            <div class="flex flex-col items-start p-4">
                <p>The purpose of this privacy policy is to explain why we collect your data and how we are committed to protecting it.</p>
                <p>The aureldev.fr website (hereinafter the "Website" or "Site") is committed to the protection of your personal data and your privacy.</p>
                <p class="mt-2">As such, and in accordance with the General Data Protection Regulation (hereinafter the 'GDPR'), we hereby inform you of the conditions under which your personal data will be processed by us.</p>
            </div>
        </div>
        <div class="flex flex-col items-center pb-4 max-w-screen-lg">
            <div id="personaldata" class="flex flex-col items-center pb-4">
                <h2 class="text-center">Which personal data do we process?</h2>
                <div class="flex flex-col items-center w-full">
                    <h3>Purposes</h3>
                    <div class="flex flex-col items-start w-full p-4">
                        <p>We may collect and store your personal information for the following purposes:</p>
                        <ul role="list" class="w-full marker:text-sky-600 pl-5 py-5 space-y-3">
                            <li class="list-disc">To process and respond to your messages</li>
                            <li class="list-disc">To manage your subscriptions to our newsletters (ongoing)</li>
                            <li class="list-disc">To establish and monitor the commercial relationship that may be created as a result of your messages</li>
                            <li class="list-disc">To manage the smooth running and personalisation of the services we provide</li>
                            <li class="list-disc">To detect attacks and take legal action against fraud</li>
                            <li class="list-disc">To remember your choices regarding the use of cookies</li>
                            <li class="list-disc">To process and respond to your requests fpr the exercise of your rights</li>
                            <li class="list-disc">To comply with regulatory requirements that are in force or are in the process of being adopted.</li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col items-center w-full">
                    <h3>Data categories</h3>
                    <div class="flex flex-col items-start w-full p-4">
                        <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                            <li class="list-disc">Contact details (e.g. telephone number, email address)</li>
                            <li class="list-disc">Technical and location information generated when using our services (IP address, etc.)</li>
                        </ul>
                        <p>This information may be used for contact purposes and for application logs.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center w-full">
                    <h3>Application logs</h3>
                    <div class="flex flex-col items-start w-full p-4">
                        <p>Application logs collect the IP address when browsing the site and the e-mail address when using forms.</p>
                        <p>Information known as 'personal details', such as the e-mail address, is used to contact you and also for incident response purposes, particularly in the event of attacks or attempted attacks.</p>
                        <p>These application logs are kept for one year.</p>
                    </div>
                </div>
            </div>
            <div id="legalbasis" class="flex flex-col items-center pb-4">
                <h2 class="text-center">Legal basis of processing</h2>
                <div class="flex flex-col items-start p-4">
                    <p>The processing of personal data is based on one of the following legal grounds:</p>
                    <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                        <li class="list-disc">The processing of personal data is only permitted if consent has been obtained from the data subject (Article 6.1.a of the GDPR). Please note that online forms will only be processed if all mandatory fields are completed. Failure to answer the mandatory questions will result in our inability to provide the requested services.</li>
                        <li class="list-disc">The performance of a contract or pre-contractual measures.</li>
                        <li class="list-disc">The pursuit of a legitimate interest (Article 6.1.e of the GDPR).</li>
                        <li class="list-disc">Compliance with a legal or regulatory obligation.</li>
                    </ul>
                    <p>Your data will be retained for as long as is necessary to fulfil the aforementioned purposes.</p>
                    <p>The length of time customers' personal data is kept depends on the purpose for which it is to be used.</p>
                    <p>In the absence of any further action, personal data will be deleted in accordance with the recommendations of the Commission Nationale Informatique et Libertés (CNIL), after a period of three years from the date of collection. However, this may be subject to:</p>
                    <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                        <li class="list-disc">the possibility of archiving data and legal obligations</li>
                        <li class="list-disc">the retention of data for evidential purposes and/or anonymisation</li>
                    </ul>
                    <p>The customer's personal data is collected and processed for the purpose of executing offers and services. This data is kept for the period required to manage the contractual relationship, with the exception of information collected and processed via the <a href="/contact">contact</a> form, which is kept for a period of five years.</p>
                    <p>In accordance with legal requirements, personal data necessary to substantiate a right or contractual obligation is retained for a period of five or ten years, depending on the specific circumstances.</p>
                </div>
                <div class="flex flex-col items-center">
                    <h3>Who will receive your data?</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>The personal data you provide will be used solely for the purposes of our website.</p>
                        <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                            <li class="list-disc">Our internal services are processed by the staff responsible for managing the site.</li>
                            <li class="list-disc">An email service provider (such as Mailjet or Sendgrid)</li>
                            <li class="list-disc">A CDN service (such as Cloudflare)</li>
                        </ul>
                        <p>From time to time, we may require our partners to process the personal information we hold about you on our behalf for the purposes set out in this policy or as otherwise required by law.</p>
                        <p><b>Please be advised that the personal data collected from customers is hosted in France.</b></p>
                        <p>In the event that a service provider is located outside the European Union, we will ensure that the necessary measures have been put in place to guarantee the adequate protection of personal data.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>How does the Site keep your data secure?</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>We have implemented all the necessary organisational and technical measures to guarantee an appropriate level of security for your personal data. In particular, we have taken steps to prevent any loss of confidentiality, integrity or accessibility.</p>
                        <p>We limit access to personal information to only those people who need to process it. We have implemented technical and organisational measures to ensure that customers' personal data is kept securely for as long as is necessary for the purposes for which it is to be used.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>What rights do you have over your personal data?</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>In accordance with the applicable regulations, you are entitled to the following rights:</p>
                        <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                            <li class="list-disc"><strong>Right of rectification</strong>: You have the right to request the rectification of inaccurate data concerning you. Furthermore, you have the right to complete incomplete data concerning you by providing a supplementary declaration. Should you exercise this right, we will communicate any rectification to all recipients of your data.</li>
                            <li class="list-disc"><strong>Right to erasure</strong>: In certain cases, you have the right to request the erasure of your data. However, this is not an absolute right and we may retain this data for legal or legitimate reasons.</li>
                            <li class="list-disc"><strong>Right to restrict processing</strong>: In certain cases, you have the right to limit the processing of your data.</li>
                            <li class="list-disc"><strong>Right to data portability</strong>: You have the right to receive the data you have provided to us in a structured, commonly used and machine-readable format for your personal use or to a third party of your choice. This right only applies where the processing of your data is based on your consent, on a contract or is carried out by automated means.</li>
                            <li class="list-disc"><strong>Right to object to processing</strong>: You have the right to object at any time to the processing of your data for the purposes of our legitimate interest, a task of public interest and commercial prospecting. This is not an absolute right and we may refuse your request to object for legal or legitimate reasons.</li>
                            <li class="list-disc"><strong>Right of withdrawal of consent at any time</strong>: You have the right to withdraw your consent for the processing of your data, provided that this consent is the basis for the processing. The withdrawal of consent does not affect the lawfulness of processing based on consent carried out prior to the withdrawal.</li>
                            <li class="list-disc"><strong>Right to complain to a regulator</strong>: You have the right to contact your local Data Protection Authority to complain about the way we're handling personal data.</li>
                        </ul>
                        <p>In application fo the <a href="https://donnees.net/conformite-rgpd">GDPR</a>, the conditions for exercising these rights may vary depending on the lawfulness of the processing referred to in the first paragraph.</p>
                        <p>We will respond to any request to exercise your rights as soon as possible and, in any event, within 30 days of the receipt of the request.</p>
                        <p>We reserve the right:</p>
                        <ul role="list" class="marker:text-sky-600 pl-5 pt-5 space-y-3 text-slate-500">
                            <li class="list-disc">In the event of reasonable doubt regarding the identity of the applicant, request proof of identity in order to comply with confidentiality obligations.</li>
                            <li class="list-disc">The response time should be extended by two months, with the applicant informed of the extension and the reasons for it within one month of receipt of the request.</li>
                            <li class="list-disc">In the event that a request is deemed abusive (in view of the number of requests, their repetitive or systematic nature or their abusive nature), the response will be to refuse to respond.</li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>Who should I contact for all GDPR related issues?</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>To exercise your rights, please direct your enquiry to us:</p>
                        <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                            <li class="list-disc">Please direct your enquiry to contact@aureldev.fr</li>
                            <li class="list-disc">Please use the <a href="/contact">contact</a> form available on the website contact page.</li>
                        </ul>
                        <p>The Director of Publications is AurelDev, who can be reached via the email address provided above.</p>
                        <p>In the event that, despite our best efforts and commitments, you feel that your rights with regard to your personal data have not been respected, you are entitled to lodge a complaint with the French Data Protection Authority, the Commission Nationale Informatique et Libertés :</p>
                        <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                            <li class="list-disc">By electronic means: <a href="https://www.cnil.fr/fr/plaintes">https://www.cnil.fr/fr/plaintes</a></li>
                            <li class="list-disc">By post to the followind address: <b class="text-lg">Commission Nationale de l'Informatique et des Libertés 3 Place de Fontenoy - TSA 80715 75334 PARIS CEDEX 07</b></li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>This Privacy Policy is subject to change.</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>Please note that this Privacy Policy may be subject to change at any time.</p>
                        <p>The template is available for download from the website <a href="https://donnees.net/">https://donnees.net</a>.</p>
                        <p>As we are continuously developing our services, we reserve the right to modify this Privacy Policy in accordance with the applicable legal provisions.</p>
                        <p>Any amendments will be duly published on this document in due course.</p>
                        <p>We advise you to check this page regularly for any changes or updates to our Privacy Policy.</p>
                    </div>
                </div>
            </div>
            <div id="cookiespolicy" class="flex flex-col items-center pb-4">
                <h2 class="text-center">Cookies Policy</h2>
                <div class="flex flex-col items-center">
                    <h3>What kind of cookies and trackers are used?</h3>
                    <div class="flex flex-col items-center pt-4">
                        <p class="text-center">No cookie. We are using localStorage and SessionStorage.</p>
                        <div class="flex flex-col items-start p-4">
                            <p>These last allow the site to function optimally, in particular by facilitating navigation or managing the visual presentation of the site for people with disabilities.</p>
                            <p>You can refuse and delete them via your browser settings. However, this may result in an immeasurably reduced user experience for which we cannot be held responsible.</p>
                            <table class="block w-full text-left font-semibold border">
                                <thead>
                                    <tr class="bg-blue-600">
                                        <th class="w-1/4 px-4 border-r-2">
                                            <p>Value name</p>
                                        </th>
                                        <th class="w-auto px-4 border-r-2">
                                            <p>Publisher</p>
                                        </th>
                                        <th class="w-auto px-4 border-r-2">
                                            <p>Purpose</p>
                                        </th>
                                        <th class="w-1/4 px-4">
                                            <p>Retention period</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="cookie of cookiesProvider" :key="cookie.id">
                                        <td class="px-4 border-r-2">{{ cookie.name }}</td>
                                        <td class="px-4 border-r-2">{{ cookie.publisher }}</td>
                                        <td class="px-4 border-r-2">{{ cookie.purpose }}</td>
                                        <td class="px-4 border-r-2">{{ cookie.retention }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3 class="text-center">Why doesn't the Site have a standard cookie banner like other sites?</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>When you access the Site, the only information stored on your browser are strictly necessary for the functioning and day-to-day administration of the Site in accordance with applicable regulations.</p>
                        <p>The banner is therefore not necessary as your consent is not required.</p>
                        <p>In addition, any cookies deposited on your browser are not under our control.</p>
                        <p>The Github website, which hosts our site, uses technologies that require the use of cookies.</p>
                        <p>By browsing our site you accept the <a href="https://docs.github.com/en/site-policy/">site policy</a> and all Github rules</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3 class="text-center">Your cookie preferences / How to prevent cookies from being deposited on your browser</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>You may refuse or disable all cookies at any time, except those necessary for the stable operation of the Site,</p>
                        <p>unless you go to the settings of your Internet browser and disable all cookies from the Site.</p>
                        <p>However, as mentioned above, your user experience may be adversely affected in ways that are not measurable and for which we take no responsibility.</p>
                        <p>You can change your cookie preferences at any time by following the instructions provided by Github on its website.</p>
                        <p>To prevent cookies from being created, please follow one of the following instructions, depending on the browser you're using:</p>
                        <ul role="list" class="marker:text-sky-600 pl-5 pt-5 space-y-3 text-slate-500">
                            <li class="list-disc">
                                <a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank">Chrome</a>
                            </li>
                            <li class="list-disc">
                                <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank">Firefox</a>
                            </li>
                            <li class="list-disc">
                                <a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank">Edge</a>
                            </li>
                            <li class="list-disc">
                                <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank">Safari</a>
                            </li>
                            <li class="list-disc">
                                <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank">Opera</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style>

</style>