<div class="container">

    <div class="page-buttons-container">
        <Group variant="raised">
            {#each pages as page}
                <Button
                    on:click={ () => {changePage(page)} }
                    variant="raised"
                    color={page == currentPage ? "primary" : "secondary"}
                >
                    <Label>{page}</Label>
                </Button>
            {/each}
        </Group>
    </div>

    <slot/>

</div>



<script lang="ts">
    import Button, { Group, Label } from "@smui/button";

    export let pages: number[];
    export let currentPage: number;

    console.log(pages, currentPage);

    function changePage(page: number): void {
        if (page == currentPage) return;
        
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("page", page.toString());

        window.location.search = searchParams.toString();
    }

</script>

<style lang="scss">

    .page-buttons-container {
        display: flex;
    }

</style>