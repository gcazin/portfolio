<script setup lang="ts">
import GcIcon from '~/components/site/GcIcon.vue'
import SiteFooter from '~/components/site/SiteFooter.vue'

withDefaults(
    defineProps<{
        title?: string
        secondaryHref?: string
        secondaryLabel?: string
        backToPortfolio?: boolean
    }>(),
    {
        title: 'Une idée ou un projet en tête ?',
        backToPortfolio: false,
    }
)
</script>

<template>
    <section class="band-outer">
        <div class="band sr">
            <div class="fl2 blob" aria-hidden="true"></div>
            <div class="cta">
                <h2 class="cta-title">{{ title }}</h2>
                <div class="cta-actions">
                    <a
                        v-if="secondaryHref"
                        class="btn pill pill-ghost-band"
                        :href="secondaryHref"
                        >{{ secondaryLabel
                        }}<GcIcon
                            class="arr"
                            name="arrowUpRight"
                            :size="18"
                            :stroke-width="2"
                    /></a>
                    <a class="btn pill pill-apricot" href="/#contact"
                        >Parlons de votre projet<GcIcon
                            class="arr"
                            name="arrowUpRight"
                            :size="18"
                            :stroke-width="2"
                    /></a>
                </div>
            </div>
            <SiteFooter :back-to-portfolio="backToPortfolio" />
        </div>
    </section>
</template>

<style scoped>
.blob {
    position: absolute;
    right: 12%;
    bottom: -50px;
    width: 120px;
    height: 120px;
    border-radius: 999px;
    background: var(--apricot);
}

.cta {
    position: relative;
    max-width: 1192px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: clamp(48px, 6vw, 80px) var(--gutter);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
}

.cta-title {
    margin: 0;
    max-width: 640px;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(34px, 4.5vw, 56px);
    line-height: 1;
    letter-spacing: -0.03em;
}

.cta-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}
</style>
