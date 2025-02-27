<script>
import app from '@/App.vue';
import { useSeoMeta } from '@unhead/vue';
const { ApiURL, Language, PortfolioTitle, routerLink } = app.components;

useSeoMeta({
  title: `${routerLink[0].sitemap} - ${PortfolioTitle}`,
  description:'',
});
</script>

<template>
    <div class="flex flex-col items-center">
        <h1 class="uppercase">Sitemap</h1>
        <div class="flex flex-col items-center py-4">
            <h3 class="uppercase">Importants</h3>
            <div class="flex flex-col items-start">
                <ul role="list" class="w-full p-5 space-y-3">
                    <li ><a href="/">Home</a></li>
                    <li ><a href="/projets">Projects</a></li>
                    <li ><a href="/contact">Contact</a></li>
                    <li ><a href="/about">About</a></li>
                    <li ><a href="/about#cv">Curriculum Vitae</a></li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col items-center py-4">
            <h3 class="uppercase">Rules</h3>
            <div class="flex flex-col items-start">
                <ul role="list" class="w-full p-5 space-y-3">
                    <li ><a href="/mentions-legales">Legal mentions</a></li>
                    <li ><a href="/politique-confidentialite">Privacy policy</a></li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col items-center py-4">
            <h3 class="uppercase">Sitemaps</h3>
            <div class="flex flex-col items-start">
                <ul role="list" class="w-full p-5 space-y-3">
                    <li ><a href="/sitemap">Sitemap - user</a></li>
                    <li ><a href="/sitemap.xml">Sitemap - robot</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style></style>