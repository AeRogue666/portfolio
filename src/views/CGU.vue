<script setup>
import app from '@/App.vue';
const { ApiURL, Language } = app.components;
</script>

<template>
    <div v-if="Language === 'fr-FR'" class="flex flex-col items-center">
        <h1 class="uppercase">Conditions Générales d'Utilisations</h1>
        <p class="text-italic">En vigueur au 25/10/2025</p>
        <div class="flex flex-col items-start max-w-screen-lg">
            <p>Les présentes conditions générales d'utilisation (dites «<b>CGU</b>») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par aureldev.fr (ci-après nommé le "Site" ou le "site") et de définir les conditions d’accès et d’utilisation des services par «<b>l'Utilisateur</b>».</p>
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
                        <li class="list-disc">Consultation des règlements appliquables sur le site</li>
                        <li class="list-disc">Consultation d'une page afin d'établir une potentielle relation par prise de contact via un formulaire de contact</li>
                        <li class="list-disc">Consultation d'une page d'erreur lors d'un évenement faisant suite à une page non trouvé</li>
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
                        <li class="list-disc"> Par le formulaire de contact disponible sur la page de <a href="/contact">Contact</a> du Site</li>
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
                    <li class="list-disc">Par formulaire : Disponible sur la page de <a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</template>

<style></style>