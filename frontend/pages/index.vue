<script setup lang="ts">
const appConfig = useAppConfig()
const title = 'Home'

useHead({
  title: title,
  meta: [
    {
      name: 'description',
      content: 'lukas-boecker.de | Home'
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: 'lukas-boecker.de | Home'
    },
    {
      property: 'og:image',
      content: appConfig.baseUrl + '/images/og-image.jpg'
    },
    {
      property: 'og:url',
      content: appConfig.baseUrl + '/'
    }
  ]
})
</script>

<template>
  <div>
    <Head>
      <Title>lukas-boecker.de | Home</Title>
    </Head>
  </div>
  <div class="container">
    <section>
      <img src="https://avatars.githubusercontent.com/u/81483010?v=4" alt="Profile picture" class="profile-picture">
      <h1 class="logo-text">Lukas Böcker</h1>
      <h2 class="logo-subtext">Software Engineer</h2>
      <p>
        I am a 19 year old Developer from Germany. I am currently working at <a href="https://www.shopware.com/"
                                                                                target="_blank">shopware AG</a> in
        Schöppingen as a Trainee.
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables/colors";
@import "@/assets/scss/_variables/global";

.container {
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    & .profile-picture {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      margin-bottom: 1rem;
      border: 1px solid $primary-default;
      transition: transform 0.5s;

      &:hover {
        transform: scale(1.1);
      }
    }

    .logo-text {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: $font-900;
    }

    .logo-subtext {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 1rem;
      color: $font-default;
    }
  }
}
</style>
