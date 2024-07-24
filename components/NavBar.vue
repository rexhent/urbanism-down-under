<template>
    <div flex="~ row" justify="between" items="center" border="b-slate-500">
        <NuxtLink to="/"><h1>Urbanism Down Under</h1></NuxtLink>
        <div flex="~" justify="between">
            <NuxtLink mr="2" to="/articles">Articles</NuxtLink>
            <NuxtLink mr="2" to="/articles/about">About Me</NuxtLink>
            <ColorMode />
        </div>
    </div>  
</template>