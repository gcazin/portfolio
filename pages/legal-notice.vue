<script setup>
import { onMounted } from 'vue'
import Text from '~/components/elements/Text.vue'
import Section from '~/components/layout/Section.vue'

onMounted(() => {
    document.title = 'CV - Guillaume Cazin - Développeur web freelance'
})
</script>

<template>
    <Section title="Mentions légales" title-selector="h1" class="pt-16 lg:pt-0">
        <div class="space-y-4">
            <Text>
                Conformément aux dispositions de la loi n° 2004-575 du 21 juin
                2004 pour la confiance en l'économie numérique, il est précisé
                aux utilisateurs du site Guillaume Cazin l'identité des
                différents intervenants dans le cadre de sa réalisation et de
                son suivi.
            </Text>

            <div>
                <Text type="subtitle">Edition du site</Text>
                <Text>
                    Le présent site, accessible à l’URL www.guillaume-cazin.fr
                    (le « Site »), est édité par : Guillaume Cazin, résidant 45
                    rue du jeu de paume 62200 BOULOGNE-SUR-MER, de nationalité
                    Française (France), né(e) le 22/01/1999,
                </Text>
            </div>

            <div>
                <Text type="subtitle">Hébergement</Text>
                <Text>
                    Le Site est hébergé par la société Netlify, situé 512 2nd
                    Street, Suite 200 San Francisco, CA 94107, (contact
                    téléphonique ou email : +18448997312).
                </Text>
            </div>

            <div>
                <Text type="subtitle">Directeur de publication</Text>
                <Text>
                    Le Directeur de la publication du Site est Guillaume Cazin.
                </Text>
            </div>

            <div>
                <Text type="subtitle">Nous contacter</Text>
                <Text>
                    Par téléphone : +33610854218 Par email :
                    contact@guillaume-cazin.fr Par courrier : 45 rue du jeu de
                    paume 62200 BOULOGNE-SUR-MER
                </Text>
            </div>
            <div>
                <Text type="subtitle">Données personnelles</Text>
                <Text>
                    Le traitement de vos données à caractère personnel est régi
                    par notre Charte du respect de la vie privée, disponible
                    depuis la section "Charte de Protection des Données
                    Personnelles", conformément au Règlement Général sur la
                    Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
                </Text>
            </div>
        </div>
    </Section>
</template>

<style scoped>
#cv {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%231d4ed8' fill-opacity='0.05'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}
</style>
