<script setup lang="ts">
const appConfig = useAppConfig();

const pageLinks = [
  {
    name: "Home",
    path: "/",
  },
];
</script>

<template>
  <div class="headline">
    <h1>lukas-boecker.de</h1>
    <section class="links">
      <NuxtLink
          class="link"
          v-for="link in pageLinks"
          :to="link.path"
          :key="link.name"
          :class="{ active: $route.path === link.path }"
      >
        <h3>{{ link.name }}</h3>
      </NuxtLink>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables/colors.scss";

.headline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid;
  border-bottom-color: $primary-default;
  color: $font-default;
  background: $background-default;

  & .links {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    width: 20rem;
    gap: 16px;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: $primary-default;
      text-decoration: underline;
    }

    &.active {
      text-decoration: underline;
    }
  }
}
</style>
