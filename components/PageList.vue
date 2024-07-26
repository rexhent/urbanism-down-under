
<template>
        <ContentList path="/articles" v-slot="{ list }">
            <ul>
      <li v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path">
            <h2>{{ article.title }}</h2>
        </NuxtLink>
        <p>{{ article.description }}</p>
    </li>
</ul>
    </ContentList>
    <!-- <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation> -->
  </template>

  