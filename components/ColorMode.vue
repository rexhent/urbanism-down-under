
<template>
<div flex="~">
    <button flex="~" p="1" border="none" rounded="~" bg="none" @click="switchColor">{{ theme }}</button>
</div>

</template>
<script setup lang="ts">
const colorMode = useColorMode()
const theme: Ref<string> = ref("☀️")

const switchColor = () => {
    if (colorMode.preference == "dark") {
        colorMode.preference = "light"
        theme.value = "☀️";
    } else {
        colorMode.preference = "dark"
        theme.value = "🌙";
    }
}
</script>