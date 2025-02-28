<script setup>
import { useSeoMeta } from '@unhead/vue';

const props = defineProps({
  Language: String,
  PortfolioTitle: String,
  routerLink: Array,
  themeColor: String,
});
const { Language, PortfolioTitle, routerLink } = props;

useSeoMeta({
  title: `${routerLink[0].cgu} - ${PortfolioTitle}`,
  description:'Terms of Services page',
});
</script>

<template>
    <div v-if="Language === 'fr-FR'" class="flex flex-col items-center">
        <h1 class="uppercase">Conditions Générales d'Utilisations</h1>
        <p class="text-italic">En vigueur au 25/10/2025</p>
        <div class="flex flex-col items-start max-w-screen-lg">
            <p>Les présentes conditions générales d'utilisation (dites «<b>CGU</b>») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par aureldev.fr (ci-après nommé le «<b>Site</b>» ou le «<b>site</b>») et de définir les conditions d’accès et d’utilisation des services par «<b>l'Utilisateur</b>».</p>
            <p>Ce site appartient et est géré par Aurélien GASNIER. En utilisant ce site, vous indiquez que vous avez lu et compris les conditions d’utilisation et que vous acceptez de les respecter en tout temps.</p>
        </div>
        <div class="flex flex-col items-start max-w-screen-lg">
            <div class="flex flex-col items-center py-4">
                <h2>Accès au site</h2>
                <div class="flex flex-col items-start p-4">
                    <p>Le site aureldev.fr permet à l'Utilisateur un accès gratuit aux services suivants :</p>
                    <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                        <li class="list-disc">Consultation de projets personnels</li>
                        <li class="list-disc">Consultation d'une liste d'entreprises et d'emplois effectués</li>
                        <li class="list-disc">Consultation d'une page informative sur ma personne ainsi que d'un Curriculum Vitae disponible en Français et en Anglais au format PDF</li>
                        <li class="list-disc">Consultation des règlements applicables sur le site</li>
                        <li class="list-disc">Consultation d'une page afin d'établir une potentielle relation par prise de contact via une section de contact</li>
                        <li class="list-disc">Consultation d'une page d'erreur lors d'un évènement faisant suite à une page non trouvé</li>
                    </ul>
                    <p>Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.</p>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <h2>Collecte de données</h2>
                <div class="flex flex-col items-start p-4">
                    <p>Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.</p>
                    <p>En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit :</p>
                    <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                        <li class="list-disc"> Par mail à contact@aureldev.fr</li>
                    </ul>
                    <p>Pour en savoir plus sur nos manières de traiter vos données, rendez-vous sur la page <a href="/politique-confidentialite">Politique de confidentialité</a></p>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <h2>Droit applicable et juridiction compétente</h2>
                <div class="flex flex-col items-start p-4">
                    <p>Ce document est soumis aux lois applicables en France et vise à se conformer à ses règles et règlements nécessaires.</p>
                    <p>Cela inclut la réglementation à l’échelle de l’UE énoncée dans le RGPD</p>
                    <p>En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.</p>
                    <p>Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux coordonnées inscrites sur la page <a href="/politique-confidentialite#contactus" target="_blank">Politique de confidentialité</a>.</p>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <h2>Propriété intellectuelle</h2>
                <div class="flex flex-col items-start p-4">
                    <p>Les marques, logos, signes ainsi que tout les contenus publié et mis à disposition sur le site font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur, qu'ils appartiennent à Aurélien GASNIER ou à un tiers créateur.</p>
                    <p>Cela comprend, mais n’est pas limité aux images, textes, logos, documents, fichiers téléchargeables et tout ce qui contribue à la composition de ce site.</p>
                    <p>L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.</p>
                    <p>Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété intellectuelle.</p>
                    <p>Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.</p>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <h2>A savoir</h2>
                <div class="flex flex-col items-center">
                    <h3>Utilisations acceptables</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>En tant qu’utilisateur, vous acceptez d’utiliser notre site légalement et de ne pas utiliser ce site pour des fins illicites, à savoir :</p>
                        <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                            <li class="list-disc">Harceler ou maltraiter les autres utilisateurs du site</li>
                            <li class="list-disc">Violer les droits des autres utilisateurs du site</li>
                            <li class="list-disc">Violer les droits de propriété intellectuelle des propriétaires du site ou de tout tiers au site</li>
                            <li class="list-disc">Agir de toute façon qui pourrait être considérée comme frauduleuse</li>
                            <li class="list-disc">Participer à toute activité illégale sur le site</li>
                            <li class="list-disc">Afficher tout matériel qui peut être jugé inapproprié ou offensant</li>
                        </ul>
                        <p>Si nous estimons que vous utilisez ce site illégalement ou d’une manière qui viole les conditions d’utilisation acceptable ci-dessus, nous nous réservons le droit de limiter, suspendre ou résilier votre accès à ce site. Nous nous réservons également le droit de prendre toutes les mesures juridiques nécessaires pour vous empêcher d’accéder à notre site.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>Limite de responsabilité</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>Aurélien GASNIER sera tenu responsable de tout problème découlant de ce site, à charge de preuves, et si cela est dû à un dysfonctionnement volontaire. Néanmoins, Aurélien GASNIER ne pourra pas être tenus responsable de tout problème découlant de toute utilisation irrégulière de ce site ou découlant d'un dysfonctionnement extérieur (panne de serveur, etc.).</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>Modifications</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>Ces conditions générales peuvent être modifiées de temps à autre afin de maintenir le respect de la loi et de refléter tout changement à la façon dont nous gérons notre site et la façon dont nous nous attendons à ce que les utilisateurs se comportent sur notre site. Nous recommandons à nos utilisateurs de vérifier ces conditions générales de temps à autre pour s’assurer qu’ils sont informés de toute mise à jour. Au besoin, nous informerons les utilisateurs par courriel des changements apportés à ces conditions ou nous afficherons un avis sur notre site.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>Divisibilité</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>Si, à tout moment, l’une des dispositions énoncées dans le présent document est jugée incompatible ou invalide en vertu des lois applicables, ces dispositions seront considérées comme nulles et seront retirées du présent document. Toutes les autres dispositions ne seront pas touchées par les lois et le reste du document sera toujours considéré comme valide.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>Indemnité</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>En tant qu’utilisateur, vous indemnisez par les présentes Aurélien GASNIER de toute responsabilité, de tout coût, de toute cause d’action, de tout dommage ou de toute dépense découlant de votre utilisation de ce site ou de votre violation de l’une des dispositions énoncées dans le présent document.</p>
                    </div>
                </div>
            </div>
        <div class="flex flex-col items-center">
            <h2>Nous contacter</h2>
            <div class="flex flex-col items-start p-4">
                <p>Veuillez communiquer avec nous si vous avez des questions ou des préoccupations. Nos coordonnées sont les suivantes :</p>
                <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                    <li class="list-disc">Par email : contact@aureldev.fr</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
    <div v-if="Language === 'en-UK'" class="flex flex-col items-center">
        <h1 class="uppercase">Terms and Conditions of Use</h1>
        <p class="text-italic">Effective from 25.10.2025</p>
        <div class="flex flex-col items-start max-w-screen-lg">
            <p>These general terms and conditions of use (hereafter referred to as «<b>TOS</b>») are intended to regulate terms and conditions of access and use of aureldev.fr (hereafter referred to as the «<b>Site</b>» or the «<b>site</b>») and its services, and to define the conditions under which the «<b>User</b>» may access and use the services.</p>
            <p>The Site is owned and operated by Aurélien GASNIER. By using this Site, you acknowledge that you have read and understood the Terms of Use and agree to abide by them at all times.</p>
        </div>
        <div class="flex flex-col items-start max-w-screen-lg">
            <div class="flex flex-col items-center py-4">
                <h2>Site access</h2>
                <div class="flex flex-col items-start p-4">
                    <p>The Site provides the User with free access to the following services:
                    </p>
                    <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                        <li class="list-disc">Personal project consulting</li>
                        <li class="list-disc">Consult a list of companies and completed projects</li>
                        <li class="list-disc">Consultation of a personal information page and a Curriculum Vitae available in French and English in PDF format</li>
                        <li class="list-disc">Consultation of the regulations applicable to the site</li>
                        <li class="list-disc">Consultation of a page to establish a potential relationship via a contact section</li>
                        <li class="list-disc">Consultation of an error page in the event of a page not being found</li>
                    </ul>
                    <p>The site is accessible free of charge from any location to any User with Internet access. All costs incurred by the User to access the service (hardware, software, Internet connection, etc.) are at the User's expense.</p>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <h2>Collecting data</h2>
                <div class="flex flex-col items-start p-4">
                    <p>The site ensures that the User's personal information is collected and processed in compliance with the French Data Protection Act n°78-17 of January 6, 1978.</p>
                    <p>Under the French Data Protection Act of January 6, 1978, the User has the right to access, rectify, delete and object to his or her personal data. The User may exercise this right:</p>
                    <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                        <li class="list-disc"> By mail at contact@aureldev.fr</li>
                    </ul>
                    <p>To find out more about how we process your data, please visit our <a href="/privacy-policy">Privacy Policy</a> page</p>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <h2>Applicable law and jurisdiction</h2>
                <div class="flex flex-col items-start p-4">
                    <p>This document is subject to the laws applicable in France and is intended to comply with its necessary rules and regulations.</p>
                    <p>This includes the EU-wide regulations set out in the GPDR.</p>
                    <p>In the event of failure to reach an amicable resolution of any dispute arising between the parties, the French courts shall have sole jurisdiction.</p>
                    <p>For any questions relating to the application of these GTU, you can contact the publisher at the contact details listed on the <a href="/privacy-policy#contactus" target="_blank">Privacy Policy</a> page.</p>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <h2>Intellectual property rights</h2>
                <div class="flex flex-col items-start p-4">
                    <p>Trademarks, logos, signs and all content published and made available on the site are protected by the French Intellectual Property Code, and more specifically by copyright, whether they belong to Aurélien GASNIER or to a third-party creator.</p>
                    <p>This includes, but is not limited to, images, texts, logos, documents, downloadable files and anything else that contributes to the composition of this site.</p>
                    <p>The User must request prior authorization from the site for any reproduction, publication or copy of the various contents. The User undertakes to use the contents of the site in a strictly private context; any use for commercial or advertising purposes is strictly forbidden.</p>
                    <p>Any total or partial representation of this site by any process whatsoever without the express authorization of the website operator constitutes an infringement punishable by article L 335-2 et seq. of the French Intellectual Property Code.</p>
                    <p>In accordance with article L122-5 of the French Intellectual Property Code, Users who reproduce, copy or publish protected content must cite the author and source.</p>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <h2>To know more</h2>
                <div class="flex flex-col items-center">
                    <h3>Acceptable uses</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>As a user, you agree to use our site lawfully and not to use this site for unlawful purposes, namely :</p>
                        <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                            <li class="list-disc">Harass or abuse other users of the site</li>
                            <li class="list-disc">Violate the rights of other site users</li>
                            <li class="list-disc">Violate the intellectual property rights of the site owners or any third party to the site</li>
                            <li class="list-disc">Act in any way that could be considered fraudulent</li>
                            <li class="list-disc">Participate in any illegal activity on the site</li>
                            <li class="list-disc">Post any material that may be deemed inappropriate or offensive</li>
                        </ul>
                        <p>If we believe that you are using this site illegally or in a manner that violates the above acceptable terms of use, we reserve the right to limit, suspend or terminate your access to this site. We also reserve the right to take any legal action necessary to prevent you from accessing our site.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>Limitation of liability</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>Aurélien GASNIER will be held responsible for any problems arising from this site, subject to proof, and if this is due to a voluntary malfunction. However, Aurélien GASNIER cannot be held responsible for any problem arising from any irregular use of this site or arising from an external malfunction (server failure, etc.).</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>Modifications</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>These terms and conditions may be amended from time to time in order to maintain compliance with the law and to reflect any changes to the way we operate our site and the way we expect users to behave on our site. We recommend that our users check these terms and conditions from time to time to ensure that they are aware of any updates. If necessary, we will notify users by e-mail of changes to these terms and conditions or post a notice on our site.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>Severability of provisions</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>If at any time any of the provisions set forth in this document are held to be inconsistent with or invalid under applicable law, such provisions shall be deemed null and void and shall be removed from this document. All other provisions shall remain unaffected by such laws and the remainder of this document shall continue to be considered valid.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h3>Compensation</h3>
                    <div class="flex flex-col items-start p-4">
                        <p>As a user, you hereby indemnify Aurélien GASNIER from and against any and all liability, costs, causes of action, damages or expenses arising out of your use of this site or your breach of any of the provisions set forth herein.</p>
                    </div>
                </div>
            </div>
        <div class="flex flex-col items-center">
            <h2>Contact us</h2>
            <div class="flex flex-col items-start p-4">
                <p>Please contact us if you have any questions or concerns. Our contact details are as follows:</p>
                <ul role="list" class="marker:text-sky-600 pl-5 py-5 space-y-3">
                    <li class="list-disc">By mail: contact@aureldev.fr</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</template>