<Header />
<slot></slot>

<script lang="ts">
    import Header from "$lib/components/Header.svelte";
</script>

<style lang="scss" global>

    @use "@material/typography/mdc-typography";

    :global(body) {
        margin: 0;
        padding: 0;
    }

</style>