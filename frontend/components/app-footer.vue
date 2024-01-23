<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/lukas.258/',
    icon: ['fab', 'instagram']
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lukas-b%C3%B6cker-0645932a2/',
    icon: ['fab', 'linkedin']
  },
  {
    name: 'GitHub',
    url: 'https://github.com/lbocker',
    icon: ['fab', 'github']
  }
];
</script>

<template>
  <div class="footer">
    <div class="footer-section socials">
      <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="blank"
      >
        <client-only>
          <font-awesome-icon class="social-icons" :icon="link.icon"/>
        </client-only>
      </a>
    </div>
    <div class="footer-bottom">
      &copy; lukas-boecker.de | Designed by Lukas Böcker
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables/colors.scss";

.footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: $background-default;
  color: $font-default;
  padding: 1rem;
  margin-top: 1rem;
  border-top: 1px solid #1b1b1b;
  border-top-color: $primary-default;
  border-bottom: 1px solid #1b1b1b;

  & .footer-section {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    gap: 32px;

    &.socials a {
      font-size: 1rem;
      text-decoration: none;
      color: inherit;
      margin-bottom: 12px;

      &:hover {
        color: $primary-default;
        text-decoration: underline;
      }

      & .social-icons {
        height: 35px;
        color: $font-default;
        transition: color 0.3s ease-in-out;
      }
    }
  }

  & .footer-section,
  .footer-bottom {
    text-align: center;
    flex: 0 0 100%;
  }
}
</style>
