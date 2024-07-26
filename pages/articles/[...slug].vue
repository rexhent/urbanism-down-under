
<template prose="~" m="auto" slide="enter-content">
  
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <h1>{{ doc.title }}</h1>
          <h5>By {{ doc.author }}</h5>
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found. Another delayed project? :(</h1>
      </template>
    </ContentDoc>
    </main>
</template>

<style scoped>
main {
  font-family: 'Inter', sans-serif;
}
</style>  